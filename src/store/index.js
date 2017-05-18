let configureStore;
configureStore = require('./configureStore.dev').default;

// if (__DEVELOPMENT__) {
//   configureStore = require('./configureStore.dev').default;
// } else {
//   configureStore = require('./configureStore.prod').default;
// }

export default configureStore;
