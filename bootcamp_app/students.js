const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.connect(()=>{console.log('connected')})

const runQuery = (cohortName, numResults) => {
  pool.query(`
    SELECT students.id AS student_id, students.name AS name, cohorts.name AS cohort_name
    FROM students
    JOIN cohorts ON cohorts.id = students.cohort_id
    WHERE cohorts.name LIKE '${cohortName}%'
    LIMIT ${numResults || 5};
  `)
  .then(res => {
    console.log(res.rows);
  })
  .catch(err => console.error('query error', err.stack));
};

const args = process.argv.slice(2);

runQuery(args[0],args[1]);