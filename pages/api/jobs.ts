
import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    const pageSize = 10;    
    const prisma = new PrismaClient() 
    
    if (req.method == "POST") {
        console.log("POST method detected.")
    }
    else if (req.method == "GET") 
    {       
        console.log(req.query.page);
        res.json("ok");       
        
        let page = 1;
        
        if (req.query && req.query.page) {
            page = parseInt(req.query.page as string);
        }
        
        const getJobListing  = async function () {
            const jobs = await prisma.jobs.findMany({
                skip: page * pageSize, 
                take: pageSize
            })          
            res.status(200).json(jobs)
        }
        
        await getJobListing()
        .then(async () => {
            await prisma.$disconnect()
        })
        .catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })
    }
}