/**
 * A SweetAlert style animated error icon
 * Adapted from https://codepen.io/collection/XeBzGb/
 */
import React from "react";

export const ErrorIcon = () => (
  <div>
    <div className="sa">
      <div className="sa-error">
        <div className="sa-error-x">
          <div className="sa-error-left"/>
          <div className="sa-error-right"/>
        </div>
        <div className="sa-error-placeholder"/>
        <div className="sa-error-fix"/>
      </div>
    </div>
    <style global jsx>{`
      .sa {
        margin: auto;
        width: 140px;
        height: 140px;
        padding: 26px;
        background-color: #fff;
      }
      .sa-error {
        border-radius: 50%;
        border: 4px solid #f27474;
        box-sizing: content-box;
        height: 80px;
        padding: 0;
        position: relative;
        background-color: #fff;
        width: 80px;
        animation: animateErrorIcon 0.5s;
      }
      .sa-error:after, .sa-error:before {
        background: #fff;
        content: '';
        height: 120px;
        position: absolute;
        transform: rotate(45deg);
        width: 60px;
      }
      .sa-error:before {
        border-radius: 40px 0 0 40px;
        width: 26px;
        height: 80px;
        top: -17px;
        left: 5px;
        transform-origin: 60px 60px;
        transform: rotate(-45deg);
      }
      .sa-error:after {
        border-radius: 0 120px 120px 0;
        left: 30px;
        top: -11px;
        transform-origin: 0 60px;
        transform: rotate(-45deg);
        animation: rotatePlaceholder 4.25s ease-in;
      }
      .sa-error-x {
        display: block;
        position: relative;
        z-index: 2;
      }
      .sa-error-placeholder {
        border-radius: 50%;
        border: 4px solid rgba(200, 0, 0, .2);
        box-sizing: content-box;
        height: 80px;
        left: -4px;
        position: absolute;
        top: -4px;
        width: 80px;
        z-index: 2;
      }
      .sa-error-fix {
        background-color: #fff;
        height: 90px;
        left: 28px;
        position: absolute;
        top: 8px;
        transform: rotate(-45deg);
        width: 5px;
        z-index: 1;
      }
      .sa-error-left, .sa-error-right {
        border-radius: 2px;
        display: block;
        height: 5px;
        position: absolute;
        z-index: 2;
        background-color: #f27474;
        top: 37px;
        width: 47px;
      }
      .sa-error-left {
        left: 17px;
        transform: rotate(45deg);
        animation: animateXLeft 0.75s;
      }
      .sa-error-right {
        right: 16px;
        transform: rotate(-45deg);
        animation: animateXRight 0.75s;
      }
      @keyframes rotatePlaceholder {
        0%, 5% {
          transform: rotate(-45deg);
        }
        100%, 12% {
          transform: rotate(-405deg);
        }
      }
      @keyframes animateErrorIcon {
        0% {
          transform: rotateX(100deg);
          opacity: 0;
        }
        100% {
          transform: rotateX(0deg);
          opacity: 1;
        }
      }
      @keyframes animateXLeft {
        0%, 65% {
          left: 82px;
          top: 95px;
          width: 0;
        }
        84% {
          left: 14px;
          top: 33px;
          width: 47px;
        }
        100% {
          left: 17px;
          top: 37px;
          width: 47px;
        }
      }
      @keyframes animateXRight {
        0%, 65% {
          right: 82px;
          top: 95px;
          width: 0;
        }
        84% {
          right: 14px;
          top: 33px;
          width: 47px;
        }
        100% {
          right: 16px;
          top: 37px;
          width: 47px;
        }
      }

    `}</style>
  </div>
);
