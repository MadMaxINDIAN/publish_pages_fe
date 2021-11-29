import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { app } from "./firebase/config";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Login from "./pages/login";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgotPassword";
import LandingPage from "./pages/landing";
import HomePage from "./pages/home";
import store from "./store";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(props) {
  return (
    <Provider store={store}>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        maxSnack={5}
      >
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/forgot-password">
                <ForgotPassword />
              </Route>
              <Route path="/home">
                <HomePage />
              </Route>
              <Route path="/">
                <LandingPage />
              </Route>
            </Switch>
            <Footer />
          </div>
        </Router>
      </SnackbarProvider>
    </Provider>
  );
}

export default App;
