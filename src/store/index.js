let configureStore;
configureStore = require('./configureStore.dev');

// if (__DEVELOPMENT__) {
//   configureStore = require('./configureStore.dev').default;
// } else {
//   configureStore = require('./configureStore.prod').default;
// }
var {store,history} = configureStore;
export {store,history};
