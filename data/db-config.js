const knex = require('knex');

const knexFileConfigs = require('../knexfile');

const env = process.env.NODE_ENV || 'development'
//this is configuring if it is using 'testing' or 'migrations' or 'production'

module.exports = knex(knexFileConfigs[env])

