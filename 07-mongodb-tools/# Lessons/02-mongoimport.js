/*
  mongoimport 
  - import JSON file

***********************

  Download & install the mongoimport tool
  - To import JSON files into the MongoDB server, you use the mongoimport tool. Starting from MongoDB 4.4, the mongoimport tool is released separately from the MongoDB server. Therefore, you need to download and install it:
    + First, download the mongoimport tool on this page.
    + Second, follow this instruction to install the mongoimport tool.

***********************

  Import the books.json to a MongoDB database server
  - First, open the Terminal on macOS and Linux or Command Prompt on Windows.

  - Second, navigate to the database tools directory where the mongoimport tool is located. On Windows, it’s C:\Program Files\MongoDB\Tools\100\bin where 100 is the version of the tool.

  - Third, use the following command to import the books.json file into the MongoDB database server:

      mongoimport c:\data\books.json -d bookdb -c books --drop

  - In this command:

    + First, start with the mongoimport program name.
    + Next, specify the path to the books.json data file. In this example, it is c:\data\books.json.
    + Then, use -d bookdb to specify the target database, which is bookdb in this example.
    + After that, use -c books to specify the target collection, which is books in this case.
    + Finally, use the --drop flag to drop the collection if it exists before importing the data.

  - If the import was successful, you will see the following output:

      2022-02-22T14:30:10.869+0700    connected to: mongodb://localhost/
      2022-02-22T14:30:10.872+0700    dropping: bookdb.books
      2022-02-22T14:30:10.926+0700    431 document(s) imported successfully. 0 document(s) failed to import.

  - Fourth, type the following command from the terminal to connect to the bookdb database on the local database using mongo shell:

      mongosh bookdb

  - It returned 431 documents.
  - Finally, use the find() method to return the document with the_id 1 to examine the document:

      db.books.find({"_id":1})


*/
