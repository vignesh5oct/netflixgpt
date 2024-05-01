import { Provider } from 'react-redux';
import './App.css';
import Header from './Components/Header';
import appStore from './utils/appStore';
import Body from './Components/Body';

function App() {




  return (
    <Provider store={appStore}>
      <Body />
    </Provider>

  );
}

export default App;
