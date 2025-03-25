import { Skeleton } from "antd";
import { FC } from "react";


import './Loader.css';  

export const Loader = () => {
  return (
    <div className="skeleton-loader">
      {Array.from({ length: 5 }).map((_, idx) => (
        <div key={idx} className="skeleton-row">
          <Skeleton.Input 
            active 
            className="skeleton-input" 
          />
        </div>
      ))}
    </div>
  );
};

export const DiscountLoader = () => {
  return (
    <div className="discount-loader-container">
      <div className="discount-skeleton-header">
        <Skeleton.Input 
          active 
          className="discount-skeleton-title" 
        />
      </div>
      
      <div className="discount-skeleton-subheader">
        <Skeleton.Input 
          active 
          className="discount-skeleton-subtitle" 
        />
      </div>
      
      <Skeleton.Image 
        active 
        className="discount-skeleton-image" 
      />
    </div>
  );
};

 export const ProductsLoader: FC<{ count?: number }> = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div 
          key={index} 
          className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="relative pt-[100%] bg-gray-50 overflow-hidden">
            <Skeleton.Avatar 
              active 
              shape="square" 
              style={{ 
                width: '100%', 
                height: '100%', 
                position: 'absolute', 
                top: 0, 
                left: 0,
                borderRadius: 0
              }} 
            />
          </div>
          
          <div className="p-4">
            <Skeleton 
              active 
              paragraph={{ rows: 1 }} 
              title={false} 
              className="mb-2"
            />
            <div className="flex justify-between items-center">
              <Skeleton.Button 
                active 
                size="small" 
                shape="round" 
                style={{ width: 80 }} 
              />
              <Skeleton.Button 
                active 
                size="small" 
                shape="round" 
                style={{ width: 60 }} 
                className="ml-2"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

 