import 'reflect-metadata';
import { NextApiRequest, NextApiResponse } from 'next'
import { Business } from '@/lib/business/datastore/jobsearch';
import { container } from "tsyringe";
import { Utils } from '@/lib/utils/objectfactory';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method == "POST") {
        console.log("POST method detected.")
    }
    else if (req.method == "GET") 
    {     
        let page = 1;

        Utils.ObjectFactory.initFactory();
        let search = container.resolve(Business.Datastore.JobSearch);
        
        let result = await search.getJobById("1");
        res.json(result);
    }
}