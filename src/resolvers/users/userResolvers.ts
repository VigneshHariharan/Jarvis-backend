import { prisma } from "#user-prisma";

const checkIfUserExists = async (
  id: string | any | undefined,
  email?: string
) => {
  const isUserExists = await prisma.user.findFirst({
    where: {
      id,
      email,
    },
  });

  return isUserExists;
};

export const users = async () => {
  try {
    const result = await prisma.user.findMany();
    return result;
  } catch (err) {
    return err;
  }
};

export const usersMutations = {
  createUser: async (parent: any, body: any) => {
    const { user } = body;
    const data = {
      name: user?.name,
      email: user?.email,
      password: user?.password,
    };
    try {
      const isUserExists = await checkIfUserExists(undefined, user?.email);
      if (isUserExists) {
        throw new Error(
          "This email id is already registered by another user, please use another email id or login with this email id"
        );
      }
      const result = await prisma.user.create({ data });
      return result;
    } catch (err) {
      return err;
    }
  },

  updateUser: async (parent: any, body: any) => {
    const { id, newUserData } = body.data;
    try {
      const isUserExists = await checkIfUserExists(id);
      if (!isUserExists) {
        throw new Error("User doesn't exist");
      }

      const result = await prisma.user.update({
        data: newUserData,
        where: {
          id,
        },
      });
      return result;
    } catch (err) {
      return err;
    }
  },

  deleteUser: async (parent: any, body: any) => {
    const { id } = body.data;
    try {
      const isUserExists = await checkIfUserExists(id);
      if (!isUserExists) {
        throw new Error("User doesn't exist");
      }
      await prisma.user.delete({
        where: {
          id,
        },
      });
    } catch (err) {
      return err;
    }
  },
};
