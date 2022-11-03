import React from 'react';
import {withLayout} from "./layout/Layout";
import Main from "./pages/Main/Main";

function App() {
  return (
    <h2>
        <Main/>
    </h2>
  );
}

export default withLayout(App);
