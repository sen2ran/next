import React, { Component } from 'react';
import AuthLaylout from '../Hoc/AuthLayout'
import { getSingleNav } from "../Services/fakeUserService";
import Content from '../components/Common/Content'

class Support extends Component {
    state = {
        name: "",
        metaTag: ""
    }

    // componentDidMount() {
    //     const singleNav = getSingleNav("support")
    //     this.setState({
    //         name: singleNav.name,
    //         metaTag: singleNav.metaTag
    //     })
    // }

    static async getInitialProps({ req }) {
        const res = getSingleNav("support")
        return {
            name: res.name,
            metaTag: res.metaTag
        }
    }

    render() {
        const {
            title,
            image,
            shortDescription,
            description
        } = this.props.metaTag

        const { name } = this.props
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


export default Support