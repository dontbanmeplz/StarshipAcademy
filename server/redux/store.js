const {createStore, applyMiddleware, combineReducers} = require('redux');
const thunkMiddleware = require('redux-thunk').default;

const {userReducer} = require('./reducers/user-reducer');
const {bulletReducer} = require('./reducers/bullet-reducer');
const {asteroidReducer} = require('./reducers/asteroid-reducer');


const rootReducer = combineReducers({
  users: userReducer,
  bullets: bulletReducer,
  asteroids: asteroidReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

module.exports = store;
