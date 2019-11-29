import React, {Component} from 'react';
import nanoid from 'nanoid';
import './App.css';
import FormBlock from "./components/FormBlock/FormBlock";
import Task from "./components/Task/Task";


class App extends Component {
    state = {
        tasks: [],
        name: '',
        cost: ''
    };

    getTaskName = event => {
        this.setState({name: event.target.value});
    };

    getTaskCost = event => {
        this.setState({cost: event.target.value});
    };

    addTask = event => {
        event.preventDefault();
        const tasks = [...this.state.tasks];
        tasks.push({name: this.state.name, cost: this.state.cost})
        this.setState({tasks});
    };

    removeTask = id => {
        const index = this.state.tasks.findIndex(p => p.id === id);
        const tasks = [...this.state.tasks];
        tasks.splice(index, 1);
        this.setState({tasks});
    };

    render() {
        const tasksList = this.state.tasks.map(task => {
            return <Task
                key={nanoid()}
                name={task.name}
                cost={task.cost}
                remove={() => this.removeTask(task.id)}
            />
        });

        const total = this.state.tasks.reduce((acc, task) => acc + parseInt(task.cost), 0);

        return (
            <div className='App'>
                <FormBlock
                    getName={this.getTaskName}
                    getCost={this.getTaskCost}
                    add={this.addTask}
                />
                <div>
                    {tasksList}
                </div>
                <p>Total spent: {total} KGS</p>
            </div>
        );
    }
}

export default App;