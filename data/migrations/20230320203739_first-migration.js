/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable('fruit', table => {
    table.increments('fruit_id') 
    //^^^^makes an id column that increments in the db with title fruit_id
    table.string('fruit_name', 100).notNullable().unique() //<<< makes it so it has a not NULL constraint and the .unique() obviouly makes it only be able to have one
    //^^^^makes an string name column in the db with title fruit_id
    //and the '100' means that we don't want over 100 charaters, it's like a contraint
    table.decimal('avg_weight_oz').notNullable()
    //^^^^makes an avg_weight_oz column that that is a number in the datbase
    table.boolean('delicious')



  })
}; 

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('fruits')
};

//there are up and down migrations because the database can be migrated up or 
//down to evolve it or migrate it down to revert it. 
//during the course of deleopment we might need to use different 
//reditions of the database over the course of delevmeopt. 
