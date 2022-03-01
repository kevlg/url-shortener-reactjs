import * as React from "react";

type MyState = {
    count: number;
};

interface MyProps {

};

class TodoList extends React.Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props);

        this.state = {
            count: 0
        };

        this.increaseCounter = this.increaseCounter.bind(this);
        this.decreaseCounter = this.decreaseCounter.bind(this);
    }

    increaseCounter(): void {
        let count = this.state.count;
        
        this.setState({
            count: ++count
        });
    }

    decreaseCounter(): void {
        this.setState(prevState => ({
            count: prevState.count - 1
        }));
    }

    render() {
        return (
            <div>
                <h3>Counter: {this.state.count} </h3>
                <button onClick={this.increaseCounter}>Increase counter</button>
                <button onClick={this.decreaseCounter}>Decrease counter</button>
            </div>
        );
    }
}

export default TodoList;