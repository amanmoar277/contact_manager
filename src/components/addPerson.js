import React, {useState} from 'react';
import style from 'styled-components';

const AddContactDiv = style.div`
    height: 50px;
    width: 101%;
    text-align: middle;
`;

const AddPersonForm = (props) => {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        if(e.target.value === ' ') {
            return;
        }
        setName(e.target.value);
    }
    const handleSubmit = (e) => {
        if(name) {
            props.handleSubmit(name);
        }
        setName('');
        e.preventDefault();
    }
    return <AddContactDiv>
        <form onSubmit={handleSubmit}>
        <span><input type="text" onChange={handleChange} placeholder="Add name here" value={name}/>
        <button type="submit">Add</button>
        </span>
        </form>
    </AddContactDiv>
}

export default AddPersonForm;