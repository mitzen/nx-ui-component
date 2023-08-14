import 'reflect-metadata';
import { NextApiRequest, NextApiResponse } from 'next'
import { FacadeJobSearch } from '@/lib/facade/job/facadeJobSearch';

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

        let jobSearch = new FacadeJobSearch();
        let result = await jobSearch.executeJobQuery(req.query.searchText as string, req.query.location as string, req.query.category as string);
        res.json(result);
    }
}