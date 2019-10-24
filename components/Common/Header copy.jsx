import React, { Component } from 'react';
import { withRouter } from 'next/router';
import { getNavDetails } from "../../Services/fakeUserService";
import Link from 'next/link'

class Header extends Component {
  state = {
    lang: 'ca',
    navDetails: []
  }

  componentDidMount() {
    console.log(this.props);

    const navDetails = getNavDetails("0001")
    this.setState({
      navDetails: navDetails.navs
    })
  }


  selectedChange = (event) => {
    console.log(event.target.value);
    this.setState({
      lang: event.target.value
    })
  }

  LogoutFn() {
    localStorage.clear();
    this.props.history.push('/sign-in')
  }

  render() {
    const { navDetails, lang } = this.state
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 className="my-0 mr-md-auto font-weight-normal">Header</h5>

        <select value={this.state.lang} onChange={this.selectedChange}>
          <option value="ca">Ca</option>
          <option value="in">In</option>
        </select>

        <nav className="my-2 my-md-0 mr-md-3">
          {
            navDetails.map(navDetail =>
              <Link href={'/' + lang + '/' + navDetail.linkTo} key={navDetail.name} ><a className="p-2 text-dark">{navDetail.name}</a></Link>
            )
          }
        </nav>
      </div >
    );
  }
}

export default withRouter(Header)