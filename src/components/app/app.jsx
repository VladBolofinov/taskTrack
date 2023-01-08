import './app.css';
import AppInput from '../app-input/app-input';
import Task from "../task/task";

function App() {
    return (
        <div className='app'>
            <h1>Task Tracker made by Vlad Bolofinov</h1>
            <AppInput/>
            <Task/>
        </div>
    )
}
export default App;