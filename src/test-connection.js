const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('study', 'postgres', 'Password', {
  host: '127.0.0.1',
  dialect: 'postgres'
});

sequelize.authenticate()
  .then(() => {
    console.log('Connected successfully to the database.');
    process.exit(0);
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    process.exit(1);
  });