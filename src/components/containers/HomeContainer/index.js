import React from 'react'

import { useHomePage } from '../../hooks/useHomePage'

import { Home } from '../../presentational/Home'
import { Services } from '../../presentational/Services'
import { Footer } from '../../presentational/Footer'
import { HeaderForm } from "../../common/HeaderForm";
import { Results } from "../../common/Results";
import { FAQ } from "../../common/FAQ";
import { Header } from "../../presentational/Header";
import {About} from "../../presentational/About";


export const HomeContainer = () => {
    const {
        services,
        faq,
        certs
    } = useHomePage()

    return (
        <>
            <Header />
            <Home />
            <HeaderForm />
            <About certs={certs}/>
            <Services services={services} />
            <Results />
            <FAQ faq={faq}/>
            <Footer />
        </>
    )
};