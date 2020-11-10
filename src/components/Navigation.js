import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import SnackbarContent from "@material-ui/core/SnackbarContent";

class Navigation extends Component {
  logOut = (e) => {
    e.preventDefault();
    document.cookie = "loggedIn=true;max-age=0*0";
    window.location.replace("/login");
  };

  render() {
    return (
      <div>
        <AppBar
          style={{ background: "green", position: "relative", color: "white" }}
        >
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: "1" }}>
              Small Business
            </Typography>
            <List className="nav-list">
              <ListItem className="nav-list-item">
                <Link
                  onClick={this.ClickListing}
                  style={{ textDecoration: "none" }}
                  to="/"
                >
                  Listings
                </Link>
              </ListItem>
              <ListItem className="nav-list-item">
                {document.cookie === "loggedIn=true" ? null : (
                  <Link style={{ textDecoration: "none" }} to="/login">
                    Login
                  </Link>
                )}
              </ListItem>
             
            </List>
          </Toolbar>
          {document.cookie === "loggedIn=true" ? (
            <SnackbarContent
              style={{
                backgroundColor: "#909590",
                color: "#909590",
                fontSize: "15px",
              }}
              message={`Logged In as: ${this.username}`}
            />
          ) : null}
        </AppBar>
      </div>
    );
  }
}

export default Navigation;