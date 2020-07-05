import React from 'react'

import { useHomePage } from '../../hooks/useHomePage'

import { Home } from '../../presentational/Home'
import { Services } from '../../presentational/Services'
import { Footer } from '../../presentational/Footer'
import { HeaderForm } from "../../common/HeaderForm";
import { Results } from "../../common/Results";
import { FAQ } from "../../common/FAQ";


export const HomeContainer = () => {
    const {
        services,
        faq
    } = useHomePage()

    return (
        <>
            <Home />
            <HeaderForm />
            <Services services={services} />
            <Results />
            <FAQ faq={faq}/>
            <Footer />
        </>
    )
};