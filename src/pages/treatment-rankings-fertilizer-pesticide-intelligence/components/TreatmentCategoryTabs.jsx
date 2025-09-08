import React from 'react';
import Icon from '../../../components/AppIcon';

const TreatmentCategoryTabs = ({ activeCategory, onCategoryChange, categories }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-1">
      <div className="flex flex-wrap gap-1">
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => onCategoryChange(category?.id)}
            className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeCategory === category?.id
                ? 'bg-primary text-white shadow-sm'
                : 'text-gray-600 hover:text-primary hover:bg-gray-50'
            }`}
          >
            <Icon name={category?.icon} size={18} />
            <span>{category?.name}</span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              activeCategory === category?.id
                ? 'bg-white/20 text-white' :'bg-gray-100 text-gray-600'
            }`}>
              {category?.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TreatmentCategoryTabs;