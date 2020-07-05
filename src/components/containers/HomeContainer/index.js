import React from 'react'

import { useHomePage } from '../../hooks/useHomePage'

import { Home } from '../../presentational/Home'
import { Services } from '../../presentational/Services'
import { Footer } from '../../presentational/Footer'


export const HomeContainer = () => {
    const {
        services
    } = useHomePage()

    return (
        <>
            <Home />
            <Services services={services} />
            <Footer />
        </>
    )
};