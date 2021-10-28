import { Provider } from 'react-redux';
import { SnackbarProvider } from "notistack";
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
      <SnackbarProvider 
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      maxSnack={5}>
      <BrowserRouter>
    <div className="App">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
    </BrowserRouter>
    </SnackbarProvider>
    </Provider>
  );
}

export default App;
