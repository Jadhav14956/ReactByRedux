import React from 'react'
import ContactForm from '../components/ContactForm';
import ContactList from './ContactList';
import {connect} from 'react-redux';

class App extends React.Component {
  render(){
    return(
      <div>
        
        <ContactForm/>
        
        <ContactList contacts={this.props.contacts}/>
        
      </div>
    );
  };
}

function compare(a,b){
  if(a.Id < b.Id)
    return -1;
  else if(a.Id > b.Id)
    return 1;
  else
    return 0;
}

function mapStateToProps(state){
  console.log('App : Contacts : ' + JSON.stringify( state.contacts));
    return {
      contacts : state.contacts.sort(compare)
    };
}

export default connect(mapStateToProps)(App); 
