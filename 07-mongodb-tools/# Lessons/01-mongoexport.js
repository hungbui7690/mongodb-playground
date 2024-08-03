/*
  mongoexport

*********************

  Introduction to the mongoexport command-line tool
  - The mongoexport is a command-line tool included in the MongoDB database tools. To use the mongoexport tool, you run it from the system command line, not the mongosh shell.
  - Starting with MongoDB 4.4, mongoexport is included in the MongoDB database tools and installed separately from the MongoDB server.
  - The mongoexport command has the following syntax:

      mongoexport --collection=<coll> <options> <connection-string>

**********************

  Using mongoexport to export data from a MongoDB instance
  - If you connect to the localhost MongoDB instance running on port 27017, you don’t need to specify the host and port.
  - For example, the following command exports the books collection from the bookdb database to the books.json file from the local MongoDB instance running on port 27017:

      mongoexport --collection=books --db=bookdb --out=books.json

  - In this command:
    + First, specify the books collection in the --collection
    + Second, specify the database in the --db.
    + Third, provide the path to the output file books.json in the --out.

  - Note that if you encounter the following error message on Windows, you need to add the mongoexport to the path environment variable.

      'mongoexport' is not recognized as an internal or external command, operable program or batch file.

  - If you want to export data from a remote MongoDB instance, you need to specify the host and port in the --uri connection string like this:

      mongoexport --uri="mongodb://mongodb0.mongodbtutorial.org:27017/bookdb"  --collection=books  --out=books.json

  - This command exports the books collection of the bookdb database from the MongoDB instance located at mongodb://mongodb0.mongodbtutorial.org running on port 27017:
  - Alternatively, you can specify the hostname and port in the --host and --port like this:

      mongoexport --host="mongodb0.mongodbtutorial.org" --port=27017 --collection=books --db=bookdb --out=books.json

**********************

  Using mongoexport to export data from a replica set
  - To connect to a replica set and export the data, you specify the replica set name and members in the --uri connection string:
  - Alternatively, you can specify the replica set name and members in the --host:

      mongoexport --host="bookdb/mongodb0.mongodbtutorial.org:27017,mongodb1.mongodbtutorial.org:27017,mongodb2.mongodbtutorial.org" --collection=events --db=bookdb --out=books.json

  - By default, mongoexport reads from the primary of the replica set. However, you can override this default behavior by specifying the read preference in the --uri connection string:

      mongoexport --uri="mongodb://mongodb0.mongodbtutorial.org:27017,mongodb1.mongodbtutorial.org:27017,mongodb2.mongodbtutorial.org:27017/reporting?replicaSet=bookdb&readPreference=secondary" --collection=books --out=books.json

  - This command reads data from secondary instead of primary of the replica set. Alternatively, you can use the readPreferenceTags option as follows:

      mongoexport --uri="mongodb://mongodb0.mongodbtutorial.org:27017,mongodb1.mongodbtutorial.org:27017,mongodb2.mongodbtutorial.org:27017/reporting?replicaSet=bookdb" --readPreference=secondary --collection=books --out=books.json

**********************

  Using mongoexport to export data from a shared cluster
  - To connect to a shared cluster and export its data, you can specify the hostname of the mongos instance in the --uri connection string:

      mongoexport --uri="mongodb://mongos0.mongodbtutorial.org:27017/bookdb" --collection=bookdb --out=books.json

  - Or you can specify the hostname and port of the mongos instance in the --host:

      mongoexport --host="mongos0.mongodbtutorial.org:27017" --collection=books --db=bookdb --out=books.json

*/
