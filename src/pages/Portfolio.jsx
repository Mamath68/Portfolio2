import React, { useState, useEffect } from 'react'
import './portfolio.css';
import SectionTitle from '../components/SectionTitle';
import filterListData from '../data/filterListData';

function Portfolio({ reference }) {
  const [portfolio, setPortfolio] = useState([]);
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState([]);

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

  return (
    <section id="portfolio" className="portfolio" ref={reference}>
      <div className="container portfolio ">
        <SectionTitle title="Portfolio" subtitle="Mon Portfolio" />
        <div className="row">
          <div className="col-lg-12 d-flex justify-contant-center">
            <ul id="portfolio-filters"></ul>
          </div>
        </div>
        <div className="row portfolio-container">
          {data &&
            data.length > 0 &&
            data.map(item => (<p key={item._id}>{item.category}</p>))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio