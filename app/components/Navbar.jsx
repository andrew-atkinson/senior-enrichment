import React from "react";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";

function Navbar(props) {
  const { navViews, currentNavView } = props;


  return (
    <nav className="navbar navbar-fixed-top navbar-color-on-scroll navbar-transparent">
      <div className="container">
        <div className="navbar-header">
          <span>M.H.I.A.J</span>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <NavLink to={`/campus`}>campus</NavLink>
              </li>
              <li>
                <NavLink to={`/student`}>student</NavLink>
              </li>
            </ul>
          </div>

      </div>
    </nav>
  );
}

const mapStateToProps = function(state) {
  return {
    navViews: state.navViews
  };
};

const mapDispatchToProps = function(dispatch) {
  // return {
  //   handleSubmit(evt) {
  //     evt.preventDefault();
  //     const name = evt.target.channelName.value;
  //     dispatch(postNavView({ name }));
  //   }
  // };
};

export default connect(mapStateToProps)(Navbar);
