import React, {Fragment} from "react";
import { Sidebar } from "../layouts/Sidebar";

export default () => <Sidebar>
  <div className="home">
    <h1>Inner Page</h1>
    <p>This is an inner page.</p>
  </div>

  <style jsx>{`
    .home {
      padding: 56px 20px;
      min-height: 100%;
      width: 100%;
    }
  `}</style>
</Sidebar>;
