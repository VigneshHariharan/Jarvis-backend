import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

// need database name in mongodb client
async function main() {
  // Connect the client
  await prisma.$connect();
  //  await prisma.user.create({
  //    data: {
  //      name:'F',
  //      email: 'hello@prisma.com',
  //    }
  //  });
  //  const allUsers = await prisma.user.findMany()
  // console.log(allUsers)
  // ... you will write your Prisma Client queries here
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  });

export { prisma };