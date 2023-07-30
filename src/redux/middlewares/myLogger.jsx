import rootReducer from "../rootReducer";

const myLogger = (store) => (next) => (action) => {
  console.log(`Action:${JSON.stringify(action)}`);
  console.log(`Before:${JSON.stringify(store.getState())}`);
  const upcomingState = [action].reduce(rootReducer, store.getState());
  console.log(`upcoming:${JSON.stringify(upcomingState)}`);
  return next(action);
};
export default myLogger;
