import logo from "./logo.svg";
import "./App.css";

import { Message } from "./components/Message/Message";
function App() {
  return (
    <div className="App">
      <Message msg="Hello React" num="2022" />
    </div>
  );
}

export default App;
