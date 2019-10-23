import React, { Component } from 'react';
import AuthLaylout from '../Hoc/AuthLayout'
import axios from 'axios'
import { getSingleNav } from "../Services/fakeUserService";
import Content from '../components/Common/Content'

class Support extends Component {
    state = {
        name: "",
        metaTag: ""
    }

    componentDidMount() {
        // const singleNav = getSingleNav("support")
        // this.setState({
        //     name: singleNav.name,
        //     metaTag: singleNav.metaTag
        // })

        // const res =  axios.get('https://m-city-7c464.firebaseio.com/metatest.json')
        //     .then((response) => {
        //         console.log(response.data);
        //     });
    }

    // static async getInitialProps({ req }) {
    //     // const res = await axios.get('https://m-city-7c464.firebaseio.com/metatest.json')
    //     //     .then((response) => {
    //     //         console.log(response.data);
    //     //     });

    //     const res = await getSingleNav("support")
    //     return {
    //         name: res.name,
    //         metaTag: res.metaTag
    //     }
    // }

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

Support.getInitialProps = async ({ req }) => {
    const res1 = await axios.get('https://m-city-7c464.firebaseio.com/metatest.json')
    // .then((response) => {
    //     return {
    //         name: response.data.name,
    //         metaTag: response.data.metaTag,
    //     }
    // });

    // console.log(res1.data.name);


    // const res = await getSingleNav("support")

    return {
        name: res1.data.name,
        metaTag: res1.data.metaTag
    }
}


export default Support