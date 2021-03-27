import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Chat, Home2 } from "./components";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home2} />
        <Route path="/chat" component={Chat} />
        <Route path="/login" component={Home} />
      </Router>
    </>
  );
}

export default App;
