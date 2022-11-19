import rootReducer from "../rootReducer";

// middlware 
export const myLogger = (store) => (next) => (action) => {
     console.log(`action: ${JSON.stringify(action)}`);
     console.log(`Before: ${JSON.stringify(store.getState())}`);

     const upcomingState = [action].reduce(rootReducer, store.getState());
     console.log(`upcoming: ${JSON.stringify(upcomingState)}`);

    // pass action 

    return next(action)
}