SELECT DISTINCT(teachers.name) as teacher, cohorts.name AS cohort, COUNT(assistance_requests.teacher_id) AS total_assistances
FROM teachers
JOIN assistance_requests ON assistance_requests.teacher_id = teachers.id
JOIN students ON assistance_requests.student_id = students.id
JOIN cohorts ON students.id = cohorts.id
WHERE cohorts.name = 'JUL02'
GROUP BY teachers.name, cohorts.name
ORDER BY teachers.name;