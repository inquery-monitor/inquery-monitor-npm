const mapResolvers = require("./mapResolvers")


/**
 * 
 * @param {*} resolvers - this is the resolvers object with your GraphQL Schema
 * @param {*} accessID  - accessID can be retrieved from our website
 */
const enableMonitoring = (resolvers,accessID) => {
const injectedResolvers = mapResolvers(resolvers,accessID)
return injectedResolvers
};




module.exports = { enableMonitoring }
