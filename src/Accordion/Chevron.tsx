import React from 'react';
import './Accordion.css';
import chevronImg from '../chevron.svg';

export default function Chevron() {
    return <img src={chevronImg} alt="show/hide" className="chevron" width={16} />;
}
