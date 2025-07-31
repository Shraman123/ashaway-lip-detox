
import React from 'react';

const iconProps = {
  className: "w-10 h-10"
};

export const LeafIcon: React.FC = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c-5 0-8-2.5-8-7.5s3-7.5 8-7.5 8 2.5 8 7.5S17 22 12 22z"></path>
    <path d="M12 2v12"></path>
  </svg>
);

export const SparkleIcon: React.FC = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l2.5 5 5 2.5-5 2.5-2.5 5-2.5-5-5-2.5 5-2.5L12 2z"></path>
    <path d="M5 22l1.5-3"></path>
    <path d="M17.5 20.5L19 22"></path>
  </svg>
);

export const ShieldIcon: React.FC = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

export const SunIcon: React.FC = () => (
    <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
);


export const ArrowLeftRightIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h14m-5 5l5-5m0 0l-5-5"></path>
    </svg>
);
