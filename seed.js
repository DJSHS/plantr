const Sequelize = require('sequelize');
const db = require("./models");


// async () => {
//   await db.sync({force: true})
// }
db.sync({force: true})
  .then(() => {
    console.log('Database synced!');
  })
  .catch(err => {
    console.log('Disaster! Something went wrong!');
    console.log(err);
  })
  .finally(() => db.close());
