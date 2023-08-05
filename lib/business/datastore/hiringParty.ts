import 'reflect-metadata';
import { Model } from '../../model/posting';
import { inject, injectable } from 'tsyringe';
import {  PrismaClient } from '@prisma/client';

export namespace Business.Datastore 
{   
    @injectable()
    export class HiringParty 
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
            
            const results = await this.prisma.jobs.findMany({
                where: { name: searchCriteria.searchText } ,
                skip: searchCriteria.skip * pageSize, 
                take: pageSize
            })
            return results;
        }

        public async executeSearchById(searchId: string) {                        
            const results = await this.prisma.hiringParty.findUnique({
                where: { id: searchId }
            })
            return results;
        }
        
        public async getHiringParty(searchCriteria: Model.JobSearchModel) { 
            
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

        public async getHiringPartyById(id: string) { 

            await this.executeSearchById(id)
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