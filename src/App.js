import logo from './logo.svg';
import './App.css';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterViewer from './components/CounterViewer';
import CounterContext from './context-api/CounterContext';
import { useReducer } from 'react';
import { counterReducer, counterState } from './context-api/counterReducer';
// import SampleContext from './context-api/sampleContext'

function App() {
  const value = 'Hello World'
  const { Provider } = CounterContext;

  const [state, dispatch] = useReducer(counterReducer, counterState);

  return (
    <Provider value={{ counterState: state, counterDispatch: dispatch }}>
      <div className="App">
        <CounterOne />
        <CounterTwo />
        <CounterViewer />
      </div>
    </Provider>
  );
}

export default App;
