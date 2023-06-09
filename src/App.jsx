import { HashRouter } from 'react-router-dom';
import AppRouter from './router';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </HashRouter>
  );
}

export default App;