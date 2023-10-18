CREATE TABLE "users" (
  "id" uuid PRIMARY KEY,
  "name" varchar(30) NOT NULL,
  "email" varchar(100) UNIQUE NOT NULL,
  "password" varchar(50) NOT NULL,
  "role_id" int,
  "age" int
);

CREATE TABLE "courses" (
  "id" uuid PRIMARY KEY,
  "title" varchar(100) NOT NULL,
  "description" varchar(400) NOT NULL,
  "level" int DEFAULT 1,
  "category_id" int NOT NULL,
  "video_id" int,
  "teacher_id" uuid NOT NULL
);

CREATE TABLE "course_video" (
  "id" int PRIMARY KEY,
  "title" varchar(300) NOT NULL,
  "url" varchar(300) NOT NULL
);

CREATE TABLE "categories" (
  "id" int PRIMARY KEY,
  "name" varchar(50) NOT NULL
);

CREATE TABLE "roles" (
  "id" int PRIMARY KEY,
  "name" varchar(50) NOT NULL
);

ALTER TABLE "users" ADD FOREIGN KEY ("role_id") REFERENCES "roles" ("id");

ALTER TABLE "courses" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("id");

ALTER TABLE "courses" ADD FOREIGN KEY ("video_id") REFERENCES "course_video" ("id");

ALTER TABLE "courses" ADD FOREIGN KEY ("teacher_id") REFERENCES "users" ("id");


insert
	into
	roles
	(
	id,
	name
) values (
	1,
	'teacher'
), (
	2,
	'student'
);


insert
	into
	categories
	(
	id,
	name
) values (
	1,
	'development course'
), (
	2,
	'english course'
);


insert
	into
	course_video
	(
	id,
	title,
	url
) values (
	1,
	'intro to backend',
	'https://www.sahid.academlo.com/nodecourse/1'
), (
	2,
	'nodejs first steps',
	'https://www.sahid.academlo.com/nodecourse/2'
);


insert
	into
	users
	(
	id,
	name,
	email,
	password,
	role_id,
	age
) values (
	'86fbdb6f-af9f-4691-a3cb-5010f2304df5',
	'Sahid Kick',
	'sahid@academlo.com',
	'teach1234',
	1,
	23
),  (
	'9e4dde62-8aaa-406d-aa52-93cb875c88f1',
	'Jesus Clemente',
	'gsus@gmail.com',
	'pasenode10',
	2,
	30
);

insert
	into
	courses (
	id,
	title,
	description,
	level,
	category_id,
	video_id,
	teacher_id
) values (
	'9e575f1c-74d4-44d1-b5cb-f4f1a1bfb32f',
	'Intro to Backend',
	'we are going to learn about sql and node with express in this part of the course',
	1,
	1,
	1,
	'86fbdb6f-af9f-4691-a3cb-5010f2304df5'

), (
	'8a32aba5-aec8-4998-98bc-02e6a31ddd90',
	'Node JS basic',
	'we are going to learn about what is node, his node package manager and express',
	2,
	1,
	2,
	'86fbdb6f-af9f-4691-a3cb-5010f2304df5'
);


select * from categories
select * from course_video
select * from courses
select * from roles
select * from users