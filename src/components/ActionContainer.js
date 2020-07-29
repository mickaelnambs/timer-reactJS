import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimerForm from './TimerForm';
import Button from './Button';


class ActionContainer extends Component {

    static propTypes = {
        onFormSubmit: PropTypes.func.isRequired
    }

    state = {
        isFormOpen: false
    }

    handleFormOpen = () => {
        this.setState({ isFormOpen: true });
    }

    handleCloseForm = () => {
        this.setState({ isFormOpen: false });
    }

    onFormSubmit = ({title, project}) => {
        this.handleCloseForm()
        this.props.onFormSubmit({title, project});
    }

    render() {
        if (this.state.isFormOpen) {
            return (
                <TimerForm 
                    onFormSubmit={this.onFormSubmit} 
                    onCloseForm={this.handleCloseForm}
                />
            )
        } else {
            return <Button handleFormOpen={this.handleFormOpen} />
        }
    }   
}

export default ActionContainer;