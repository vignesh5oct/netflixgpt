import { Provider } from 'react-redux';
import './App.css';
import Header from './Components/Header';
import appStore from './utils/appStore';
import Login from './Components/Login';
import Browse from './Components/Browse';
import Body from './Components/Body';

function App() {




  return (
    <Provider store={appStore}>
      <Header />
      <Body />
    </Provider>

  );
}

export default App;
