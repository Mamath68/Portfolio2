import React from 'react'

function ServiceItem({ service }) {
    return (
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div className="icon-box">
                <div className="icon">
                    <i className={service.icon}></i>
                </div>
                <h4>
                    {service.name}
                </h4>
                <p>{service.brief}</p>
            </div>
        </div>
    )
}

export default ServiceItem