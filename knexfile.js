// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'd3-testing',
    }
  }

};
