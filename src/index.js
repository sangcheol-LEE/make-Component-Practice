import React from 'react';
import ReactDOM from 'react-dom/client';
import CarouselView from './Carousel/CarouselView';
import reportWebVitals from './reportWebVitals';
import SkeletonView from './Skeleton/SkeletonView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CarouselView />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
