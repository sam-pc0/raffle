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
      src="/images/snowman.png"
      alt="snowman"
    ></img>
    <Snow />
    <App />
  </Suspense>,
  document.getElementById('root')
);
