import React, {Fragment} from "react";
import { Base } from "./Base";


export type props = {
  children: React.ReactNode;
};

export const Blank = ({ children }: props) => <Fragment>
  <Base>
    {children}
  </Base>
</Fragment>;
