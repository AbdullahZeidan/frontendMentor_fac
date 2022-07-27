import React from 'react';
import './Accordion.css';
import chevronImg from '../chevron.svg';

export default function Chevron() {
    return <img className="chevron" width={16} src={chevronImg} alt="show/hide" />;
}
