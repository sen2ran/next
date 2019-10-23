import React, { Component } from 'react';
import AuthLaylout from '../Hoc/AuthLayout'
import { getSingleNav } from "../services/fakeUserService";
import Content from '../components/Common/Content'

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
        <Content
          name={title}
          imageUrl={image}
          description={description}
        />
      </AuthLaylout>
    )
  }
}

export default Home