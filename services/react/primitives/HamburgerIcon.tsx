/**
 * Docs: https://github.com/jonsuh/hamburgers
 */
import React, { Fragment } from "react";
// import styles from "hamburgers/dist/hamburgers.min.css";
import "hamburgers/dist/hamburgers.min.css";
import Classnames from "classnames";

export const HamburgerIcon = (
  {
    isActive,
    onClick,
    className = "hamburger-box",
  }
  : {
    isActive: boolean,
    onClick: () => any,
    className?: string,
  }
) => (
  <Fragment>
  <button onClick={onClick} className={Classnames("hamburger",  "hamburger--collapse", {"is-active": isActive})} type="button">
    <span className={className}>
      <span className="hamburger-inner" />
    </span>
  </button>

    {/*<style jsx>{styles}</style>*/}
  </Fragment>
);
