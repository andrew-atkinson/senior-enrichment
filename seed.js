const db = require('./db');
const User = require('./db/models/user');
const Campus = require('./db/models/campus');

const users = [
  { firstName: 'Andrew', lastName: 'Atkinson', email: 'Andrew.Atkinson@mhiaj.edu' },
  { firstName: 'Dana', lastName: 'Hemes', email: 'Dana.Hemes@mhiaj.edu' },
  { firstName: 'Gaius', lastName: 'Baltar', email: 'Gaius.Baltar@mhiaj.edu' },
  { firstName: 'Zaphod', lastName: 'Beeblebrox', email: 'Zaphod.Orton@mhiaj.edu' },
  { firstName: 'Andrew', lastName: 'Orton', email: 'Andrew.Orton@mhiaj.edu' },
  { firstName: 'Jeff', lastName: 'Hemes', email: 'Jeff.Hemes@mhiaj.edu' },
  { firstName: 'Blue', lastName: 'theDog', email: 'Blue.theDog@gmail.com' },
  { firstName: 'Crisco', lastName: 'theBudgie', email: 'Crisco.theBudgie@gmail.com' },
  { firstName: 'Ethelred', lastName: 'theIvy', email: 'Ethelred.theIvy@mhiaj.edu' },
  { firstName: 'Marcus', lastName: 'Aurelius', email: 'Marcus.Aurelius@mhiaj.edu' },
  { firstName: 'Bertie', lastName: 'Wooster', email: 'Bertie.Wooster@aol.uk' },
  { firstName: 'Gussie', lastName: 'Fink-Nottle', email: 'Fink.Nottle@mhiaj.edu' },
  { firstName: 'Bingo', lastName: 'Little', email: 'Bing.Little@mhiaj.edu' },
  { firstName: 'Reginald', lastName: 'Jeeves', email: 'Reginald.Jeeves@jeeves.com' }
]


const camps = [
  { name: 'Earth', imagePath: 'x' },
  { name: 'Vogon', imagePath: 'y' },
  { name: 'Slartibartfarst', imagePath: 'z' },
  { name: 'Zaphod', imagePath: 'zz' }
];

const seed = () =>
  Promise.all(camps.map(campus =>
    Campus.create(campus)))
  .then(() =>
    Promise.all(users.map(user =>
      User.create(user)))
  );

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};


main();
