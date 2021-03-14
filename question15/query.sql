SELECT d.name, COUNT(e.id)
FROM Department d
LEFT JOIN Employee e ON d.id = e.dept_id
GROUP BY d.id
ORDER BY COUNT(e.id) DESC, d.name ASC