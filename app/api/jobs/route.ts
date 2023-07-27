
import { NextResponse } from 'next/server'

// export async function GET(request: Request) {
//     return NextResponse.json("Ok")
// }
import { PrismaClient } from '@prisma/client'

export async function GET(request: Request) { 
    
    const prisma = new PrismaClient()

    async function main() {
    
        await prisma.user.create({
            data: {
              //name: 'Rich',
              email: 'hello@prisma.com',
            //   posts: {
            //     create: {
            //       title: 'My first post',
            //       body: 'Lots of really interesting stuff',
            //       slug: 'my-first-post',
            //     },
            //   },
            },
          })


        const allUsers = await prisma.user.findMany()

        console.log(allUsers)
    }
    
    await main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })

    return NextResponse.json("Ok-ithink")
}
