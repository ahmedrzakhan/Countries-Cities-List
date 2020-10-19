import React from "react";

import { Switch, Route } from "react-router-dom";
import Home from "./../home/Home";
import CityDetails from "./../home/city/CityDetails";
import EditCityDetails from "./../home/city/EditCityDetails";

const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/:country/:city" render={() => <CityDetails />} />
      <Route path="/:country/:city/edit" render={(props) => <EditCityDetails {...props} />} />
    </Switch>
  );
};

export default PublicRoutes;
