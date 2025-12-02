import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";

const App = () => {
  return <Provider store={appStore}>

    <Body/>
  </Provider>
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
