import React, { Component } from 'react';


class TimerForm extends Component {

    state = {
        title: this.props.title || "",
        project: this.props.project || ""
    }

    // on change le titre
    handleTitleChange = event => {
        this.setState({ title: event.target.value });
    }

    // on change le projet
    handleProjectChange = event => {
        this.setState({ project: event.target.value });
    }

    handleClick = () => {
        const { title, project } = this.state;
        if (this.props.id) {
            // on veut modifier
            const id = this.props.id;
            this.props.onFormSubmit({ id, title, project });
        } else {
            // on veut creer
            this.props.onFormSubmit({ title, project });
        }
    }

    render() {
        const submitText = this.props.title ? "Modifer" : "Creer";
        return (
            <div className="form">
                <div className="form-content">
                    <div className="form-item">
                        <label>Titre</label>
                        <input
                            type="text"
                            placeholder="Mon titre"
                            value={this.state.title}
                            onChange={this.handleTitleChange}
                        />
                    </div>
                    <div className="form-item">
                        <label>Projet</label>
                        <input
                            type="text"
                            placeholder="Mon Projet"
                            value={this.state.project}
                            onChange={this.handleProjectChange}
                        />
                    </div>
                </div>
                <div className="form-button">
                    <button className="button btn-submit" onClick={this.handleClick}>
                        {submitText}
                    </button>
                    <button className="button btn-cancel" onClick={this.props.onCloseForm}>
                        Annuler
                    </button>
                </div>
            </div>
        )
    }
}

export default TimerForm;