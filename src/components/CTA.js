import React from 'react';
import Button from '../components/Button';

export default ({title,subtitle}) => {
    return (
        <div className="m-cta">
            <Button title={title}/>
            {subtitle && <div className="m-cta_subtitle">{subtitle}</div>}
        </div>
    );
}