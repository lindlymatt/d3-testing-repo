'use strict';

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('produce').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('produce').insert({
          id: 1,
          name: 'Artichoke'
          // produce_image_url: '../../assets/icons/artichoke_icon.svg'
        }),
        knex('produce').insert({
          id: 2,
          name: 'Asparagus',
          // produce_image_url: '../../assets/icons/asparagus_icon.svg'
        }),
        knex('produce').insert({
          id: 3,
          name: 'Avocado',
          // produce_image_url: '../../assets/icons/avocado_icon.svg'
        }),
        knex('produce').insert({
          id: 4,
          name: 'Banana',
          // produce_image_url: '../../assets/icons/banana_icon.svg'
        }),
        knex('produce').insert({
          id: 5,
          name: 'Beet',
          // produce_image_url: '../../assets/icons/beet_icon.svg'
        }),
        knex('produce').insert({
          id: 6,
          name: 'Blackberries',
          // produce_image_url: '../../assets/icons/blackberries_icon.svg'
        }),
        knex('produce').insert({
          id: 7,
          name: 'Blueberries',
          // produce_image_url: '../../assets/icons/blueberries_icon.svg'
        }),
        knex('produce').insert({
          id: 8,
          name: 'Broccoli',
          // produce_image_url: '../../assets/icons/broccoli_icon.svg'
        }),
        knex('produce').insert({
          id: 9,
          name: 'Brown Onion',
          // produce_image_url: '../../assets/icons/brown_onion_icon.svg'
        }),
        knex('produce').insert({
          id: 10,
          name: 'Brussel Sprout',
          // produce_image_url: '../../assets/icons/brussel_sprout_icon.svg'
        }),
        knex('produce').insert({
          id: 11,
          name: 'Butternut Squash',
          // produce_image_url: '../../assets/icons/butter_nut_squash_icon.svg'
        }),
        knex('produce').insert({
          id: 12,
          name: 'Cabbage',
          // produce_image_url: '../../assets/icons/cabbage_icon.svg'
        }),
        knex('produce').insert({
          id: 13,
          name: 'Carrot',
          // produce_image_url: '../../assets/icons/carrot_icon.svg'
        }),
        knex('produce').insert({
          id: 14,
          name: 'Cauliflour',
          // produce_image_url: '../../assets/icons/califlour_icon.svg'
        }),
        knex('produce').insert({
          id: 15,
          name: 'Cellary',
          // produce_image_url: '../../assets/icons/cellary_icon.svg'
        }),
        knex('produce').insert({
          id: 16,
          name: 'Cherries',
          // produce_image_url: '../../assets/icons/cherries_icon.svg'
        }),
        knex('produce').insert({
          id: 17,
          name: 'Corn',
          // produce_image_url: '../../assets/icons/corn_icon.svg'
        }),
        knex('produce').insert({
          id: 18,
          name: 'Cucumber',
          // produce_image_url: '../../assets/icons/cucumber_icon.svg'
        }),
        knex('produce').insert({
          id: 19,
          name: 'Eggplant',
          // produce_image_url: '../../assets/icons/eggplant_icon.svg'
        }),
        knex('produce').insert({
          id: 20,
          name: 'Garlic',
          // produce_image_url: '../../assets/icons/garlic_icon.svg'
        }),
        knex('produce').insert({
          id: 21,
          name: 'Gooseberry',
          // produce_image_url: '../../assets/icons/gooseberry_icon.svg'
        }),
        knex('produce').insert({
          id: 22,
          name: 'Green Bell Pepper',
          // produce_image_url: '../../assets/icons/green_bell_pepper_icon.svg'
        }),
        knex('produce').insert({
          id: 23,
          name: 'Leek',
          // produce_image_url: '../../assets/icons/leek_icon.svg'
        }),
        knex('produce').insert({
          id: 24,
          name: 'Lemon',
          // produce_image_url: '../../assets/icons/lemon_icon.svg'
        }),
        knex('produce').insert({
          id: 25,
          name: 'Lettuce',
          // produce_image_url: '../../assets/icons/lettuce_icon.svg'
        }),
        knex('produce').insert({
          id: 26,
          name: 'Lime',
          // produce_image_url: '../../assets/icons/lime_icon.svg'
        }),
        knex('produce').insert({
          id: 27,
          name: 'Mango',
          // produce_image_url: '../../assets/icons/mango_icon.svg'
        }),
        knex('produce').insert({
          id: 28,
          name: 'Mushroom',
          // produce_image_url: '../../assets/icons/mushroom_icon.svg'
        }),
        knex('produce').insert({
          id: 29,
          name: 'Olives',
          // produce_image_url: '../../assets/icons/olives_icon.svg'
        }),
        knex('produce').insert({
          id: 30,
          name: 'Grapefruit',
          // produce_image_url: '../../assets/icons/olives_icon.svg'
        }),
        knex('produce').insert({
          id: 31,
          name: 'Orange',
          // produce_image_url: '../../assets/icons/orange_icon.svg'
        }),
        knex('produce').insert({
          id: 32,
          name: 'Orange Spicy Pepper',
          // produce_image_url: '../../assets/icons/orange_spicy_pepper_icon.svg'
        }),
        knex('produce').insert({
          id: 33,
          name: 'Parsnip',
          // produce_image_url: '../../assets/icons/parsnip_icon.svg'
        }),
        knex('produce').insert({
          id: 34,
          name: 'Peach',
          // produce_image_url: '../../assets/icons/peach_icon.svg'
        }),
        knex('produce').insert({
          id: 35,
          name: 'Pear',
          // produce_image_url: '../../assets/icons/pear_icon.svg'
        }),
        knex('produce').insert({
          id: 36,
          name: 'Peas',
          // produce_image_url: '../../assets/icons/peas_icon.svg'
        }),
        knex('produce').insert({
          id: 37,
          name: 'Pickle',
          // produce_image_url: '../../assets/icons/pickle_icon.svg'
        }),
        knex('produce').insert({
          id: 38,
          name: 'Pinapple',
          // produce_image_url: '../../assets/icons/pinapple_icon.svg'
        }),
        knex('produce').insert({
          id: 39,
          name: 'Plum',
          // produce_image_url: '../../assets/icons/plum_icon.svg'
        }),
        knex('produce').insert({
          id: 40,
          name: 'Potato',
          // produce_image_url: '../../assets/icons/potato_icon.svg'
        }),
        knex('produce').insert({
          id: 41,
          name: 'Pumpkin',
          // produce_image_url: '../../assets/icons/pumpkin_icon.svg'
        }),
        knex('produce').insert({
          id: 42,
          name: 'Radish',
          // produce_image_url: '../../assets/icons/radish_icon.svg'
        }),
        knex('produce').insert({
          id: 43,
          name: 'Red Apple',
          // produce_image_url: '../../assets/icons/red_apple_icon.svg'
        }),
        knex('produce').insert({
          id: 44,
          name: 'Red Bell Pepper',
          // produce_image_url: '../../assets/icons/red_bell_pepper_icon.svg'
        }),
        knex('produce').insert({
          id: 45,
          name: 'Red Onion',
          // produce_image_url: '../../assets/icons/red_onion_icon.svg'
        }),
        knex('produce').insert({
          id: 46,
          name: 'Red Spicy Pepper',
          // produce_image_url: '../../assets/icons/red_spicy_pepper_icon.svg'
        }),
        knex('produce').insert({
          id: 47,
          name: 'Rubarb',
          // produce_image_url: '../../assets/icons/rubarb_icon.svg'
        }),
        knex('produce').insert({
          id: 48,
          name: 'Shallot',
          // produce_image_url: '../../assets/icons/shallot_icon.svg'
        }),
        knex('produce').insert({
          id: 49,
          name: 'Squash',
          // produce_image_url: '../../assets/icons/squash_icon.svg'
        }),
        knex('produce').insert({
          id: 50,
          name: 'Starfruit',
          // produce_image_url: '../../assets/icons/starfruit_icon.svg'
        }),
        knex('produce').insert({
          id: 51,
          name: 'Strawberry',
          // produce_image_url: '../../assets/icons/strawberry_icon.svg'
        }),
        knex('produce').insert({
          id: 52,
          name: 'Tomato',
          // produce_image_url: '../../assets/icons/tomato_2_icon.svg'
        }),
        knex('produce').insert({
          id: 53,
          name: 'Turnip',
          // produce_image_url: '../../assets/icons/turnip_2_icon.svg'
        }),
        knex('produce').insert({
          id: 54,
          name: 'Watermelon',
          // produce_image_url: '../../assets/icons/watermelon_icon.svg'
        }),
        knex('produce').insert({
          id: 55,
          name: 'Yam',
          // produce_image_url: '../../assets/icons/yam_icon.svg'
        }),
        knex('produce').insert({
          id: 56,
          name: 'Yellow Bell Pepper',
          // produce_image_url: '../../assets/icons/yellow_bell_pepper_icon.svg'
        }),
        knex('produce').insert({
          id: 57,
          name: 'Yellow Onion',
          // produce_image_url: '../../assets/icons/yellow_onion_icon.svg'
        }),
        knex('produce').insert({
          id: 58,
          name: 'Yellow Spicy Pepper',
          // produce_image_url: '../../assets/icons/yellow_spicy_pepper_icon.svg'
        }),
        knex('produce').insert({
          id: 59,
          name: 'Zucchini',
          // produce_image_url: '../../assets/icons/zucchini_icon.svg'
        }),
      ]);
    })
};
