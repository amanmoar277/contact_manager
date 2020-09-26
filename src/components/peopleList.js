import React from 'react';
import styled from 'styled-components';

const Contact = styled.div`
    width: 80%;
    background-color: skyblue;
    text-align: center;
    margin: 10px 0 0 10%;
    vertical-align: middle;
    padding: 5px;
    border-radius: 10px;
    display: flex;  
    align-content: flex-center;
`;

const PeopleList = (props) => {
    const names = props.people.map((x, id) => <Contact key={id}>{`${x?.name}   (${x?.contact?.country_code}-${x?.contact?.contact_number})`}</Contact>)
    return <div>{names}</div>;
}

export default PeopleList;