import React from "react";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";

function Navbar(props) {
  const { navViews, currentNavView } = props;

  return (
    <nav
      className={`navbar navbar-fixed-top navbar-color-on-scroll navbar-transparent navbar-default`}
      role={`navigation`}
    >
      <div className={`container container-fluid`}>
        <div className={`navbar-header`}>
          <button
            type={`button`}
            className={`navbar-toggle`}
            data-toggle={`collapse`}
            data-target={`#bs-example-navbar-collapse-1`}
          >
            <span className={`sr-only`}>Toggle navigation</span>

            <span className={`icon-bar`} />
          </button>
          <NavLink className={`navbar-brand`} to={`/campus`}>
            <span>M.H.I.A.J</span>
          </NavLink>
        </div>

        <div
          className={`collapse navbar-collapse`}
          id={`bs-example-navbar-collapse-1`}
        >
          <ul className={`nav navbar-nav navbar-right`}>
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

export default connect(mapStateToProps)(Navbar);
