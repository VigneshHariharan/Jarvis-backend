import { prisma } from '#user-prisma'
export const users = async () => { 
    const response = await prisma.user.findMany()
    return response;
}