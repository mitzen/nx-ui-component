import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log(req.query.id)
    console.log(req.query.name)
    res.json("hiring party id")
}