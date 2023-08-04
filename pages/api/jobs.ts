
import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { Business } from '@/lib/business/datastore/jobsearch';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    if (req.method == "POST") {
        console.log("POST method detected.")
    }
    else if (req.method == "GET") 
    {     
        let page = 1;

        if (req.query && req.query.page) {
            page = parseInt(req.query.page as string);
        }

        let search = new Business.Datastore.JobSearch()
        res.json("ok");
    }
}