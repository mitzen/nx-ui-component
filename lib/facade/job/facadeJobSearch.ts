import 'reflect-metadata';
import { Business } from '@/lib/business/datastore/jobsearch';
import { container } from "tsyringe";
import { Utils } from '@/lib/utils/objectfactory';

export class FacadeJobSearch 
{
    private _search: Business.Datastore.JobSearch;
    
    constructor()
    {
        Utils.ObjectFactory.initFactory();
        this._search = container.resolve(Business.Datastore.JobSearch);
    }
    
    public async executeJobQuery(searchText: string, location: string, category: string): Promise<any> { 
        return await this._search.executeSearchForJobListing({
            searchText: searchText as string,
            jobLocation: location as string,
            jobCategory: category as string,
            skip: 10, 
            pageSize: 10
        });
    }
}
