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
        }),
        knex('produce_plots').insert({
          id: 14,
          plot_id: 4,
          produce_id: 4
        }),
        knex('produce_plots').insert({
          id: 15,
          plot_id: 4,
          produce_id: 5
        }),
        knex('produce_plots').insert({
          id: 16,
          plot_id: 4,
          produce_id: 6
        }),
        knex('produce_plots').insert({
          id: 17,
          plot_id: 1,
          produce_id: 6
        }),
        knex('produce_plots').insert({
          id: 18,
          plot_id: 2,
          produce_id: 6
        }),
        knex('produce_plots').insert({
          id: 19,
          plot_id: 3,
          produce_id: 6
        }),
        knex('produce_plots').insert({
          id: 20,
          plot_id: 4,
          produce_id: 7
        }),
        knex('produce_plots').insert({
          id: 21,
          plot_id: 5,
          produce_id: 7
        }),
        knex('produce_plots').insert({
          id: 22,
          plot_id: 5,
          produce_id: 7
        }),
        knex('produce_plots').insert({
          id: 23,
          plot_id: 5,
          produce_id: 8
        }),
        knex('produce_plots').insert({
          id: 24,
          plot_id: 5,
          produce_id: 9
        }),
        knex('produce_plots').insert({
          id: 25,
          plot_id: 5,
          produce_id: 9
        }),
        knex('produce_plots').insert({
          id: 26,
          plot_id: 5,
          produce_id: 10
        }),
        knex('produce_plots').insert({
          id: 27,
          plot_id: 5,
          produce_id: 10
        }),
        knex('produce_plots').insert({
          id: 28,
          plot_id: 5,
          produce_id: 10
        }),
        knex('produce_plots').insert({
          id: 29,
          plot_id: 5,
          produce_id: 10
        }),
        knex('produce_plots').insert({
          id: 30,
          plot_id: 4,
          produce_id: 10
        }),
        knex('produce_plots').insert({
          id: 31,
          plot_id: 4,
          produce_id: 10
        }),
        knex('produce_plots').insert({
          id: 32,
          plot_id: 4,
          produce_id: 10
        }),
        knex('produce_plots').insert({
          id: 33,
          plot_id: 4,
          produce_id: 10
        }),
        knex('produce_plots').insert({
          id: 34,
          plot_id: 4,
          produce_id: 10
        }),
        knex('produce_plots').insert({
          id: 35,
          plot_id: 4,
          produce_id: 10
        }),
        knex('produce_plots').insert({
          id: 36,
          plot_id: 4,
          produce_id: 10
        }),
        knex('produce_plots').insert({
          id: 37,
          plot_id: 4,
          produce_id: 10
        }),
        knex('produce_plots').insert({
          id: 38,
          plot_id: 4,
          produce_id: 10
        }),
        knex('produce_plots').insert({
          id: 39,
          plot_id: 4,
          produce_id: 10
        }),
        knex('produce_plots').insert({
          id: 40,
          plot_id: 4,
          produce_id: 10
        }),
        knex('produce_plots').insert({
          id: 41,
          plot_id: 4,
          produce_id: 11
        }),
        knex('produce_plots').insert({
          id: 42,
          plot_id: 4,
          produce_id: 12
        }),
        knex('produce_plots').insert({
          id: 43,
          plot_id: 4,
          produce_id: 13
        }),
        knex('produce_plots').insert({
          id: 44,
          plot_id: 4,
          produce_id: 14
        }),
        knex('produce_plots').insert({
          id: 45,
          plot_id: 4,
          produce_id: 15
        }),
        knex('produce_plots').insert({
          id: 46,
          plot_id: 4,
          produce_id: 16
        }),
        knex('produce_plots').insert({
          id: 47,
          plot_id: 4,
          produce_id: 17
        }),
        knex('produce_plots').insert({
          id: 48,
          plot_id: 4,
          produce_id: 18
        }),
        knex('produce_plots').insert({
          id: 49,
          plot_id: 4,
          produce_id: 19
        }),
        knex('produce_plots').insert({
          id: 50,
          plot_id: 4,
          produce_id: 20
        }),
        knex('produce_plots').insert({
          id: 51,
          plot_id: 4,
          produce_id: 21
        }),
        knex('produce_plots').insert({
          id: 52,
          plot_id: 4,
          produce_id: 22
        }),
        knex('produce_plots').insert({
          id: 53,
          plot_id: 4,
          produce_id: 23
        }),
        knex('produce_plots').insert({
          id: 54,
          plot_id: 4,
          produce_id: 24
        }),
        knex('produce_plots').insert({
          id: 55,
          plot_id: 4,
          produce_id: 25
        }),
        knex('produce_plots').insert({
          id: 56,
          plot_id: 4,
          produce_id: 26
        }),
        knex('produce_plots').insert({
          id: 57,
          plot_id: 4,
          produce_id: 27
        }),
        knex('produce_plots').insert({
          id: 58,
          plot_id: 4,
          produce_id: 28
        }),
        knex('produce_plots').insert({
          id: 59,
          plot_id: 4,
          produce_id: 29
        }),
        knex('produce_plots').insert({
          id: 60,
          plot_id: 4,
          produce_id: 30
        }),
        knex('produce_plots').insert({
          id: 61,
          plot_id: 4,
          produce_id: 31
        }),
        knex('produce_plots').insert({
          id: 62,
          plot_id: 4,
          produce_id: 32
        }),
        knex('produce_plots').insert({
          id: 63,
          plot_id: 4,
          produce_id: 33
        }),
        knex('produce_plots').insert({
          id: 64,
          plot_id: 4,
          produce_id: 34
        }),
        knex('produce_plots').insert({
          id: 65,
          plot_id: 4,
          produce_id: 35
        }),
        knex('produce_plots').insert({
          id: 66,
          plot_id: 4,
          produce_id: 36
        }),
        knex('produce_plots').insert({
          id: 67,
          plot_id: 4,
          produce_id: 37
        }),
        knex('produce_plots').insert({
          id: 68,
          plot_id: 4,
          produce_id: 38
        }),
        knex('produce_plots').insert({
          id: 69,
          plot_id: 4,
          produce_id: 39
        }),
        knex('produce_plots').insert({
          id: 70,
          plot_id: 4,
          produce_id: 40
        }),
        knex('produce_plots').insert({
          id: 71,
          plot_id: 4,
          produce_id: 41
        }),
        knex('produce_plots').insert({
          id: 72,
          plot_id: 4,
          produce_id: 42
        }),
        knex('produce_plots').insert({
          id: 73,
          plot_id: 4,
          produce_id: 42
        }),
        knex('produce_plots').insert({
          id: 74,
          plot_id: 4,
          produce_id: 42
        }),
        knex('produce_plots').insert({
          id: 75,
          plot_id: 4,
          produce_id: 42
        }),
        knex('produce_plots').insert({
          id: 76,
          plot_id: 4,
          produce_id: 42
        }),
        knex('produce_plots').insert({
          id: 77,
          plot_id: 4,
          produce_id: 42
        }),
        knex('produce_plots').insert({
          id: 78,
          plot_id: 4,
          produce_id: 42
        }),
        knex('produce_plots').insert({
          id: 79,
          plot_id: 4,
          produce_id: 42
        })
      ]);
    });
};
