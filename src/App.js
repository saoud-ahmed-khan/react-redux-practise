import './App.css';
import { store } from "./Redux/Store";
import { Provider } from "react-redux";
import { Reduxdecreser } from "./Components/Redux_decreser";
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Reduxdecreser/>
    </div>
    </Provider>
  );
}

export default App;
