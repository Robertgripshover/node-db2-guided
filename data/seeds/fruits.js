/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {

  await knex('table_name').truncate() //truncate resets the primary keys
  await knex('table_name').insert([
    {fruit_name: 'aplle', avg_weight_oz: 3, delicious: null},
    {fruit_name: 'orange', avg_weight_oz: 2, delicious: true},
    {fruit_name: 'pair', avg_weight_oz: 1, delicious: 0}
  ]);
};
