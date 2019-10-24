import React, { createContext, useReducer, useEffect } from 'react';
import { HeaderReducer } from '../Reducers/HeaderReducer'

export const HeaderContext = createContext()

const HeaderContextProvider = (props) => {
    const [headerState, dispatch] = useReducer(HeaderReducer, {
        lang: '',
        navDetails: []
    }, () => {
        return {
            lang: 'ca',
            navDetails: [{
                name: "Features",
                linkTo: 'features'
            }, {
                name: 'Enterprise',
                linkTo: 'enterprise'
            }, {
                name: "Support",
                linkTo: 'support'
            }, {
                name: 'Pricing',
                linkTo: 'pricing'
            }]
        }
    })

    useEffect(() => {
        console.log(1);
        
    }, [headerState])

    return (
        <HeaderContext.Provider value={{ headerState, dispatch }}>
            {props.children}
        </HeaderContext.Provider>
    )
}

export default HeaderContextProvider;