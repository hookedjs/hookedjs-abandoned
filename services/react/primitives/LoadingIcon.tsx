/**
 * Based on https://codepen.io/patrickkunka/pen/JwIoK
 */
import React, {Fragment} from "react";

export type props = {};

export const LoadingIcon = (({}: props) => {
  return (
    <Fragment>
      <div className="css_spinner">
        <div className="half left">
          <div className="band"></div>
        </div>
        <div className="half right">
          <div className="band"></div>
        </div>
      </div>

      <style jsx>{`
        .css_spinner{
          position: absolute;
          width: 48px;
          height: 48px;
          left: 50%;
          top: 50%;
          margin: -24px 0 0 -24px;
          opacity: .3;
          
          -webkit-border-radius: 999px;
          -moz-border-radius: 999px;
          border-radius: 999px;
        }
        
        .css_spinner::after{
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        left: 50%;
        top: 50%;
        margin: -20px 0 0 -20px;
        background: #fafafa;
        
        -webkit-border-radius: 999px;
        -moz-border-radius: 999px;
        border-radius: 999px;
        }
        
        .css_spinner .half{
        position: absolute;
        width: 24px;
        height: 48px;
        top: 0;
        overflow: hidden;
        }
        
        .css_spinner .left{
        left: 0px;
        
        -webkit-border-radius: 999px 0 0 999px;
        -moz-border-radius: 999px 0 0 999px;
        border-radius: 999px 0 0 999px;
        }
        
        .css_spinner .right{
        left: 24px;
        
        -webkit-border-radius: 0 999px 999px 0;
        -moz-border-radius: 0 999px 999px 0;
        border-radius: 0 999px 999px 0;
        }
        
        .css_spinner .band{
        position: absolute;
        width: 24px;
        height: 48px;
        background: #922d8d;
        
        -webkit-border-radius: 999px;
        -moz-border-radius: 999px;
        border-radius: 999px;
        
        -webkit-animation: cssSpinnerRight 1.8s infinite linear;
        -moz-animation: cssSpinnerRight 1.8s infinite linear;
        }
        
        .css_spinner .left .band{
        left: 0;
        border-left: 24px solid #fafafa;
        
        -webkit-animation: cssSpinnerLeft 1.8s infinite linear;
        -moz-animation: cssSpinnerLeft 1.8s infinite linear;
        }
        
        .css_spinner .right .band{
        right: 0;
        border-right: 24px solid #fafafa;
        }
        
        @-webkit-keyframes cssSpinnerRight{
        0% {-webkit-transform:rotate(0deg)}
          20% {-webkit-transform:rotate(90deg)}
        25% {-webkit-transform:rotate(180deg)}
        50% {-webkit-transform:rotate(180deg)}
          70% {-webkit-transform:rotate(270deg)}
        75% {-webkit-transform:rotate(360deg)}
        100% {-webkit-transform:rotate(360deg)}
        }
        
        @-webkit-keyframes cssSpinnerLeft{
        0% {-webkit-transform:rotate(0deg)}
        25% {-webkit-transform:rotate(0deg)}
          35% {-webkit-transform:rotate(90deg)}
        50% {-webkit-transform:rotate(180deg)}
        75% {-webkit-transform:rotate(180deg)}
          80% {-webkit-transform:rotate(270deg)}
        100% {-webkit-transform:rotate(360deg)}
        }
        
        @-moz-keyframes cssSpinnerRight{
        0% {-webkit-transform:rotate(0deg)}
          20% {-webkit-transform:rotate(90deg)}
        25% {-webkit-transform:rotate(180deg)}
        50% {-webkit-transform:rotate(180deg)}
          70% {-webkit-transform:rotate(270deg)}
        75% {-webkit-transform:rotate(360deg)}
        100% {-webkit-transform:rotate(360deg)}
        }
        
        @-moz-keyframes cssSpinnerLeft{
        0% {-webkit-transform:rotate(0deg)}
        25% {-webkit-transform:rotate(0deg)}
          35% {-webkit-transform:rotate(90deg)}
        50% {-webkit-transform:rotate(180deg)}
        75% {-webkit-transform:rotate(180deg)}
          80% {-webkit-transform:rotate(270deg)}
        100% {-webkit-transform:rotate(360deg)}
        }
      `}</style>
    </Fragment>
  );
});
