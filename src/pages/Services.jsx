import React, { useState } from 'react'
import './services.css';
import SectionTitle from '../components/SectionTitle';
import servicesData from '../data/servicesData';
import ServiceItem from '../components/ServiceItem';

function Services({ reference }) {
  const [services, setServices] = useState(servicesData);
  return (
    <section id="services" className="services" ref={reference}>
      <div className="container services">
        <SectionTitle title="Services" subtitle="Mes services" />
        <div className="row">
          {services.map(service => (
            <ServiceItem key={service._id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;