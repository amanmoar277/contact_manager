import React from 'react';
import styled from 'styled-components';

const Contact = styled.div`
    height: 20px;
    width: 80%;
    background-color: skyblue;
    text-align: center;
    margin: 10px 0 0 10%;
    vertical-align: middle;
    padding: 5px;
`;
const PeopleList = (props) => {
    const names = props.people.map((x, id) => <Contact key={id}>{x}</Contact>)
    return <div>{names}</div>;
    
}

export default PeopleList;