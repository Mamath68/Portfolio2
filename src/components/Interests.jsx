import React, { useState } from 'react';
import './interests.css';
import interestsData from '../data/interestsData';
import InterestItem from './InterestItem';

function Interests() {
    const [interests, setInterests] = useState(interestsData);
    return (
        <div className="container interests">
            <div className="section-title">
                <h2>Centre D'interets</h2>
            </div>
            <div className="row">{
                interests.map(interest => (
                    <InterestItem key={interest._id} interest={interest} />
                ))
            }</div>
        </div>
    )
}

export default Interests