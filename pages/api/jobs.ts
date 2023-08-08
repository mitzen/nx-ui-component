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

        if (req.query && req.query.page) {
            page = parseInt(req.query.page as string);
        }        
               
        Utils.ObjectFactory.initFactory();
        let search = container.resolve(Business.Datastore.JobSearch);
        
        let result = await search.executeSearchForJobListing({
            searchText: req.query.searchText as string,
            jobLocation: req.query.location as string,
            jobCategory: req.query.category as string,
            skip: 10, 
            pageSize: 10

        });
        res.json(result);
    }
}