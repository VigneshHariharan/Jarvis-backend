// server
import { prisma } from './prisma';
import { ApolloServer } from 'apollo-server';
import { typeDefs } from '#typeDefs/index';
import { queries } from '#resolvers/index'

const resolvers = {
    Query : queries,
    Mutation: {
        createUser: async (parent: any,body: any) => {
            const { user  } = body;
            console.log("user",user)
            const data = { name: user.name, email: user.email }
            await prisma.user.create({ data })
            // const userData = await prisma.user.findMany();
            // console.log("primsa",userData)
            // return userData;
            return "done"
        }
    }
};

const server = new ApolloServer({
    csrfPrevention: true,
    typeDefs,
    resolvers,
    cors:true
});

server.listen(process.env.PORT || 3001).then(({ url }) => {
    console.log('Server started in : ',url)
}).catch((err) => {
    console.log("Server error : ",err)
})

