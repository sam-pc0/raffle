export default class Localbase {
  constructor(dbName) {
    // properties
    this.dbName = dbName;
    this.lf = {}; // where we store our localForage instances
    this.collectionName = null;
    this.orderByProperty = null;
    this.orderByDirection = null;
    this.limitBy = null;
    this.docSelectionCriteria = null;

    // queues
    this.deleteCollectionQueue = {
      queue: [],
      running: false,
    };

    // config
    this.config = {
      debug: true,
    };

    // user errors - e.g. wrong type or no value passed to a method
    this.userErrors = [];

    // api - selectors
    this.collection = {};
    this.doc = {};

    // api - filters
    this.orderBy = {};
    this.limit = {};

    // api - actions
    this.get = {};
    this.add = {};
    this.update = {};
    this.set = {};
    this.delete = {};
  }
}
test.skip('skip', () => {});
