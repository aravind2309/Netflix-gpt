import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import appstore from './utils/appStore';

function App() {
  return (
    <div>
      <Provider store={appstore}> 
      <Body/>
      </Provider>
     
    </div>
  );
}

export default App;
