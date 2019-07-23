import React, {Fragment} from "react";

export type props = {
  children: React.ReactNode;
};

export const Base = ({ children }: props) => (<Fragment>
  {children}

  <style jsx global>{`
    body {
      margin: 0;
    }
    *:focus {
      outline: none;
    }
  `}</style>
</Fragment>);

// export default Base as unknown as React.ComponentClass;
// export default Base;
