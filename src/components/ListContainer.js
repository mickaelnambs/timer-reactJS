import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Container from './Container';

const rendererContainer = props => {
    return props.timers.map((timer => {
        return (
            <Container
                onDelete={props.onDelete} 
                onFormSubmitListContainer={props.onFormSubmitBox} 
                key={timer.id} {...timer}
                onPlay={props.onPlay}
                onPause={props.onPause}
                {...timer}
            />
        )
    }))
}

const ListContainer = props => {
    
        return (
            <div className="list-container">
                {rendererContainer(props)}
            </div>
        )
}

ListContainer.propTypes = {
    onFormSubmit: Proptypes.func.isRequired,
    onDelete: Proptypes.func.isRequired,
    timers: Proptypes.array.isRequired,
    onPlay: Proptypes.func.isRequired,
    onPause: Proptypes.func.isRequired
}

export default ListContainer;