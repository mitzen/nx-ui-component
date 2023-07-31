
import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const prisma = new PrismaClient() 
    if (req.method == "POST") {
        console.log("POST method detected.")
    }
    
    async function getJobListing() {
        const hiringParty = await prisma.hiringParty.findFirst({
            where: { name: 'Alice' },
        });

        res.status(200).json(hiringParty)
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