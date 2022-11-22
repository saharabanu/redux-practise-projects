const fetch = require('node-fetch');

const delayActionMiddleware = (store) => (next) => (action) => {
    if(action.type === "todoAdded") {
        console.log("i  am delay");

        setTimeout(() => {
            next(action)
        }, 2000);
        return
    }
    return next(action);
};


const fetchApiMiddleware = (store) => (next) => async(action) => {
         if(typeof action === "function") {
            return action(store.dispatch, store.getState)
            
            return;
         }
         return next(action)
};

module.exports = {delayActionMiddleware , fetchApiMiddleware}