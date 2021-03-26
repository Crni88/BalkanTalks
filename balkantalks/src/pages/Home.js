import logo from "../logo.svg";

export function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>LZN je najbolji tim na ovom Takmicenju ;)</h1>
        <p>Bili i roja naj programeri</p>

        <p>
          Edit <code>src/App.js</code> Hello BalkanTalks2.
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
    </div>
  );
}
