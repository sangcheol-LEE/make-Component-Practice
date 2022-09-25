import React from 'react';
import ReactDOM from 'react-dom/client';
import SkeletonView from './Skeleton/SkeletonView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SkeletonView />
  </React.StrictMode>
);

