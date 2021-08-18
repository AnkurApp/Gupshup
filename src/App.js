import React from "react";

import "./App.css";
import Gupshup from "./GupShup";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Gupshup />
    </Provider>
  );
}

export default App;
