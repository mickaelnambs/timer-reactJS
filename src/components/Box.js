import React, { Component } from 'react';
import {v4 as uuid} from "uuid"; 
import ActionContainer from './ActionContainer';
import ListContainer from './ListContainer';


class Box extends Component {

    state = {
        timers: [
            {
                title: "Apprendre React",
                project: "Developpement Web",
                elapsed: 5609620,
                id: "01",
                runningSince: null
            }, 
            {
                title: "Apprendre Angular",
                project: "Developpement Web",
                elapsed: 1234567,
                id: "02",
                runningSince: null
            }
        ]
    }

    // Creer un timer
    handleCreateTimer = ({title, project}) => {
        const timer = {
            title,
            project,
            id: uuid(),
            elapsed: 0,
            runningSince: null
        }
        this.setState({
            timers: [...this.state.timers, timer]
        })
    }

    // Modifier un timer
    handleEditTimer = ({id, title, project}) => {
        this.setState({
            timers: this.state.timers.map(timer => {
                if (timer.id === id) {
                    return {
                        ...timer,
                        title,
                        project
                    }
                }
                return { ...timer }
            })
        })
        
    }

    // Supprimer un timer
    handleDeleteTimer = id => {
        const timers = [...this.state.timers]; // Creer une copie de timer
        const index = timers.findIndex(timer => timer.id === id);
        timers.splice(index, 1);
        this.setState({timers});
    }

    handlePlay = id => {
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map(timer => {
                if (timer.id === id) {
                    return {
                        ...timer,
                        runningSince: now   
                    }
                } else {
                    return { ...timer }
                }
            })
        })
    }

    handlePause = id => {
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map(timer => {
                if (timer.id === id) {
                    const nextElapsed = now - timer.runningSince;
                    return {
                        ...timer,
                        runningSince: null,
                        elapsed: timer.elapsed + nextElapsed   
                    }
                } else {
                    return { ...timer }
                }
            })
        })
    }

    render() {
        return (
            <div className="boxed-view">
                <div className="boxed-view__box">
                    <ListContainer 
                        onFormSubmitBox={this.handleEditTimer} 
                        onDelete={this.handleDeleteTimer}
                        timers={this.state.timers}
                        onPlay={this.handlePlay}
                        onPause={this.handlePause}
                    />
                    <ActionContainer onFormSubmit={this.handleCreateTimer} />
                </div>
            </div>
        )
    }   
}

export default Box;