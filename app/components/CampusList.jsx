import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";

class CampusList extends Component {
  componentDidMount() {
    const { campuses } = this.props;
  }

  render() {
    return (
      <div>
        <ul className={`list-unstyled`}>
          {this.props.campuses.map(campus => {
            return (
              <div className={`section`} key={campus.id}>
                <li>
                  <div className={`container`}>
                    <NavLink to={`/campus/${campus.id}`}>
                      <div className={`col-lg-4 col-md-4`}>
                        {campus.name}
                      </div>
                      <div className={`col-lg-6 col-md-6`}>
                        <img
                          src={campus.imagePath}
                          className={`col-lg-12 .img-responsive`}
                        />
                      </div>
                    </NavLink>
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
        <div className={`section`} />
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return { campuses: state.campuses };
};

export default withRouter(connect(mapStateToProps)(CampusList));
