import 'reflect-metadata';
import { NextApiRequest, NextApiResponse } from 'next'
import { Business } from '@/lib/business/datastore/jobsearch';
import { container } from "tsyringe";
import { Utils } from '@/lib/utils/objectfactory';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.json("location");
}