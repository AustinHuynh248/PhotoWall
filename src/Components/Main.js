import React, { Component } from "react";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import Single from "./Single";
import { Route, Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Share Photo Now Photowall</Link>
        </h1>
        <Route
          path="/"
          exact
          render={() => (
            <div>
              <PhotoWall {...this.props} />
            </div>
          )}
        />
        <Route
          path="/AddPhoto"
          render={({ history }) => (
            <AddPhoto {...this.props} onHistory={history} />
          )}
        />
        <Route
          path="/single/:id"
          render={(params) => <Single {...this.props} {...params} />}
        />
      </div>
    );
  }
}
export default Main;
