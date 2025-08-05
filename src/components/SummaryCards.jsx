import React from 'react';
import './components.css';

const SummaryCards = ({
    summaryData = [],
    className = ""
}) => {
    if (!summaryData || summaryData.length === 0) {
        return null;
    }

    return (
        <div className={`row g-3 mb-4 ${className}`}>
            {summaryData.map((item, index) => (
                <div key={index} className="col-12 col-sm-6 col-lg-4">
                    <div className="card border-0 shadow-sm rounded-4 h-100 p-3 d-flex flex-row align-items-center">
                        <div
                            className="menu-item rounded-3 d-flex align-items-center justify-content-center me-3"
                        >
                            <img src={item.icon} alt={item.label} className="menu-item-icon" />
                        </div>
                        <div className="d-flex flex-column">
                            <div className="fw-bold fs-5">{item.number}</div>
                            <div className="text-muted small">{item.label}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SummaryCards;
