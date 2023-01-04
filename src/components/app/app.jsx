import './app.css';
import AppInput from '../app-input/app-input';
function App() {
    return (
        <div className='app'>
            <h1>Task Tracker made by Vlad Bolofinov</h1>
            <AppInput/>
            <AppInput/>
        </div>
    )
}
export default App;