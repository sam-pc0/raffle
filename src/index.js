import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { Loader } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './index.scss';

const App = lazy(() => import('./views/App'));
const Snow = lazy(() => import('./components/Snow/Snow'));

ReactDOM.render(
  <Suspense
    fallback={
      <Loader inverted active>
        Loading...
      </Loader>
    }
  >
    <img
      className="background-image"
      src="/images/background.jpg"
      alt="snowman"
    ></img>
    <img
      className="three-image"
      src="/images/three.png"
      alt="Christmas Three"
    ></img>
    <img
      className="fireplace-image"
      src="/images/fireplace.png"
      alt="Chimenea"
    ></img>

    <Snow />
    <App />
  </Suspense>,
  document.getElementById('root')
);
