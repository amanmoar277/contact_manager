import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

const Contact = styled.div`
    margin: 10px;
`;

const CountPerson = (props) => {
    return <Contact>Total Contacts: {props.count}</Contact>;
};

const mapStateToProps = state => console.log(state) || ({
    count: state.contactManagerReducer.people.length,
})

export default connect(mapStateToProps)(CountPerson);