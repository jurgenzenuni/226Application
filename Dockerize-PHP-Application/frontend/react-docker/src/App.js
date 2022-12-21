import './App.css';
import React from 'react';
import {useEffect, useState} from "react";
import Search from "./components/ImageGallery";


function App() {
    const [data, setData] = useState(null);
  return (
    <div className="App">
        <div className="container1">
            <h1 className="title"> Pexels </h1>
            <Search />
        </div>


        {/*<Button variant="contained" color="success"*/}
        {/*        onClick={() => {*/}
        {/*           alert('clicked');*/}
        {/*                fetch('http://localhost/api/read.php?q=bmw')*/}
        {/*                    .then(response => response.json())*/}
        {/*                    .then(data => setData(data));*/}
        {/*}}>*/}
        {/*    Search*/}
        {/*</Button>*/}
        {/*{JSON.stringify(data)}*/}

        {/*<WallHaven></WallHaven>*/}



      {/*<MyComponent> </MyComponent>*/}
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    <code>src/App.js 1.2 </code> Wallpaper app*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
