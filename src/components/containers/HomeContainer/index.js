import React from 'react'

import { useHomePage } from '../../hooks/useHomePage'

import { Home } from '../../presentational/Home'
import { Services } from '../../presentational/Services'
import { Footer } from '../../presentational/Footer'
import {HeaderForm} from "../../common/HeaderForm";


export const HomeContainer = () => {
    const {
        services
    } = useHomePage()

    return (
        <>
            <Home />
            <HeaderForm />
            <Services services={services} />
            <Footer />
        </>
    )
};