const store = require('./app/store');
const { fetchPosts } = require('./features/postSlice');



store.subscribe(() => {

})
store.dispatch(fetchPosts())