import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store.ts';
ReactDOM.createRoot(document.getElementById('root')!).render(

  <Provider store={setupStore()}>
    <App />
  </Provider>
 
);
