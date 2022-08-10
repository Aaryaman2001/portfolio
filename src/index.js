import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { ThemeProvider } from "./Theme";




// ReactDOM.render(<App/>, document.querySelector('#root'))
ReactDOM.render(
  
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
