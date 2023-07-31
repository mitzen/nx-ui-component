
import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    console.log(req);
    res.json("ok");

    const prisma = new PrismaClient() 
    
    if (req.method == "POST") {
        console.log("POST method detected.")
    }
    
    async function getJobListing() {
        const jobs = await prisma.jobs.findMany()
        console.log(jobs)
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