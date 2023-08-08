import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    
      // create jobs
      for (let index = 0; index < 20; index++) {
        const jobs = await prisma.jobs.create({
            data: {
              name: `Front end developer${index}`,
              description: `front end developer description ${index}`,
              jobInDetails: `we are seeking a highly motivated front end developer ${index}`,
              createdAt: '2013-02-14T13:15:03-08:00',
              updatedAt: '2013-02-14T13:15:03-08:00' 
            }
       })
    }
              
       // create hiringparty
      for (let index = 0; index < 20; index++) {
        const hiringParty = await prisma.hiringParty.create({
            data: {
              name: `Front end developer${index}`,
              email: `hiringparty@test.com${index}`,
              createdAt: '2013-02-14T13:15:03-08:00',
              updatedAt: '2013-02-14T13:15:03-08:00' 
            }
       })
    }

       // create job seekers 
      for (let index = 0; index < 20; index++) {
        const hiringParty = await prisma.jobSeeker.create({
            data: {
              firstname: `Jeremy ${index}`,
              lastname: `Woo${index}`,
              createdAt: '2013-02-14T13:15:03-08:00',
              updatedAt: '2013-02-14T13:15:03-08:00' 
            }
       })
    }
 }      


main()
.then(async () => {
    await prisma.$disconnect()
})
.catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})