import {combineReducers} from 'redux';
//import allContacts from './reducer-contacts';
import createContact from './reducer-create-contact';

const allReducers = combineReducers({
    contacts : createContact
});

export default allReducers;

