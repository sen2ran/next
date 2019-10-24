import React, { Component } from 'react';
import AuthLaylout from '../../Hoc/AuthLayout'
import axios from 'axios'
import Content from '../../components/Common/Content'

class Support extends Component {
    state = {
        name: "",
        metaTag: ""
    }
    componentDidMount() {
    }
    render() {
        const {
            title,
            image,
            shortDescription,
            shortDescriptionRu,
            description,
            descriptionRu
        } = this.props.metaTag

        const { name } = this.props
        return (
            <AuthLaylout
                name={name}
                title={title}
                shortDescription={shortDescriptionRu}
                image={image}>
                <Content
                    name={title}
                    imageUrl={image}
                    description={descriptionRu}
                />
            </AuthLaylout>
        )
    }
}

Support.getInitialProps = async ({ req }) => {
    const res1 = await axios.get('https://m-city-7c464.firebaseio.com/metatest.json')
    console.log(res1.data.name);

    return {
        name: res1.data.name,
        metaTag: res1.data.metaTag
    }
}


export default Support