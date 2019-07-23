import * as React from "react";
import { LoadingIcon } from "../primitives/LoadingIcon";

export type props = {};

export const Loading = (({}: props) => {
  return (
    <div className="Loading">
      <LoadingIcon />

      <style jsx>{`
        .Loading{
          padding-top: 40px;
          margin: auto;
          width: 100px;
      `}</style>
    </div>
  );
});
