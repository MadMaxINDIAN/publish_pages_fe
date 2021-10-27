import { Provider } from 'react-redux';
import {app} from "./firebase/config";
import './App.css';
import Navbar from './components/Navbar/navbar';
import LandingPage from './pages/landing';
import store from './store';
import Footer from './components/footer/footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
    <div className="App">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
