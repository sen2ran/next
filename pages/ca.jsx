import React, { Component } from 'react';
import '../components/AllComponent';
import Support from '../components/subPages/support'
import axios from 'axios'

class En extends Component {
    render() {
        var { query, name, metaTag } = this.props;

        // const SingleComponent 
        // const ComponentToRender = Components[SingleComponent];
        return <Support name={name} metaTag={metaTag} />;
    }
}

En.getInitialProps = async ({ query }) => {
    const res1 = await axios.get('https://m-city-7c464.firebaseio.com/metatest.json')
    return { query, name: res1.data.name, metaTag: res1.data.metaTag }
}
export default En;