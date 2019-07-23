/**
 * A SweetAlert style animated warning icon
 * Adapted from https://codepen.io/collection/XeBzGb/
 */
import React from "react";

export const WarningIcon = () => (
  <div>
    <div className="sa">
      <div className="sa-warning">
        <div className="sa-warning-body"/>
        <div className="sa-warning-dot"/>
      </div>
    </div>
    <style jsx global>{`
      .sa {
        margin: auto;
        width: 140px;
        height: 140px;
        padding: 26px;
        background-color: #fff;
      }
      .sa-warning {
        border-radius: 50%;
        border: 4px solid #f8bb86;
        box-sizing: content-box;
        height: 80px;
        padding: 0;
        position: relative;
        background-color: #fff;
        width: 80px;
        animation: scaleWarning 0.75s infinite alternate;
      }
      .sa-warning:after, .sa-warning:before {
        background: #fff;
        content: '';
        border-radius: 50%;
        height: 100%;
        position: absolute;
        width: 100%;
      }
      .sa-warning:before {
        display: inline-block;
        opacity: 0;
        animation: pulseWarning 2s linear infinite;
      }
      .sa-warning:after {
        display: block;
        z-index: 1;
      }
      .sa-warning-body {
        background-color: #f8bb86;
        border-radius: 2px;
        height: 47px;
        left: 50%;
        margin-left: -2px;
        position: absolute;
        top: 10px;
        width: 5px;
        z-index: 2;
        animation: pulseWarningIns 0.75s infinite alternate;
      }
      .sa-warning-dot {
        background-color: #f8bb86;
        border-radius: 50%;
        bottom: 10px;
        height: 7px;
        left: 50%;
        margin-left: -3px;
        position: absolute;
        width: 7px;
        z-index: 2;
        animation: pulseWarningIns 0.75s infinite alternate;
      }
      @keyframes scaleWarning {
        0% {
          transform: scale(1);
        }
        30% {
          transform: scale(1.02);
        }
        100% {
          transform: scale(1);
        }
      }
      @keyframes pulseWarning {
        0% {
          background-color: #fff;
          transform: scale(1);
          opacity: 0.5;
        }
        30% {
          background-color: #fff;
          transform: scale(1);
          opacity: 0.5;
        }
        100% {
          background-color: #f8bb86;
          transform: scale(2);
          opacity: 0;
        }
      }
      @keyframes pulseWarningIns {
        0% {
          background-color: #f8d486;
        }
        100% {
          background-color: #f8bb86;
        }
      }

    `}</style>
  </div>
);
