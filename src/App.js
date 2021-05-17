import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/index';
import thunk from 'redux-thunk';
import { rootReducer } from './store/rootReducer';
import MainPage from './pages/mainPage';

function App() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}

export default App;
