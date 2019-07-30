-- 3. Still in the `db` folder, create a `seeds.sql` file. In this file, write insert queries to populate the `burgers` table with at least three entries.

INSERT INTO yourBurgers (burger_name, devoured)
VALUES ("shitake burger", false);

INSERT INTO yourBurgers (burger_name, devoured)
VALUES ("turkey burger", false);

INSERT INTO yourBurgers (burger_name, devoured)
VALUES ("black bean burger", false);

-- 5. Now you're going to run these SQL files.

--    * Make sure you're in the `db` folder of your app.

--    * Start MySQL command line tool and login: `mysql -u root -p`.

--    * With the `mysql>` command line tool running, enter the command `source schema.sql`. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.

--    * Now insert the entries you defined in `seeds.sql` by running the file: `source seeds.sql`.

--    * Close out of the MySQL command line tool: `exit`.