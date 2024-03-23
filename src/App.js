import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by {""}
          <a
            href="https://github.com/MelanieOT7"
            target="_blank"
            rel="noreferrer"
          >
            Ntando Ngcobo
          </a>
          {""} and is open-sourced on {""}
          <a
            href="https://github.com/MelanieOT7/weather-app-using-react"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          {""} and Hosted on{""}{" "}
          <a
            href="https://sunny-druid-0af9e3.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
