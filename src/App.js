import './App.css';
import {Provider} from 'react-redux';
import store from './store'
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <Provider store ={store}>

    <div className="App">
      <Header/>
      <Home/>
        </div>
    </Provider>
  );
}

export default App;
