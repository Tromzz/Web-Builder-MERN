import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./Home";
import Editor from "./Editor";
import { pageLoad } from "./redux/actions/pageAction";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    pageLoad()(dispatch);
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Header />
          <Route exact path="/" element={<Content />} />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/editor/:pageId" component={Editor}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;