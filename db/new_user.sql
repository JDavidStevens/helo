insert into users
(usename,password,profile_pic)
values
($1,$2,$3)
returning *;