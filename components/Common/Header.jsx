import React, { Component } from 'react';

import { getNavDetails } from "../../Services/fakeUserService";
import Link from 'next/link'

class Header extends Component {
  state = {
    navDetails: []
  }

  componentDidMount() {
    const navDetails = getNavDetails("0001")
    this.setState({
      navDetails: navDetails.navs
    })
  }

  LogoutFn() {
    localStorage.clear();
    this.props.history.push('/sign-in')
  }

  render() {
    const { navDetails } = this.state
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 className="my-0 mr-md-auto font-weight-normal">Header</h5>

        <select>
          <option value="volvo">En</option>
          <option value="saab">SL</option>
          <option value="mercedes">IN</option>
        </select>

        <nav className="my-2 my-md-0 mr-md-3">
          {
            navDetails.map(navDetail =>
              <Link href={'/ca?slug=' + navDetail.linkTo} as={'ca/' + navDetail.linkTo} key={navDetail.name} ><a className="p-2 text-dark">{navDetail.name}</a></Link>
            )
          }
          {/* <Link href="/ca?slug=sen2" as="ca/sen2"  ><a className="p-2 text-dark">Canda check</a></Link> */}
        </nav>
        {/* <button className="btn btn-outline-primary" onClick={(event) => this.LogoutFn(event)}>Log out</button> */}
      </div >
    );
  }
}

export default Header