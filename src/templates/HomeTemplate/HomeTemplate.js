import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import {Route} from 'react-router-dom'

export default function HomeTemplate(props) {
    // template cho các props có header 
    return (
        <Route 
            exact
            path={props.path}
            render={(propsRoute) => {
                return <div>
                    <Header />
                    <props.component {...propsRoute} />
                    <Footer />
                </div>
            }}
        />
    )
}
