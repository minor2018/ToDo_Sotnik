import React, { Component } from 'react';
// Task component - represents a single todo item
import { Tasks } from '../api/tasks.js';
import { Button, Glyphicon, ButtonGroup } from 'react-bootstrap';

export default class Task extends Component {
    toggleChecked() {
        // Set the checked property to the opposite of its current value
        Tasks.update(this.props.task._id, {
            $set: { checked: !this.props.task.checked },
        });
    }

    deleteThisTask() {
        Tasks.remove(this.props.task._id);
    }

    render() {
        const taskClassName = this.props.task.checked ? 'checked' : '';
        return (
            <li className={taskClassName}>
                <ButtonGroup>

                <Button bsStyle="danger" onClick={this.deleteThisTask.bind(this)}>
                    <Glyphicon glyph="remove"/>
                </Button>


                        <Button bsStyle={!!this.props.task.checked?"success":"warning"} onClick={this.toggleChecked.bind(this)}>
                            <Glyphicon glyph={!!this.props.task.checked?"ok":"repeat"}/>
                        </Button>
                </ButtonGroup>



                <span className="text">{this.props.task.text}</span>

            </li>
        );
    }
}

