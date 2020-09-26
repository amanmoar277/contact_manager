const initialState = {
    people: ["James Smith", "Thomas Anderson", "Bruce Wayne"]
};

export default (state = initialState, action) => {
    let newArray, index;
    switch(action.type) {
        case 'ADD_PERSON_TO_CONTACT_LIST': 
            return {...state, people: [...state.people, action.payload]};
        case 'REMOVE_PERSON_FROM_CONTACT_LIST': 
            newArray = [...state.people];
            newArray.splice(action.payload.index, 1);
            return {...state, people: newArray};
        case 'MOVE_PERSON_UP_IN_CONTACT_LIST': 
            newArray = [...state.people];
            index = action.payload.index;
            [newArray[index - 1], newArray[index]] = [newArray[index], newArray[index - 1]]; 
            return {...state, people: newArray};
        case 'MOVE_PERSON_DOWN_IN_CONTACT_LIST': 
            newArray = [...state.people];
            index = action.payload.index;
            [newArray[index + 1], newArray[index]] = [newArray[index], newArray[index + 1]];
            return {...state, people: newArray};        
        default:
            return state;
    }
}
