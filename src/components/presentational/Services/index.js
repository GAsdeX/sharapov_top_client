import React, { useState } from 'react'

import { BASE_URL } from '../../../constants'
import { FullScrennView } from '../FullScreenView'

import style from './style.module.scss'
import {Link} from "react-router-dom/";

const getImageUrl = (url) => `${BASE_URL}${url}`

const ServiceTitle = ({
    Title,
    Image,
    imageUrl,
    index,
    setService,
    activeService,
    id
}) => {
    const bag = {
        onClick: setService && setService(index),
        className: style['service']
    }

    const Wrapper = activeService === null
        ? ({children}) => <div {...bag}>{children}</div>
        : ({children}) => <Link to={`/${id}`} {...bag}>{children}</Link>

    return (
        <Wrapper>
            <div
                className={style['service-img']}
                style={{
                    backgroundImage: `url(${getImageUrl(imageUrl || Image && Image.url)})`
                }}
            >

            </div>
            <span
                className={style['service-title']}
            >
                {Title}
            </span>
        </Wrapper>
    )
}

const ServiceContent = ({service, setService}) => {
    if (typeof service === 'undefined') return null;
    const { services, Title } = service

    return (
        <div className={style['services-nav']}>
            <div className={style['current-service']}>
                <div onClick={setService(null)} className={style['back']} />
                <div className={style['section-title']} >
                    {Title}
                </div>
            </div>
            {
                services.map(({
                    ServiceTitle: Title,
                    ServiceResults: [rule]
                }) => (
                    <ServiceTitle
                        key={Title}
                        Title={Title}
                        id={rule.id}
                        imageUrl={rule.url}
                    />
                ))
            }
        </div>
    )
}

const ServicesNav = ({ 
    services, 
    setService, 
    activeService 
}) => {
    const Service = (group, index) => <ServiceTitle
        {...group}
        index={index}
        activeService={activeService}
        key={index}
        setService={setService}
    />

    return services
    ? (
        <>
            {
                activeService === null
                ? (
                    <div
                        className={style['services-nav']}
                    >
                        {
                            services
                                ? services.map(Service)
                                : null
                        }
                    </div>
                )
                : (
                    <ServiceContent
                        setService={setService}
                        service={services[activeService]}
                    />
                )
            }
        </>
    )
    : null
}

const ServicesView = ({services}) => {
    const [ activeService, setActiveService ] = useState(null)

    const setService = (service) => () => setActiveService(service)

    return (
        <div
            className={style['Services']}
        >
            <ServicesNav 
                services={services}
                activeService={activeService}
                setService={setService}
            />
        </div>
    )
}

export const Services = ({services}) => {
    return (
        <FullScrennView
            title="Предоставляемые услуги"
        >
            <ServicesView services={services} />
        </FullScrennView>
    )
}