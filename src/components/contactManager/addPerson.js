import React, {useState} from 'react';
import {connect} from 'react-redux';
import style from 'styled-components';
import {actionSpreader} from '../../commonHelpers';

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
            props.triggerDispatch('ADD_PERSON_TO_CONTACT_LIST', name);
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

const mapStateToProps = state => ({
    people: state.contactManagerReducer.people,
})

const mapDispatchToProps = dispatch => ({
    triggerDispatch: (action,payload) => dispatch(actionSpreader(action, payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPersonForm);