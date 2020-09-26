import React from 'react';
import {Provider} from 'react-redux';
import styled from 'styled-components';
import PeopleList from './peopleList';
import AddPersonForm from './addPerson';
import CountPerson from './countPerson';
import getStore from '../../redux/store';

const MainDiv = styled.div`
    width: 50%;
    background-color: white;
    text-align: center;
    margin: 150px 0 0 ;
    vertical-align: middle;
    padding: 10px 0 10px;
    border-radius: 10px;
`;

const Heading = styled.div`
    font-size: 48px;
    padding: 50px;
`;

const Container = (_) => {
    const store = getStore();

    return <Provider store={store}>
        <center>
            <MainDiv>
                <Heading>Contact Manager</Heading>
                <AddPersonForm/>
                <PeopleList/>
                <CountPerson/>
            </MainDiv>
        </center>
    </Provider>
}

export default Container;