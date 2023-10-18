CREATE TABLE "todo_crud" (
  "id" integer PRIMARY KEY,
  "task" varchar NOT NULL,
  "description" varchar,
  "is_complete" boolean DEFAULT false
);

insert
	into
	todo_crud
(
	id,
	task,
	description,
	is_complete
)
values (
	1,
	'Create Tasks',
	'Add 3 task to the to-do list',
	true
),
(
	2,
	'Do Sql Consults',
	'Do 2 sql consults to get all the tasks and get finished task',
	true

),
(
	3,
	'Create a Repository',
	'Create a repository with the SQL consults files there',
	false
);

select * from todo_crud

select * from todo_crud where is_complete = true