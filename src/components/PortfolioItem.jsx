import React from 'react'

function PortfolioItem({ item }) {
    return (
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
<img src={item.img} alt={item.title} className="img-fluid" />
            </div>
        </div>
    )
}

export default PortfolioItem