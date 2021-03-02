
-- Get the total amount of time that a student has spent on all assignments.
-- his should work for any student but use 'Ibrahim Schimmel' for now.
SELECT sum(assignment_submissions.duration) as total_duration
FROM students
JOIN assignment_submissions
ON assignment_submissions.student_id = students.id
WHERE students.name = 'Ibrahim Schimmel'
-- GROUP BY students.id;