import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const GovernmentSchemeIntegration = () => {
  const [selectedState, setSelectedState] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const states = [
    { id: 'all', name: 'All States' },
    { id: 'punjab', name: 'Punjab' },
    { id: 'haryana', name: 'Haryana' },
    { id: 'uttar-pradesh', name: 'Uttar Pradesh' },
    { id: 'maharashtra', name: 'Maharashtra' },
    { id: 'gujarat', name: 'Gujarat' },
    { id: 'karnataka', name: 'Karnataka' }
  ];

  const categories = [
    { id: 'all', name: 'All Schemes', icon: 'FileText' },
    { id: 'crop-insurance', name: 'Crop Insurance', icon: 'Shield' },
    { id: 'subsidies', name: 'Input Subsidies', icon: 'IndianRupee' },
    { id: 'technology', name: 'Technology Support', icon: 'Zap' },
    { id: 'credit', name: 'Credit & Loans', icon: 'CreditCard' },
    { id: 'market-support', name: 'Market Support', icon: 'TrendingUp' },
    { id: 'training', name: 'Training Programs', icon: 'GraduationCap' }
  ];

  const schemes = [
    {
      id: 1,
      name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
      category: 'crop-insurance',
      state: 'all',
      type: 'Central Scheme',
      description: 'Comprehensive crop insurance scheme providing financial support to farmers suffering crop loss/damage arising out of unforeseen events.',
      benefits: [
        'Premium rates: 2% for Kharif, 1.5% for Rabi crops',
        'Coverage for all stages from sowing to post-harvest',
        'Use of technology for quick settlement',
        'Voluntary for all farmers'
      ],
      eligibility: 'All farmers including sharecroppers and tenant farmers',
      subsidy: 'Up to ₹2,00,000 per farmer',
      applicationProcess: 'Through banks, CSCs, or online portal',
      documents: ['Aadhaar Card', 'Bank Account', 'Land Records', 'Sowing Certificate'],
      deadline: '31st July for Kharif, 31st December for Rabi',
      contactInfo: {
        website: 'pmfby.gov.in',
        helpline: '14447',
        email: 'support@pmfby.gov.in'
      },
      status: 'Active',
      lastUpdated: '2024-01-15'
    },
    {
      id: 2,
      name: 'PM-KISAN Samman Nidhi',
      category: 'subsidies',
      state: 'all',
      type: 'Central Scheme',
      description: 'Direct income support of ₹6,000 per year to small and marginal farmer families having combined land holding/ownership of up to 2 hectares.',
      benefits: [
        '₹2,000 every 4 months directly to bank account',
        'No restriction on land use',
        'Covers all small and marginal farmers',
        'Self-registration facility available'
      ],
      eligibility: 'Small and marginal farmers with landholding up to 2 hectares',
      subsidy: '₹6,000 per year',
      applicationProcess: 'Online registration through PM-KISAN portal or CSCs',
      documents: ['Aadhaar Card', 'Bank Account Details', 'Land Ownership Papers'],
      deadline: 'No deadline - continuous enrollment',
      contactInfo: {
        website: 'pmkisan.gov.in',
        helpline: '155261',
        email: 'pmkisan-ict@gov.in'
      },
      status: 'Active',
      lastUpdated: '2024-02-01'
    },
    {
      id: 3,
      name: 'Kisan Credit Card (KCC)',
      category: 'credit',
      state: 'all',
      type: 'Central Scheme',
      description: 'Provides adequate and timely credit support from the banking system to farmers for their cultivation and other needs.',
      benefits: [
        'Credit limit based on cropping pattern and scale of finance',
        'Interest subvention of 2% per annum',
        'Flexible repayment schedule',
        'Insurance coverage included'
      ],
      eligibility: 'All farmers including tenant farmers, oral lessees, and sharecroppers',
      subsidy: '2% interest subvention + 3% prompt repayment incentive',
      applicationProcess: 'Apply at any bank branch with required documents',
      documents: ['Application Form', 'Identity Proof', 'Address Proof', 'Land Documents'],
      deadline: 'No deadline - apply anytime',
      contactInfo: {
        website: 'kcc.gov.in',
        helpline: '1800-180-1551',
        email: 'kcc@nabard.org'
      },
      status: 'Active',
      lastUpdated: '2024-01-20'
    },
    {
      id: 4,
      name: 'Sub-Mission on Agricultural Mechanization (SMAM)',
      category: 'technology',
      state: 'all',
      type: 'Central Scheme',
      description: 'Promotes farm mechanization through financial assistance for purchase of agricultural machinery and equipment.',
      benefits: [
        '40-50% subsidy on agricultural machinery',
        'Custom Hiring Centers support',
        'Hi-tech hubs for high-value equipment',
        'Training on machinery operation'
      ],
      eligibility: 'Individual farmers, FPOs, SHGs, and Custom Hiring Centers',
      subsidy: '40-50% of cost subject to maximum limits',
      applicationProcess: 'Through state agriculture departments and DBT portal',
      documents: ['Aadhaar Card', 'Bank Account', 'Land Records', 'Quotation'],
      deadline: 'As per state notification',
      contactInfo: {
        website: 'agrimachinery.nic.in',
        helpline: '1800-180-1551',
        email: 'smam@gov.in'
      },
      status: 'Active',
      lastUpdated: '2024-01-10'
    },
    {
      id: 5,
      name: 'Punjab Crop Diversification Scheme',
      category: 'subsidies',
      state: 'punjab',
      type: 'State Scheme',
      description: 'Encourages farmers to shift from paddy cultivation to alternative crops to conserve groundwater and improve soil health.',
      benefits: [
        '₹18,000 per acre for mustard/rapeseed cultivation',
        '₹16,000 per acre for soybean cultivation',
        'Free seeds and technical support',
        'Assured procurement at MSP'
      ],
      eligibility: 'Farmers in notified blocks of Punjab',
      subsidy: '₹15,000-17,500 per acre',
      applicationProcess: 'Through Agriculture Department Punjab',
      documents: ['Land Records', 'Aadhaar Card', 'Bank Account Details'],
      deadline: '30th June annually',
      contactInfo: {
        website: 'agripb.gov.in',
        helpline: '0172-2970605',
        email: 'agri@punjab.gov.in'
      },
      status: 'Active',
      lastUpdated: '2024-02-05'
    },
    {
      id: 6,
      name: 'Maharashtra Krishi Sanjeevani Project',
      category: 'technology',
      state: 'maharashtra',
      type: 'State Scheme',
      description: 'Climate resilient agriculture project focusing on watershed development and sustainable farming practices.',
      benefits: [
        'Watershed development activities',
        'Climate-smart agriculture practices',
        'Capacity building and training',
        'Market linkage support'
      ],
      eligibility: 'Farmers in project districts of Maharashtra',
      subsidy: 'Various components with different subsidy rates',
      applicationProcess: 'Through project implementing units',
      documents: ['Farmer Registration', 'Land Documents', 'Bank Account'],
      deadline: 'As per project timeline',
      contactInfo: {
        website: 'krishi.maharashtra.gov.in',
        helpline: '1800-233-4555',
        email: 'sanjeevani@maharashtra.gov.in'
      },
      status: 'Active',
      lastUpdated: '2024-01-25'
    }
  ];

  const filteredSchemes = schemes?.filter(scheme => {
    const stateMatch = selectedState === 'all' || scheme?.state === selectedState || scheme?.state === 'all';
    const categoryMatch = selectedCategory === 'all' || scheme?.category === selectedCategory;
    return stateMatch && categoryMatch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'text-green-600 bg-green-100';
      case 'Upcoming': return 'text-blue-600 bg-blue-100';
      case 'Expired': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTypeColor = (type) => {
    return type === 'Central Scheme' ?'text-blue-600 bg-blue-100' :'text-purple-600 bg-purple-100';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">Government Scheme Integration</h3>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Icon name="Building" size={16} className="text-blue-600" />
            <span>Official Government Schemes</span>
          </div>
        </div>

        {/* Filters */}
        <div className="space-y-4">
          {/* State Filter */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">State/Region</label>
            <div className="flex flex-wrap gap-2">
              {states?.map((state) => (
                <button
                  key={state?.id}
                  onClick={() => setSelectedState(state?.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedState === state?.id
                      ? 'bg-blue-600 text-white' :'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {state?.name}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Scheme Category</label>
            <div className="flex flex-wrap gap-2">
              {categories?.map((category) => (
                <button
                  key={category?.id}
                  onClick={() => setSelectedCategory(category?.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category?.id
                      ? 'bg-primary text-white' :'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Icon name={category?.icon} size={14} />
                  <span>{category?.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-6">
          {filteredSchemes?.map((scheme) => (
            <div key={scheme?.id} className="bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              {/* Header */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{scheme?.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{scheme?.description}</p>
                  </div>
                  <div className="flex flex-col space-y-2 ml-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(scheme?.status)}`}>
                      {scheme?.status}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(scheme?.type)}`}>
                      {scheme?.type}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Icon name="IndianRupee" size={16} className="text-green-600" />
                      <span className="text-sm font-medium text-green-600">{scheme?.subsidy}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Calendar" size={16} className="text-blue-600" />
                      <span className="text-sm text-gray-600">Deadline: {scheme?.deadline}</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">
                    Updated: {new Date(scheme.lastUpdated)?.toLocaleDateString('en-IN')}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-4">
                    {/* Benefits */}
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 mb-2 flex items-center space-x-1">
                        <Icon name="Gift" size={14} className="text-green-600" />
                        <span>Key Benefits</span>
                      </h5>
                      <ul className="space-y-1">
                        {scheme?.benefits?.map((benefit, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start space-x-2">
                            <Icon name="Check" size={12} className="text-green-600 mt-1 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Eligibility */}
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 mb-2 flex items-center space-x-1">
                        <Icon name="Users" size={14} className="text-blue-600" />
                        <span>Eligibility</span>
                      </h5>
                      <p className="text-sm text-gray-600">{scheme?.eligibility}</p>
                    </div>

                    {/* Application Process */}
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 mb-2 flex items-center space-x-1">
                        <Icon name="FileText" size={14} className="text-purple-600" />
                        <span>Application Process</span>
                      </h5>
                      <p className="text-sm text-gray-600">{scheme?.applicationProcess}</p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    {/* Required Documents */}
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 mb-2 flex items-center space-x-1">
                        <Icon name="Folder" size={14} className="text-orange-600" />
                        <span>Required Documents</span>
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {scheme?.documents?.map((doc, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full"
                          >
                            {doc}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 mb-2 flex items-center space-x-1">
                        <Icon name="Phone" size={14} className="text-green-600" />
                        <span>Contact Information</span>
                      </h5>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Icon name="Globe" size={12} className="text-gray-500" />
                          <a 
                            href={`https://${scheme?.contactInfo?.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:underline"
                          >
                            {scheme?.contactInfo?.website}
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Phone" size={12} className="text-gray-500" />
                          <span className="text-sm text-gray-600">{scheme?.contactInfo?.helpline}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Mail" size={12} className="text-gray-500" />
                          <span className="text-sm text-gray-600">{scheme?.contactInfo?.email}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2 pt-2">
                      <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary/90 transition-colors">
                        <Icon name="ExternalLink" size={14} />
                        <span>Apply Online</span>
                      </button>
                      <button className="flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors">
                        <Icon name="Download" size={14} />
                        <span>Download Form</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSchemes?.length === 0 && (
          <div className="text-center py-12">
            <Icon name="FileText" size={48} className="text-gray-300 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-gray-900 mb-2">No Schemes Found</h4>
            <p className="text-gray-600">Try adjusting your filters to see available government schemes.</p>
          </div>
        )}

        {/* Summary Stats */}
        {filteredSchemes?.length > 0 && (
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
            <h4 className="font-bold text-gray-900 mb-4">Scheme Summary</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{filteredSchemes?.length}</div>
                <div className="text-sm text-gray-600">Available Schemes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {filteredSchemes?.filter(scheme => scheme?.status === 'Active')?.length}
                </div>
                <div className="text-sm text-gray-600">Active Schemes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {filteredSchemes?.filter(scheme => scheme?.type === 'Central Scheme')?.length}
                </div>
                <div className="text-sm text-gray-600">Central Schemes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">
                  {filteredSchemes?.filter(scheme => scheme?.type === 'State Scheme')?.length}
                </div>
                <div className="text-sm text-gray-600">State Schemes</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GovernmentSchemeIntegration;
