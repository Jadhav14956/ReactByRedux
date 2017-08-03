export const createContact = details => {
    //console.log('Create Contact Event created : ' + JSON.stringify(details));
    return { type : 'CREATE_CONTACT' ,  details };
}

export const getAllContacts = () => {
    console.log('Getting all contacts.');
    return { type : 'GET_ALL_CONTACTS'};
}

export const editContact = contact => {
    return { type : 'EDIT_CONTACT', contact};
}

export const deleteContact = Id => {
    return { type : 'DELETE_CONTACT', Id};
}

export const inEditMode = Id => {
    //console.log('inEditMode ID : ' + Id);
    return { type : 'IN_EDIT_MODE' , Id : Id };
} 

export const outEditMode = contact => {
    console.log('outEditMode ID : ' + JSON.stringify(contact));
    return { type : 'OUT_EDIT_MODE' , contact : contact };
}