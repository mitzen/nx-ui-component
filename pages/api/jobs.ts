
import { PrismaClient } from '@prisma/client'
import { IncomingMessage, ServerResponse } from 'http';

export default async function handler(req: IncomingMessage, res: ServerResponse) {
    
    const prisma = new PrismaClient() 
    
    if (req.method == "POST") {
        console.log("POST method detected.")
    }
    
    async function main() {        
        await prisma.user.create({
            data: {
                email: 'hello@prisma.com'
            },
        });        
        const jobs = await prisma.jobs.findMany()
        console.log(jobs)
        res.status(200).json(jobs)
    }
    
    await main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
}