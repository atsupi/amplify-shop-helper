import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Amplify } from "aws-amplify";
import config from "./aws-exports";
import { AmplifyProvider } from "@aws-amplify/ui-react";
Amplify.configure(config);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <div className="Main_div">
    <AmplifyProvider>
      <App />
    </AmplifyProvider>
  </div>
);
