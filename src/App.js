import logo from "./logo.svg";
import "./App.css";

import { Message } from "./components/Message/Message";
function App() {
  return (
    <div className="App">
      <Message msg="Hello React" />
    </div>
  );
}

export default App;
