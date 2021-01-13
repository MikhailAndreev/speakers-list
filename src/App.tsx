import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Redirect, Route, Switch } from "react-router-dom";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

import { useStores } from "./hooks";
import Loader from "./components/UI/Loader";
import Header from "./components/Header/Header";
import MainScreen from "./screens/MainScreen";
// import Footer from './components/Footer';

// Screens
// import SignInScreen from './screens/SignInScreen';

const App: React.FC = observer(() => {
  const { AuthStore } = useStores();

  // Effects
  // useEffect(() => {
  //   AuthStore.checkAuth();
  // }, [AuthStore]);

  // Renders
  // Main loader
  // if (!AuthStore.completeCheckAuth) {
  //   return <Loader />;
  // }

  const renderIsAuthStack = () => {
    return (
      <>
        <Header />

        <main>
          <Switch>
            <Route exact path="/" component={MainScreen} />

            <Route path="*">
              {/* <Redirect to="/not-found" /> */}
              <Redirect to="/" />
            </Route>
          </Switch>
        </main>

        {/* <Footer /> */}

        <ReactNotification />
      </>
    );
  };

  const renderIsNotAuthStack = () => {
    return (
      <>
        <main>
          <Switch>
            {/* <Route exact path="/login" component={SignInScreen} /> */}
            {/* <Route exact path="/register" component={SignUpScreen} /> */}

            <Route path="*">
              <Redirect to="/login" />
            </Route>
          </Switch>
        </main>

        <ReactNotification />
      </>
    );
  };

  // return AuthStore.isAuth ? renderIsAuthStack() : renderIsNotAuthStack();
  return AuthStore.isAuth ? renderIsAuthStack() : renderIsNotAuthStack();
});

export default App;
