import 'reflect-metadata';
import { Model } from '../../model/posting';
import { inject, injectable } from 'tsyringe';
import { PrismaClient } from '@prisma/client';

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
                
                const results = await this.prisma.jobs.findMany({
                    where: 
                    { 
                        name: { contains: `${searchCriteria.searchText}` } 
                    },
                    //skip: searchCriteria.skip * pageSize, 
                    take: pageSize
                })
                return results;
            }
            
            public async executeSearchById(searchId: string) {
                const results = await this.prisma.jobs.findUnique(
                {
                    where: 
                    { 
                        id: searchId
                    }
                })
                return results;
            }
            
            public async getJobListing(searchCriteria: Model.JobSearchModel) { 
                let result: any;
                await this.executeSearchForJobListing(searchCriteria)
                .then(async (r) => {
                    result = r;
                    await this.prisma.$disconnect();
                })
                .catch(async (e) => {
                    console.error(e);
                    await this.prisma.$disconnect();
                    process.exit(1);
                });
            }
            
            public async getJobById(id: string) { 
                let result: any;
                await this.executeSearchById(id)
                .then(async (r) => {
                    result = r;
                    await this.prisma.$disconnect();
                })
                .catch(async (e) => {
                    console.error(e);
                    await this.prisma.$disconnect();
                    process.exit(1);
                });
                return result;
            }
        }
    }