const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.connect(()=>{console.log('connected')})

const runQuery = (cohortName) => {
  pool.query(`
    SELECT DISTINCT(teachers.name) as teacher, cohorts.name AS cohort
    FROM teachers
    JOIN assistance_requests ON assistance_requests.teacher_id = teachers.id
    JOIN students ON assistance_requests.student_id = students.id
    JOIN cohorts ON students.id = cohorts.id
    WHERE cohorts.name = $1
    ORDER BY teachers.name;
  `, [`${cohortName || 'JUL02'}`])
  .then(res => {
    res.rows.forEach(row => {
      console.log(`${row.cohort}: ${row.teacher}`);
    })
  })
  .catch(err => console.error('query error', err.stack));
};

const args = process.argv.slice(2);

runQuery(args[0]);


