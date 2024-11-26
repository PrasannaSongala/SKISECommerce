import { Sequelize } from 'sequelize';

// Set up the database connection
const sequelize = new Sequelize('srikanya', 'root', 'Pass123!@#', {
  host: '127.0.0.1',
  dialect: 'mysql',
  logging: false, 
});

export default sequelize;
