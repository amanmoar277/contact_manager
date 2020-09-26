import React, {useState} from 'react';
import style from 'styled-components';

const AddContactDiv = style.div`
    height: 50px;
    width: 101%;
    text-align: middle;
`;

const AddPersonForm = (props) => {
    let formData = {
        name: '',
        country_code: '', 
        contact_number: '',
    }

    const defaultData = {
        name: '',
        contact_numbercountry_code: '', 
        contact_number: '',
    };

    const [person, setPerson] = useState(formData);

    const handleChange = (e) => {
        if(e.target.value === ' ') {
            return;
        }
        formData[e.target.name] = e.target.value;
        setPerson(formData);
    }
    const handleSubmit = (e) => {
        if(person.name && person.country_code && person.contact_number) {
            props.handleSubmit(person);
        }
        formData = defaultData;
        setPerson(formData);
        e.preventDefault();
    }
    return <AddContactDiv>
        <form onSubmit={handleSubmit}>
        <span><input type="text" onChange={handleChange} placeholder={"Add name here"} value={person.name} name="name"/>
        <input type="text" onChange={handleChange} placeholder="Add country code here" value={formData.country_code} name="country_code"/>
        <input type="text" onChange={handleChange} placeholder="Add contact number here" value={formData.contact_number} name="contact_number"/>
        <button type="submit">Add</button>
        </span>
        </form>
    </AddContactDiv>
}

export default AddPersonForm;