import { createStore } from 'redux';
import RootReducer from '.reducers';

//let initialData = JSON.parse(docuement.querySelectorAll('#initial-data'));
let store = createStore(RootReducer);

