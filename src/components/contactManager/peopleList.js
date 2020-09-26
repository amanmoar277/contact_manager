

import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {actionSpreader} from '../../commonHelpers';
import Actions from '../../commonHelpers/actions';
import '../../index.css';

const Contact = styled.div`
    width: 80%;
    background-color: skyblue;
    text-align: center;
    margin: 10px 0 0 10%;
    vertical-align: middle;
    padding: 5px;
    border-radius: 10px;
    display: flex;  
    flex-wrap: wrap;
`;

type Props = {
    triggerDispatch: () => void,
    people: Array<Object>,
};

const MoveUp = ({index, dispatch}) => {
    const onMoveUp = () => dispatch(Actions.MOVE_PERSON_UP_IN_CONTACT_LIST, {index});
    return <span className="up" onClick={onMoveUp}>➤</span>;
}

const MoveDown = ({index, dispatch}) => {
    const onMoveDown = () => dispatch(Actions.MOVE_PERSON_DOWN_IN_CONTACT_LIST, {index});
    return <span className="down" onClick={onMoveDown}>➤</span>;
}

const Delete = ({index, dispatch}) => {
    const onDelete = () => dispatch(Actions.REMOVE_PERSON_FROM_CONTACT_LIST, {index});
    return <span className="closed" onClick={onDelete}>✖</span>;
}

const PeopleList = ({triggerDispatch, people}: Props) => {
    const names = people.map((x, id) => <Contact key={id}>
        {x}
        {id !== 0 && <MoveUp index={id} dispatch={triggerDispatch}/>}
        {id !== people.length - 1 && <MoveDown index={id} dispatch={triggerDispatch}/>}
        <Delete index={id} dispatch={triggerDispatch}/>
        </Contact>)
    return <div>{names}</div>;
};

const mapStateToProps = state => ({
    people: state.contactManagerReducer.people,
    count: state.contactManagerReducer.people.length,
})

const mapDispatchToProps = dispatch => ({
    triggerDispatch: (action,payload) => dispatch(actionSpreader(action, payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);