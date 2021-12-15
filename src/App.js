import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (messege, type) => {
    setAlert({
      msg: messege,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils - Dark Mode';
      // Title chamkane wala kaam
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now !!';
      // }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtils - Light Mode';
    }
  }

  const colr = (color) => {
    console.log(color);
    setMode(color);
    document.title = 'TextUtils -'+ color +' Mode';
    if(color === 'light') {
      document.body.style.backgroundColor = 'white';
    } else {
      document.body.style.backgroundColor = '#042743';
    }
  }

  return (
    <>
    <Router>
      <Navbar title = "TextUtils" aboutText ="About Us" mode = {mode} toggleMode = {toggleMode} colr = {colr}/>
      <Alert alert = {alert} />
      <div className = "container my-3">
        <Switch>
          {/* exact use na kro to partial matching hogi like :
          /users --> component 1
          /users/home --> component 2
          agar mein exact na use kru toh 2nd path bhi path 1 ko refer krega */}
          <Route exact path="/about">
            <About mode = {mode}/>
          </Route>
          <Route exact path="/">
            <TextForm showAlert = {showAlert} heading = "Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode = {mode} />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
