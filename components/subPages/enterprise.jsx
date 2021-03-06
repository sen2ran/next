import React, { Component } from 'react';
import AuthLaylout from '../../Hoc/AuthLayout'
import { getSingleNav } from "../../Services/fakeUserService";
import Content from '../Common/Content'

class Enterprise extends Component {
  state = {
    name: "",
    metaTag: ""
  }

  componentDidMount() {
    const singleNav = getSingleNav("enterprise")
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
        <Content
          name={title}
          imageUrl={image}
          description={description}
        />
      </AuthLaylout>
    )
  }
}

export default Enterprise