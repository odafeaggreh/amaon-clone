import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./components/Context/StateProvider";
import Payment from "./components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51IJ3H8KFx7ksGuxvArRf5sWTbXKtt9IqxllqPCf3zoJjdkuj1fuED2WjiRtWANSzPYtZwlDA496qFpbSkW4LJ7QN00uVnLBu82"
);

function App() {
  const [{ basket }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      console.log(user.email);
      if (user) {
        // User is signed in.
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        // User is signed out.
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    //BEM naming convention
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
