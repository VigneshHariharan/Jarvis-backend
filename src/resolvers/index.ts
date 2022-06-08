import { users, usersMutations } from '#resolvers/users/userResolvers'

export const queries = {
    users
};
export const mutations = {
    ...usersMutations
}