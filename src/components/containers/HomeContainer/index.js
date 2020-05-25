import React from 'react'

import { useHomePage } from '../../hooks/useHomePage'

import { Home } from '../../presentational/Home'
import { Services } from '../../presentational/Services'

export const HomeContainer = () => {
    const {
        services
    } = useHomePage()

    return (
        <>
            <Home />
            <Services services={services} />
        </>
    )
};