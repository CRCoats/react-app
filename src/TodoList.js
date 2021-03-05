import React from "react";

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: ['learn react', 'build apps', 'get hired as a dev'],
            goals: ['create a startup', 'make lots of $$$'],
            numberOfTodos: 3,
            getGreeting: () => 'hello'
        };
    }

    componentDidMount() {
        console.log('hey, I mounted')
    }

    render() {
        const { todos, goals, getGReeting, numberOfTodos } = this.state;

        setTimeout(() => {
            this.setState({
            });
        }, 5000);

        return (
            <div>
                <p>{getGreeting()}</p>
                <p>I have {goals.length} goals to complete</p>
            </div>
        );
    }
}

export default TodoList;