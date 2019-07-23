// import { Fragment, h } from 'preact';
import React, {Fragment} from "react";
import {Logo} from "../config";
import { Sidebar } from "../layouts/Sidebar";

export const Index: React.FC = () => <Sidebar>
  <div className="App">
    <div className="App-header">
      <img src={Logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  </div>

  <style jsx>{`
    .App {
      text-align: center;
    }
    
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
      height: 40vmin;
      pointer-events: none;
    }
    
    .App-header {
      background-color: #282c34;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: calc(10px + 2vmin);
      color: white;
    }
    
    .App-link {
      color: #61dafb;
    }
    
    @keyframes App-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `}</style>
</Sidebar>;

export default Index;
