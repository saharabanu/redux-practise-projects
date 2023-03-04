const { configureStore } = require("@reduxjs/toolkit");
const postReducer = require("../features/postSlice")
const { logger } = require("redux-logger");

const store = configureStore({
    reducer: {
        post: postReducer,
        
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(logger)
    }
});
module.exports = store;