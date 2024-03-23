import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by {""}
          <a href="shecode.io" target="_blank">
            Ntando Ngcobo
          </a>
          {""} and is open-sourced on {""}
          <a href="shecodes.io" target="_blank">
            GitHub
          </a>
          {""} and Hosted on{""} <a href="/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}
