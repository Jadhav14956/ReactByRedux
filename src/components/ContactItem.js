import React from 'react';

class ContactItem extends React.Component {
    constructor(){
        super();
        this.state = {
            Name : '',
            Number : ''
        }
    }
    handleNameUpdate(e){
        //e.preventDefaults();
        var name = e.target.value;
        console.log('Name : ' + name);
        this.setState({
            Name : name
        });
    }
    componentDidMount(){
        //console.log('componentDidMount called');
        this.setState({
            Id : this.props.contact.Id,
            Name : this.props.contact.Name,
            Number : this.props.contact.Number
        });
    }
    handleNumberUpdate(e){
        //e.preventDefaults();
        
        var _number = e.target.value;
        console.log('Number : ' + _number);
        this.setState({
            Number : _number
        });

    }
    updateContact(e){
        //e.preventDefaults();
        var contact = {
            Id : this.state.Id,
            Name : this.state.Name,
            Number : this.state.Number 
        };
        console.log('Contact : ' + contact);
        this.props.outEditMode(contact);
    }
    render(){
        let editText = this.props.contact.Editable ? 'UPDATE' : 'EDIT';
        //console.log('Templating for contact : ' + JSON.stringify(contact));
        if(this.props.contact.Editable){
            return(
                <tr>
                    <td>{this.props.contact.Id}</td>
                    <td><input type="text"
                               onChange={this.handleNameUpdate.bind(this)} 
                               value={this.state.Name}/></td>

                    <td><input type="text"
                               onChange={this.handleNumberUpdate.bind(this)} 
                               value={this.state.Number}/></td>

                    <td><button onClick={this.updateContact.bind(this)}>{editText}</button></td>
                    <td><button onClick={ () => this.props.deleteContact(this.props.contact.Id)}>DELETE</button></td>
                </tr>
            );
        }else{
            return(
                <tr>
                    <td>{this.props.contact.Id}</td>
                    <td>{this.props.contact.Name}</td>
                    <td>{this.props.contact.Number}</td>
                    <td><button onClick={ () => this.props.inEditMode(this.props.contact.Id)  }>{editText}</button></td>
                    <td><button onClick={ () => this.props.deleteContact(this.props.contact.Id)}>DELETE</button></td>
                </tr>
            );
        }
    }

}



export default ContactItem;