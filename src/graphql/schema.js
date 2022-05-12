const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const queries = require('./queries');
const mutations  = require('./mutations')

const QueryType = new GraphQLObjectType({
    name: 'Querytype',
    description: 'Queries',
    fields: queries
})
const MutationType = new GraphQLObjectType({
    name: 'Mutationtype',
    description: 'Mutations',
    fields: mutations
})

module.exports = new GraphQLSchema({ 
    query: QueryType,
    mutation: MutationType})