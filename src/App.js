import { BrowserRouter } from "react-router-dom";
import RoutesLink from "./route";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesLink />
      </BrowserRouter>
    </div>
  );
}

export default App;
