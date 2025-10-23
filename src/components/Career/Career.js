"use client";
import { useState, useMemo } from 'react';
import { Search, MapPin, Clock, DollarSign, Users, Filter, Briefcase, Star, X, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [newSkill, setNewSkill] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    skills: [],
    bio: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $160k',
      experience: '5+ years',
      description: 'We are looking for a skilled Frontend Developer to join our dynamic team and help build amazing user experiences.',
      requirements: ['React.js expertise', 'TypeScript', 'Modern CSS', 'API integration'],
      posted: '2 days ago',
      featured: true
    },
    {
      id: 2,
      title: 'Product Manager',
      department: 'Product',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$140k - $180k',
      experience: '3+ years',
      description: 'Lead product strategy and work cross-functionally to deliver exceptional products to our users.',
      requirements: ['Product strategy', 'User research', 'Agile methodologies', 'Data analysis'],
      posted: '1 week ago',
      featured: false
    },
    {
      id: 3,
      title: 'UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      salary: '$90k - $120k',
      experience: '3+ years',
      description: 'Create intuitive and beautiful user experiences that delight our customers.',
      requirements: ['Figma proficiency', 'User research', 'Prototyping', 'Design systems'],
      posted: '3 days ago',
      featured: true
    },
    {
      id: 4,
      title: 'Backend Engineer',
      department: 'Engineering',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$110k - $150k',
      experience: '4+ years',
      description: 'Build scalable backend systems and APIs that power our platform.',
      requirements: ['Node.js/Python', 'Database design', 'Cloud platforms', 'Microservices'],
      posted: '5 days ago',
      featured: false
    },
    {
      id: 5,
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      salary: '$70k - $90k',
      experience: '2+ years',
      description: 'Drive growth through innovative marketing campaigns and strategies.',
      requirements: ['Digital marketing', 'Content creation', 'Analytics', 'Social media'],
      posted: '1 week ago',
      featured: false
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Seattle, WA',
      type: 'Contract',
      salary: '$130k - $170k',
      experience: '4+ years',
      description: 'Maintain and optimize our infrastructure and deployment pipelines.',
      requirements: ['AWS/Azure', 'Docker/Kubernetes', 'CI/CD', 'Infrastructure as Code'],
      posted: '4 days ago',
      featured: true
    },
    {
      id: 7,
      title: 'Data Scientist',
      department: 'Data',
      location: 'Boston, MA',
      type: 'Full-time',
      salary: '$120k - $160k',
      experience: '3+ years',
      description: 'Extract insights from data to drive business decisions and product improvements.',
      requirements: ['Python/R', 'Machine Learning', 'SQL', 'Data visualization'],
      posted: '6 days ago',
      featured: false
    },
    {
      id: 8,
      title: 'Sales Manager',
      department: 'Sales',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$100k - $140k + Commission',
      experience: '5+ years',
      description: 'Lead our sales team and drive revenue growth through strategic partnerships.',
      requirements: ['B2B sales', 'Team leadership', 'CRM systems', 'Relationship building'],
      posted: '1 week ago',
      featured: false
    }
  ];

  const departments = [...new Set(jobs.map(job => job.department))];
  const locations = [...new Set(jobs.map(job => job.location))];
  const types = [...new Set(jobs.map(job => job.type))];

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
      const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
      const matchesType = selectedType === 'all' || job.type === selectedType;

      return matchesSearch && matchesDepartment && matchesLocation && matchesType;
    });
  }, [searchTerm, selectedDepartment, selectedLocation, selectedType]);

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowForm(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addSkill = () => {
    if (newSkill.trim()) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill('');
    }
  };

  const removeSkill = (index) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application submitted:', { job: selectedJob?.title, ...formData });
    setSubmitted(true);
    setTimeout(() => {
      setShowForm(false);
      setSubmitted(false);
      setFormData({ fullName: '', email: '', phone: '', skills: [], bio: '' });
      setSelectedJob(null);
    }, 2000);
  };

  const closeForm = () => {
    setShowForm(false);
    setFormData({ fullName: '', email: '', phone: '', skills: [], bio: '' });
    setSelectedJob(null);
  };

  const JobCard = ({ job }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-lg shadow-md border ${job.featured ? 'border-green-200' : 'border-gray-200'} p-6 hover:shadow-lg transition-shadow`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
            <Briefcase className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-black">{job.title}</h3>
            <p className="text-gray-600 text-sm">{job.department}</p>
          </div>
        </div>
        {job.featured && (
          <div className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
            <Star className="w-4 h-4" />
            Featured
          </div>
        )}
      </div>

      <p className="text-gray-600 text-sm mb-4">{job.description}</p>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <MapPin className="w-4 h-4 text-green-500 flex-shrink-0" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <Clock className="w-4 h-4 text-green-500 flex-shrink-0" />
          <span>{job.type}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <DollarSign className="w-4 h-4 text-green-500 flex-shrink-0" />
          <span className="font-medium">{job.salary}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <Users className="w-4 h-4 text-green-500 flex-shrink-0" />
          <span>{job.experience}</span>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-xs font-semibold text-black mb-2">Requirements:</h4>
        <div className="flex flex-wrap gap-2">
          {job.requirements.slice(0, 3).map((req, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              {req}
            </span>
          ))}
          {job.requirements.length > 3 && (
            <span className="text-gray-500 text-xs">+{job.requirements.length - 3}</span>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500">{job.posted}</span>
        <button 
          onClick={() => handleApply(job)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors text-sm"
        >
          Apply Now
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-green-500 text-white py-20">
        <div className="mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Join Our Amazing Team</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {`We're looking for talented individuals to help us build the future. Discover exciting career opportunities and grow with us.`}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3">
              <div className="text-2xl font-bold">{jobs.length}+</div>
              <div className="text-sm">Open Positions</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3">
              <div className="text-2xl font-bold">{departments.length}</div>
              <div className="text-sm">Departments</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3">
              <div className="text-2xl font-bold">{locations.length}</div>
              <div className="text-sm">Locations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8 border border-gray-200">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs, departments, or keywords..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <select
              className="py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              <option value="all">All Departments</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>

            <select
              className="py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="all">All Locations</option>
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="text-gray-600 text-sm">
                Showing {filteredJobs.length} of {jobs.length} positions
              </span>
            </div>
            <select
              className="py-2 px-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="all">All Types</option>
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Job Listings */}
        {filteredJobs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">No jobs found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or filters</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">{`Don't See the Right Position?`}</h2>
          <p className="text-xl mb-8 text-gray-300">
           {` We're always looking for exceptional talent. Send us your resume and we'll keep you in mind for future opportunities.`}
          </p>
          <button 
            onClick={() => {
              setSelectedJob(null);
              setShowForm(true);
            }}
            className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors"
          >
            Send General Application
          </button>
        </div>
      </div>

      {/* Application Form Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={closeForm}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {!submitted ? (
                <>
                  <div className="sticky top-0 bg-green-500 text-white p-6 flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-bold">Apply Now</h2>
                      {selectedJob && <p className="text-green-100 text-sm mt-1">{selectedJob.title}</p>}
                    </div>
                    <button
                      onClick={closeForm}
                      className="p-1 hover:bg-green-600 rounded-lg transition"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <div className="p-6 space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleFormChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none text-sm"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none text-sm"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none text-sm"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    {/* Skills */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Skills
                      </label>
                      <div className="flex gap-2 mb-2">
                        <input
                          type="text"
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none text-sm"
                          placeholder="Add a skill"
                        />
                        <button
                          type="button"
                          onClick={addSkill}
                          className="px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition flex items-center gap-1"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {formData.skills.map((skill, index) => (
                          <motion.div
                            key={index}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {skill}
                            <button
                              type="button"
                              onClick={() => removeSkill(index)}
                              className="hover:text-green-900"
                            >
                              <X size={14} />
                            </button>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Bio */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        About You
                      </label>
                      <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleFormChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none text-sm"
                        rows="3"
                        placeholder="Tell us about yourself..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      onClick={handleSubmit}
                      className="w-full px-4 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition text-sm"
                    >
                      Submit Application
                    </button>
                  </div>
                </>
              ) : (
                <div className="p-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <span className="text-3xl text-green-500">✓</span>
                  </motion.div>
                  <h3 className="text-xl font-bold text-black mb-2">Success!</h3>
                  <p className="text-gray-600">Your application has been submitted successfully.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}