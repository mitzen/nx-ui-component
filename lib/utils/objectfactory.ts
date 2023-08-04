import 'reflect-metadata';
import { container } from "tsyringe";
import { PrismaClient } from '@prisma/client';

export namespace Utils {
    
    export class ObjectFactory 
    {
        static initFactory(): void { 
            container.register<PrismaClient>('PrismaClient', {
                useValue: new PrismaClient(),
            });        
        }
    }
}
