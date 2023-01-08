import './app-input.css';
import {Component} from "react";

class AppInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataInput: ''
        }
    }

    inputChanges = (e) => {
        this.setState({
            dataInput: e.target.value
        })
    }
    testClick = (e) => {
        console.log(this.state.dataInput);
    }
    render() {
        return (
            <div className='wrapper-input'>
                <input className='app-input'
                       type="text"
                       placeholder='enter your new task'
                       onChange={this.inputChanges}/>
                <button onClick={this.testClick}>
                    Add Task
                </button>
                <h1>My task is </h1>
            </div>

        )
    }
}

export default AppInput;