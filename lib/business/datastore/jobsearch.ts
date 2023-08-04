import 'reflect-metadata';
import { Model } from '../../model/posting';
import { inject, injectable } from 'tsyringe';
import {  PrismaClient } from '@prisma/client';

export namespace Business.Datastore 
{   
    @injectable()
    export class JobSearch 
    {     
        pageSize = 10;    

        constructor(
        @inject('PrismaClient')
        private prisma: PrismaClient,
        ) {}
        
        public async executeSearchForJobListing(searchCriteria: Model.JobSearchModel) {
            
            let pageSize = 10;
            if (searchCriteria.pageSize > 1)
            pageSize = searchCriteria.pageSize;
            
            const jobs = await this.prisma.jobs.findMany({
                skip: searchCriteria.skip * pageSize, 
                take: pageSize
            })
            return jobs;
        }
        
        public async getJobListing(searchCriteria: Model.JobSearchModel) { 
            
            await this.executeSearchForJobListing(searchCriteria)
            .then(async () => {
                await this.prisma.$disconnect()
            })
            .catch(async (e) => {
                console.error(e)
                await this.prisma.$disconnect()
                process.exit(1)
            });
        }
    }
}