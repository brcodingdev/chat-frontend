import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import "./Header.scss";

const Header = (props) => (
  <div className="header">
    {!props.isAuthenticated ? (
      ""
    ) : (
      <div className="header d-flex flex-row justify-content-center">
        <MDBBtn className="block" color="danger" onClick={props.logout}>
          Logout
        </MDBBtn>
      </div>
    )}
  </div>
);

export default Header;
