import React from "react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export function FeatureList({ children }) {
    return <>
        <div className="row">
            {children}
        </div>
    </>
}

export function Column({ title, children, size = 4 }) {
    return <>
        <div className={`col col--${size}`}>
            <h3>{title}</h3>
            {children}
        </div>
    </>
}

export function Feature({ image, title, subtitle, url, highlight = false }) {
    
}