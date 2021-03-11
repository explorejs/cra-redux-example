import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStore } from "./redux/store";
import About from "./About";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const store = useStore();

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>

          <Switch>
            <Route path="/about">
              <About stuff={{ stuff: true }} />
            </Route>
            <Route path="/">
              <h3>Home</h3>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
