import React from 'react';
import ContactItem from '../components/ContactItem'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {editContact} from '../actions/index';
import {deleteContact} from '../actions/index';
import {inEditMode} from '../actions/index';
import {outEditMode} from '../actions/index';


class ContactList extends React.Component {

    render(){
        if(!this.props.contacts){
            return (
                <h1> No Contacts : Create Contacts </h1>  
            );
        }else {
            return (
                <div>
                        <div>
                <h3>Phone Book</h3>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>

                        {this.props.contacts.map(contact => 
                            <ContactItem 
                                key={contact.Id} 
                                outEditMode={this.props.outEditMode}  
                                inEditMode={this.props.inEditMode}
                                deleteContact={this.props.deleteContact}
                                contact={contact}/>
                        )}

                    </tbody>
                </table>
                </div>
                    
                </div>
            );
        }
    }
} 
    


function mapStateToProps(state){
    return {};
}

function matchDispatchToProps(dispatch){
    console.log('Props before you dispatch props was called : ');
    return bindActionCreators({
        outEditMode : outEditMode ,
        inEditMode : inEditMode ,
        deleteContact : deleteContact
    },dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ContactList);