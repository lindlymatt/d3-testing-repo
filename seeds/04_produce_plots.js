'use strict';

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('produce_plots').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('produce_plots').insert({
          id: 1,
          plot_id: 1,
          produce_id: 1
        }),
        knex('produce_plots').insert({
          id: 2,
          plot_id: 2,
          produce_id: 2
        }),
        knex('produce_plots').insert({
          id: 3,
          plot_id: 3,
          produce_id: 3
        }),
        knex('produce_plots').insert({
          id: 4,
          plot_id: 4,
          produce_id: 4
        }),
        knex('produce_plots').insert({
          id: 5,
          plot_id: 5,
          produce_id: 5
        }),
        knex('produce_plots').insert({
          id: 6,
          plot_id: 5,
          produce_id: 5
        }),
        knex('produce_plots').insert({
          id: 7,
          plot_id: 5,
          produce_id: 5
        }),
        knex('produce_plots').insert({
          id: 8,
          plot_id: 5,
          produce_id: 5
        }),
        knex('produce_plots').insert({
          id: 9,
          plot_id: 5,
          produce_id: 5
        }),
        knex('produce_plots').insert({
          id: 10,
          plot_id: 5,
          produce_id: 5
        }),
        knex('produce_plots').insert({
          id: 11,
          plot_id: 5,
          produce_id: 5
        }),
        knex('produce_plots').insert({
          id: 12,
          plot_id: 5,
          produce_id: 5
        }),
        knex('produce_plots').insert({
          id: 13,
          plot_id: 5,
          produce_id: 5
        })
      ]);
    });
};
