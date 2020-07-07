import {Sequelize} from 'sequelize-typescript';
import { config } from './config/config';


const c = config.dev;

console.log("this is " +  JSON.stringify(c));

// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
  "username": c.username,
  "password": c.password,
  "database": c.database,
  "host":     c.host,

  dialect: 'postgres',
  storage: ':memory:',
});

