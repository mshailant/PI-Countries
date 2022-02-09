import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Route, Switch } from "react-router-dom";
import CountriesList from "../../pages/CountriesList";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route path="/countries" component={CountriesList} />
        {/* <Route path="/activity/create" component={} />
        <Route path="/countries/:id" component={} /> */}
      </Switch>
    </>
  );
};

export default Home;
