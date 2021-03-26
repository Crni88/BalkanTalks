import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Chat } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/chat" component={Chat} />
      </Router>
    </>
  );
}

export default App;
