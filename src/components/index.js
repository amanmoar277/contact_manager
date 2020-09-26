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
    padding: 10px 0 10px;
    border-radius: 10px;
`;

const Container = (_) => {
    
    const [people, setPeople] = useState([
        {name: "James Smith", contact: { country_code: "+91", contact_number: "9999999999"}}, 
        {name: "Thomas Anderson", contact: { country_code: "+91", contact_number: "9999999999"}}, 
        {name: "Bruce Wayne", contact: { country_code: "+91", contact_number: "9999999999"}}, 
    ]);
    const addPerson = (person) => {
        setPeople([...people, {name: person.name, contact: { country_code: person.country_code, contact_number: person.contact_number}}]);
    }
    return <center><MainDiv>
        <AddPersonForm handleSubmit={addPerson}/>
        <PeopleList people={people}/>
    </MainDiv></center>
}

export default Container;