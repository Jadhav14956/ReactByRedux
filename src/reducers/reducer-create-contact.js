// follow immutable update pattern
// http://redux.js.org/docs/recipes/reducers/ImmutableUpdatePatterns.html
// hbsdhsgh

export default function(state = {}, action ){
    switch(action.type){
        case 'CREATE_CONTACT' : 
            //console.log('Adding new contact to list : ' + JSON.stringify(action.details) );
            if(state.contacts === null){
                console.log('Contact is null Initialization of contacts.');
                //state.contacts = [];
            }

            return [ ...state,
                        {
                            Id: action.details.Id,
                            Name: action.details.Name,
                            Number : action.details.Number,
                            Editable : action.details.Editable
                        }
                    ];

        case 'IN_EDIT_MODE':
            console.log('making contact with id : '+ action.Id + ' Editable.');
            
            var _contact = state.find( contact => contact.Id == action.Id);
            console.log('Contact Object : ' + JSON.stringify(_contact));
            _contact.Editable = true;
            console.log('Contact Object : ' + JSON.stringify(_contact));
            return [
                ...state.filter( contact => contact.Id !== action.Id),
                Object.assign({}, _contact)
            ];
            
            // return Object.assign({} , state , {
            //     [action.Id] : Object.assign({} , [action.Id], {
            //         Editable : true
            //     })
            // })

        case 'OUT_EDIT_MODE':
            console.log('making contact with id : '+ action.contact.Id + ' Uneditable.');
            var _contact = state.find( contact => contact.Id == action.contact.Id);
            console.log('Contact Object : ' + JSON.stringify(_contact));
            _contact.Editable = false;
            _contact.Name = action.contact.Name;
            _contact.Number = action.contact.Number;
            console.log('Contact Object : ' + JSON.stringify(_contact));
            return [
                ...state.filter( contact => contact.Id !== action.Id),
                Object.assign({}, _contact)
            ];

        case 'DELETE_CONTACT':
             return [
                ...state.filter( contact => contact.Id !== action.Id)
            ];
        default:
            return state;

    }
    
} 