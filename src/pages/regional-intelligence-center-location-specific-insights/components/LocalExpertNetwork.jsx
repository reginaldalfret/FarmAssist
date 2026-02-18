import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const LocalExpertNetwork = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const expertCategories = [
    { id: 'all', name: 'All Experts', icon: 'Users' },
    { id: 'extension-officers', name: 'Extension Officers', icon: 'GraduationCap' },
    { id: 'successful-farmers', name: 'Successful Farmers', icon: 'Award' },
    { id: 'agricultural-scientists', name: 'Agricultural Scientists', icon: 'Microscope' },
    { id: 'consultants', name: 'Consultants', icon: 'Briefcase' },
    { id: 'input-dealers', name: 'Input Dealers', icon: 'Store' }
  ];

  const regions = [
    { id: 'all', name: 'All Regions' },
    { id: 'punjab', name: 'Punjab' },
    { id: 'haryana', name: 'Haryana' },
    { id: 'uttar-pradesh', name: 'Uttar Pradesh' },
    { id: 'maharashtra', name: 'Maharashtra' },
    { id: 'gujarat', name: 'Gujarat' },
    { id: 'karnataka', name: 'Karnataka' }
  ];

  const experts = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar Singh',
      category: 'extension-officers',
      region: 'punjab',
      designation: 'Senior Agricultural Extension Officer',
      organization: 'Punjab Agricultural University',
      location: 'Ludhiana, Punjab',
      experience: '15 years',
      specialization: ['Mustard & Rapeseed Production', 'Oilseed IPM', 'Soil Health'],
      rating: 4.9,
      consultations: 2450,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      contact: {
        phone: '+91-98765-43210',
        email: 'rajesh.singh@pau.edu',
        whatsapp: '+91-98765-43210'
      },
      languages: ['Hindi', 'Punjabi', 'English'],
      achievements: ['Best Extension Officer 2023', 'Krishi Vigyan Kendra Award'],
      availability: 'Mon-Fri, 9 AM - 5 PM',
      consultationFee: 'Free',
      verified: true,
      testimonial: `Dr. Singh's guidance on mustard variety selection and nutrient management helped me increase my oilseed yield by 38%. His practical approach combines scientific knowledge with field experience.`
    },
    {
      id: 2,
      name: 'Priya Sharma',category: 'successful-farmers',region: 'haryana',designation: 'Progressive Farmer & Mentor',organization: 'Haryana Farmers Association',location: 'Karnal, Haryana',experience: '12 years',
      specialization: ['Soybean Cultivation', 'Water Management', 'Organic Oilseed Farming'],
      rating: 4.8,
      consultations: 1850,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      contact: {
        phone: '+91-98123-45678',email: 'priya.sharma@gmail.com',whatsapp: '+91-98123-45678'
      },
      languages: ['Hindi', 'English'],
      achievements: ['State Best Farmer Award 2022', 'Organic Certification Pioneer'],
      availability: 'Weekends, 10 AM - 4 PM',consultationFee: '₹500/hour',
      verified: true,
      testimonial: `Priya's transition to organic farming methods not only improved my soil health but also increased my profit margins by 40%. Her mentorship is invaluable.`
    },
    {
      id: 3,
      name: 'Prof. Suresh Reddy',
      category: 'agricultural-scientists',
      region: 'karnataka',
      designation: 'Professor of Agronomy',
      organization: 'University of Agricultural Sciences',
      location: 'Bangalore, Karnataka',
      experience: '20 years',
      specialization: ['Crop Breeding', 'Climate Resilience', 'Precision Agriculture'],
      rating: 4.9,
      consultations: 3200,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      contact: {
        phone: '+91-98456-78901',
        email: 'suresh.reddy@uas.ac.in',
        whatsapp: '+91-98456-78901'
      },
      languages: ['English', 'Hindi', 'Kannada', 'Telugu'],
      achievements: ['ICAR Excellence Award', 'Published 150+ Research Papers'],
      availability: 'By Appointment',
      consultationFee: '₹1,500/hour',
      verified: true,
      testimonial: `Prof. Reddy's research-backed recommendations on climate-resilient varieties helped our region adapt to changing weather patterns effectively.`
    },
    {
      id: 4,
      name: 'Amit Patel',category: 'consultants',region: 'gujarat',designation: 'Agricultural Consultant',organization: 'Gujarat Agri Solutions',location: 'Ahmedabad, Gujarat',experience: '10 years',
      specialization: ['Groundnut Farming', 'Drip Irrigation', 'Oilseed Market Linkage'],
      rating: 4.7,
      consultations: 1650,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      contact: {
        phone: '+91-97234-56789',
        email: 'amit.patel@gujaratagri.com',
        whatsapp: '+91-97234-56789'
      },
      languages: ['Gujarati', 'Hindi', 'English'],
      achievements: ['Certified Crop Advisor', 'Best Consultant Award 2023'],
      availability: 'Mon-Sat, 8 AM - 6 PM',
      consultationFee: '₹800/hour',
      verified: true,
      testimonial: `Amit's expertise in groundnut cultivation and oil market connections helped me achieve premium cold-pressed oil prices for my produce. His holistic approach is commendable.`
    },
    {
      id: 5,
      name: 'Kavita Singh',
      category: 'input-dealers',
      region: 'uttar-pradesh',
      designation: 'Authorized Input Dealer',
      organization: 'Singh Agro Center',
      location: 'Meerut, Uttar Pradesh',
      experience: '8 years',
      specialization: ['Fertilizers', 'Seeds', 'Plant Protection'],
      rating: 4.6,
      consultations: 980,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      contact: {
        phone: '+91-96345-67890',
        email: 'kavita@singhagro.com',
        whatsapp: '+91-96345-67890'
      },
      languages: ['Hindi', 'English'],
      achievements: ['Certified Dealer', 'Customer Service Excellence'],
      availability: 'Daily, 9 AM - 7 PM',
      consultationFee: 'Free with purchase',
      verified: true,
      testimonial: `Kavita provides genuine products and excellent technical support. Her knowledge about input timing and application has improved my crop quality significantly.`
    },
    {
      id: 6,
      name: 'Dr. Lakshmi Narayanan',
      category: 'agricultural-scientists',
      region: 'karnataka',
      designation: 'Senior Scientist',
      organization: 'ICAR Research Institute',
      location: 'Mysore, Karnataka',
      experience: '18 years',
      specialization: ['Horticulture', 'Post-Harvest Technology', 'Value Addition'],
      rating: 4.8,
      consultations: 2100,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      contact: {
        phone: '+91-94567-89012',
        email: 'lakshmi.n@icar.gov.in',
        whatsapp: '+91-94567-89012'
      },
      languages: ['English', 'Hindi', 'Kannada', 'Tamil'],
      achievements: ['Technology Innovation Award', 'Farmer-Scientist Interface Champion'],
      availability: 'Tue-Thu, 2 PM - 6 PM',
      consultationFee: '₹1,200/hour',
      verified: true,
      testimonial: `Dr. Narayanan's guidance on post-harvest handling and value addition helped me establish a successful fruit processing unit with 300% profit increase.`
    }
  ];

  const filteredExperts = experts?.filter(expert => {
    const categoryMatch = selectedCategory === 'all' || expert?.category === selectedCategory;
    const regionMatch = selectedRegion === 'all' || expert?.region === selectedRegion;
    return categoryMatch && regionMatch;
  });

  const getRatingColor = (rating) => {
    if (rating >= 4.8) return 'text-green-600';
    if (rating >= 4.5) return 'text-blue-600';
    return 'text-yellow-600';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">Local Expert Network</h3>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Icon name="Shield" size={16} className="text-green-600" />
            <span>Verified Experts</span>
          </div>
        </div>

        {/* Filters */}
        <div className="space-y-4">
          {/* Category Filter */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Expert Category</label>
            <div className="flex flex-wrap gap-2">
              {expertCategories?.map((category) => (
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

          {/* Region Filter */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Region</label>
            <div className="flex flex-wrap gap-2">
              {regions?.map((region) => (
                <button
                  key={region?.id}
                  onClick={() => setSelectedRegion(region?.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedRegion === region?.id
                      ? 'bg-secondary text-white' :'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {region?.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredExperts?.map((expert) => (
            <div key={expert?.id} className="bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              {/* Header */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center space-x-3 mb-3">
                  <Image
                    src={expert?.avatar}
                    alt={expert?.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-bold text-gray-900">{expert?.name}</h4>
                      {expert?.verified && (
                        <Icon name="BadgeCheck" size={16} className="text-green-600" />
                      )}
                    </div>
                    <p className="text-sm font-medium text-primary">{expert?.designation}</p>
                    <p className="text-sm text-gray-600">{expert?.organization}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Icon name="MapPin" size={12} className="text-gray-400" />
                      <span className="text-xs text-gray-500">{expert?.location}</span>
                    </div>
                  </div>
                </div>

                {/* Rating and Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={16} className={`${getRatingColor(expert?.rating)} fill-current`} />
                      <span className={`text-sm font-medium ${getRatingColor(expert?.rating)}`}>
                        {expert?.rating}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {expert?.consultations?.toLocaleString()} consultations
                    </div>
                  </div>
                  <div className="text-sm font-medium text-green-600">
                    {expert?.consultationFee}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Specialization */}
                <div className="mb-4">
                  <h5 className="text-sm font-medium text-gray-700 mb-2">Specialization</h5>
                  <div className="flex flex-wrap gap-2">
                    {expert?.specialization?.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Experience and Languages */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-sm font-medium text-gray-700">Experience: </span>
                    <span className="text-sm text-gray-900">{expert?.experience}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">Languages: </span>
                    <span className="text-sm text-gray-900">{expert?.languages?.join(', ')}</span>
                  </div>
                </div>

                {/* Availability */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-1">
                    <Icon name="Clock" size={14} className="text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">Availability</span>
                  </div>
                  <span className="text-sm text-gray-900">{expert?.availability}</span>
                </div>

                {/* Testimonial */}
                <blockquote className="text-sm text-gray-700 italic mb-4 line-clamp-3 bg-gray-50 p-3 rounded-lg">
                  "{expert?.testimonial}"
                </blockquote>

                {/* Achievements */}
                <div className="mb-4">
                  <h5 className="text-sm font-medium text-gray-700 mb-2">Achievements</h5>
                  <div className="space-y-1">
                    {expert?.achievements?.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Award" size={12} className="text-yellow-600" />
                        <span className="text-xs text-gray-600">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Options */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <div className="flex space-x-2">
                    <button className="flex items-center space-x-1 px-3 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors">
                      <Icon name="MessageCircle" size={14} />
                      <span>WhatsApp</span>
                    </button>
                    <button className="flex items-center space-x-1 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
                      <Icon name="Phone" size={14} />
                      <span>Call</span>
                    </button>
                  </div>
                  <button className="flex items-center space-x-1 px-3 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary/90 transition-colors">
                    <Icon name="Calendar" size={14} />
                    <span>Book</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredExperts?.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Users" size={48} className="text-gray-300 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-gray-900 mb-2">No Experts Found</h4>
            <p className="text-gray-600">Try adjusting your filters to see more experts in your area.</p>
          </div>
        )}

        {/* Network Stats */}
        {filteredExperts?.length > 0 && (
          <div className="mt-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6 border border-primary/20">
            <h4 className="font-bold text-gray-900 mb-4">Expert Network Summary</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{filteredExperts?.length}</div>
                <div className="text-sm text-gray-600">Available Experts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {(filteredExperts?.reduce((acc, expert) => acc + expert?.rating, 0) / filteredExperts?.length)?.toFixed(1)}
                </div>
                <div className="text-sm text-gray-600">Avg Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">
                  {Math.round(filteredExperts?.reduce((acc, expert) => acc + expert?.consultations, 0) / 1000)}K
                </div>
                <div className="text-sm text-gray-600">Total Consultations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">
                  {filteredExperts?.filter(expert => expert?.verified)?.length}
                </div>
                <div className="text-sm text-gray-600">Verified Experts</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocalExpertNetwork;
