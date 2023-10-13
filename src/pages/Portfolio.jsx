import React, { useState, useEffect } from 'react'
import './portfolio.css';
import SectionTitle from '../components/SectionTitle';
import filterListData from '../data/filterListData';
import PortfolioItem from '../components/PortfolioItem';

function Portfolio({ reference }) {
  const [portfolio, setPortfolio] = useState([]);
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(filterListData);

  const fetchData = () => {
    fetch('http://localhost:3000/api/portfolioData.json')
      .then(rest => rest.json())
      .then(data => {
        console.log(data);
        setPortfolio(data)
      })
      .catch(e => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setData(portfolio)
  }, [portfolio]);

  const handleFilterData = category => {
    setFilters(
      filters.map(filter => {
        filter.active = false;
        if (filter.name === category) {
          filter.active = true;
        }
        return filter;
      })
    );

    if (category === 'All') {
      setData(portfolio);
      return;
    }

    setData(portfolio.filter(item => item.category === category));
  };

  return (
    <section id="portfolio" className="portfolio" ref={reference}>
      <div className="container portfolio ">
        <SectionTitle title="Portfolio" subtitle="Mon Portfolio" />
        <div className="row">
          <div className="col-lg-12 d-flex justify-contant-center">
            <ul id="portfolio-filters">
              {filters.map(filter => (
                <li
                  key={filter._id}
                  className={filter.active ? "filter-active" : null}
                  onClick={() => handleFilterData(filter.name)}
                >
                  {filter.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row portfolio-container">
          {data &&
            data.length > 0 &&
            data.map(item => <PortfolioItem key={item._id} item={item} />)}
        </div>
      </div>
    </section>
  );
}

export default Portfolio
