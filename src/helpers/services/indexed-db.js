// import * as db from "indexeddb-hooked";
import Localbase from "localbase";
import { enumCollections, Rewards } from "../type";

const db = new Localbase("raffle");
// db.config.debug = false;

export const IndexedDbService = {
  start() {
    this.update(enumCollections.REWARDS, Rewards);
  },

  read(collection) {
    return db.collection(collection).get();
  },

  update(collection, elements) {
    return db.collection(collection).set(elements);
  },
};

export default IndexedDbService;
