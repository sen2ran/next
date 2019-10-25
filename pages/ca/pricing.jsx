import React, { Component } from 'react';
import AuthLaylout from '../../Hoc/AuthLayout'
import axios from 'axios'
import Content from '../../components/Common/Content'

class Pricing extends Component {
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

Pricing.getInitialProps = async ({ req }) => {
    const res1 = await axios.get('https://m-city-7c464.firebaseio.com/metatest/pricing.json')
    console.log(res1.data.name);

    return {
        name: res1.data.name,
        metaTag: res1.data.metaTag
    }
}


export default Pricing