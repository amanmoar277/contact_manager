import React, {useState} from 'react';
import styled from 'styled-components';
import PeopleList from './peopleList';
import AddPersonForm from './addPerson';

const MainDiv = styled.div`
    width: 1000px;
    background-color: white;
    text-align: center;
    margin: 150px 0 0 ;
    vertical-align: middle;
    padding: 10px 0 10px
`;

const Container = (_) => {
    
    const [contact, setContact] = useState(["James Smith", "Thomas Anderson", "Bruce Wayne"]);
    const addPerson = (name) => {
        setContact([...contact, name]);
    }
    return <center><MainDiv>
        <AddPersonForm handleSubmit={addPerson}/>
        <PeopleList people={contact}/>
    </MainDiv></center>
}

export default Container;