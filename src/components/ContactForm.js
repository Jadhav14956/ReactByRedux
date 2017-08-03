import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createContact} from '../actions/index';

class ContactForm extends React.Component {

    constructor(){
        super();
        this.state = {
            Id : 4,
        }
    }

    submitDetails(e){
        e.preventDefault();
        if(this.refs.name.value === ""){
        alert('Contact name is required');
        } else if(this.refs.phone.value === ""){
        alert('Phone number is required');
        } else {
            
            var id = this.state.Id;
            this.setState({
                Id : (id+1)
            });
            this.props.createContact({ 
                    Id : id, 
                    Name : this.refs.name.value, 
                    Number: this.refs.phone.value 
                });    
        }
        //console.log("Submitted " + this.refs.name.value  + " " + this.refs.phone.value);
    }

    
    render(){
        return (
            <div>
                <h3>Add Contact</h3>
                <form className="form-group" onSubmit={this.submitDetails.bind(this)}>
                    <div>
                        <input type="text" placeholder="Please enter contact name" ref="name" />
                    </div>
                    <br />
                    <div>
                        <input type="text" placeholder="Please enter phone number" ref="phone" />
                    </div>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    };
}

function mapStateToProps(state){
    return {};
}

function matchDispatchToProps(dispatch){
    //console.log('@Contact Form dispatch : ' + dispatch);
    return bindActionCreators({createContact : createContact}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ContactForm);