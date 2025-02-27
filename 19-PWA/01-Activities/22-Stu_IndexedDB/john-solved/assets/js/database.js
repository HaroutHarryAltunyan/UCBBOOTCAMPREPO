import { openDB } from "idb";

const initdb = async () =>
  // TODO: Add a comment explaining what this method does

  openDB("todos-db", 2, {
    // TODO: Add a comment explaining the functionality of this method:
    upgrade(db) {
      if (db.objectStoreNames.contains("todos")) {
        console.log("todos database already exists");
        return;
      }
      // TODO: Add a comment explaining what we're doing with the object store:
      db.createObjectStore("todos", { keyPath: "id", autoIncrement: true });
      db.createObjectStore("rewards", { keyPath: "id", autoIncrement: true });
      console.log("todos database created");
    },
  });

initdb();
