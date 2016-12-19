-- database name: tau-tasks
-- create task table
CREATE TABLE task (
	id SERIAL PRIMARY KEY,
	name VARCHAR(200),
	completed BOOLEAN DEFAULT false
);

-- insert dummy data
INSERT INTO task (name) VALUES ('weekend 4 hw');
INSERT INTO task (name) VALUES ('another thing');
INSERT INTO task (name) VALUES ('again another thing');
