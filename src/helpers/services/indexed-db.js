// import * as db from "indexeddb-hooked";
import Localbase from "localbase";

const db = new Localbase("raffle");
db.config.debug = false;

export const IndexedDbService = {
  start() {},

  read(collection) {
    return db.collection(collection).get();
  },

  update(collection, elements) {
    return db.collection(collection).set(elements);
  },
};

export default IndexedDbService;
