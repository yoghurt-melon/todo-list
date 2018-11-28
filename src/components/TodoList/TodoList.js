import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {
    render() {
        return (
            <div>
                <TodoItem done>React Study</TodoItem>
                <TodoItem>Do styling component</TodoItem>
            </div>
        );
    }
}

export default TodoList;