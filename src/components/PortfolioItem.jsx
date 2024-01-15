import React from 'react'
import './portfolioItem.css'

function PortfolioItem({ item }) {
    return (
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
                <img src={item.img} alt={item.title} className="img-fluid" />
                <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>{item.brief}</p>
                    <div className="portfolio-links">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <i className="bx bx-link"></i>
                        </a>
                        <a href={item.demo} target="_blank" rel="noopener noreferrer">
                            <i class='bx bx-plus-circle'></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioItem