import React, { Component } from 'react';
import AuthLaylout from '../Hoc/AuthLayout'
import { getSingleNav } from '../Services/fakeUserService';

class Home extends Component {
  state = {
    name: "",
    metaTag: ""
  }

  componentDidMount() {
    const singleNav = getSingleNav("features")
    this.setState({
      name: singleNav.name,
      metaTag: singleNav.metaTag
    })
  }

  render() {
    const {
      title,
      image,
      shortDescription,
      description
    } = this.state.metaTag

    const { name } = this.state
    return (
      <AuthLaylout
        name={name}
        title={title}
        shortDescription={shortDescription}
        image={image}>
            <h1>Home</h1>
      </AuthLaylout>
    )
  }
}

export default Home