import React, {Fragment} from "react";
import Link from "next/link";
import {useRouter} from "next/router";

export const Header = () => {
  const router = useRouter();

  return <Fragment>
    <header className="header">
      <h1>Preact Apps</h1>
      <nav>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/inner-page">
          <a className={router.pathname === "/inner-page" ? "active" : ""}>Page</a>
        </Link>
      </nav>
    </header>

    <style jsx>{`
    .header {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 56px;
      padding: 0;
      background: #673AB7;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      z-index: 50;
    }
    
    .header h1 {
      float: left;
      margin: 0;
      padding: 0 15px;
      font-size: 24px;
      line-height: 56px;
      font-weight: 400;
      color: #FFF;
    }
    
    .header nav {
      float: right;
      font-size: 100%;
    }
    
    .header nav a {
      display: inline-block;
      height: 56px;
      line-height: 56px;
      padding: 0 15px;
      min-width: 50px;
      text-align: center;
      background: rgba(255, 255, 255, 0);
      text-decoration: none;
      color: #FFF;
      will-change: background-color;
    }
    
    .header nav a:hover,
    .header nav a:active {
      background: rgba(0, 0, 0, 0.2);
    }
    
    .header nav a.active {
      background: rgba(0, 0, 0, 0.4);
    }
  `}</style>
  </Fragment>;
};
