const db = require('./db/db');
const Student = require('./db/models/student');
const Campus = require('./db/models/campus');

const student = [{
    name: 'Eleni',
    email: 'eleni@me.com'
  }, {
    name: 'Ashi',
    email: 'ashi@io.com'
  }, {
    name: 'Shiratie',
    email: 'shiratie@ca.com'
  }, {
    name: 'Samantha',
    email: 'sam@to.com'
  }, {
    name: 'Caryn',
    email: 'caryn@no.com'
}];

const campus = [
  { name: 'Enterprise' },
  { name: 'Voyager' },
  { name: 'Farragut' },
  { name: 'Kobayashi Maru' }
];

const id = () => Math.round(Math.random() * (authors.length - 1)) + 1;

const seed = () =>
  Promise.all(campus.map(campus =>
    Campus.create(campus))
  )
  .then(() =>
  Promise.all(student.map(student =>
    Student.create(student))
  ))

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
