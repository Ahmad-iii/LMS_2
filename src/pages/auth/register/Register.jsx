import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../components/common/Button';
import Input from '../../../components/common/Input';
import Card from '../../../components/common/Card';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    studentId: '',
    department: '',
    role: 'student',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState({});

  const departments = [
    'Computer Science',
    'Management Sciences',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biotechnology',
    'Islamic Studies',
    'English',
    'Urdu'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!formData.email.endsWith('@awkum.edu.pk')) {
      newErrors.email = 'Please use your AWKUM email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    // Confirm Password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Student/Employee ID validation
    if (!formData.studentId) {
      newErrors.studentId = 'Student/Employee ID is required';
    }

    // Department validation
    if (!formData.department) {
      newErrors.department = 'Please select your department';
    }

    // Terms agreement validation
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Store user role and other details for demonstration
      localStorage.setItem('registeredRole', formData.role);
      localStorage.setItem('registeredEmail', formData.email);
      // Navigate to login
      navigate('/login', { 
        state: { 
          message: 'Registration successful! Please login with your credentials.'
        }
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full sm:max-w-lg">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <img
            src="/AWKUM_logo.png"
            alt="AWKUM Logo"
            className="mx-auto w-24 h-24 mb-4"
          />
          <h1 className="text-2xl font-merriweather font-bold text-[#5D0018] mb-2">
            Create Your Account
          </h1>
          <p className="text-[#4A4A4A]">
            Join AWKUM LMS to start your learning journey
          </p>
        </div>

        {/* Registration Form */}
        <Card variant="white" className="shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Full Name"
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              error={errors.fullName}
              required
            />

            <Input
              label="Email"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@awkum.edu.pk"
              error={errors.email}
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Password"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                error={errors.password}
                required
              />

              <Input
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                error={errors.confirmPassword}
                required
              />
            </div>

            <Input
              label="Student/Employee ID"
              type="text"
              id="studentId"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              placeholder="Enter your ID number"
              error={errors.studentId}
              required
            />

            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                Department
              </label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D0018] focus:border-transparent ${
                  errors.department ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              >
                <option value="">Select your department</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
              {errors.department && (
                <p className="mt-1 text-sm text-red-500">{errors.department}</p>
              )}
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                Register as
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D0018] focus:border-transparent"
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="h-4 w-4 text-[#166335] border-gray-300 rounded focus:ring-[#166335]"
              />
              <label htmlFor="agreeToTerms" className="ml-2 text-sm text-gray-700">
                I agree to the{' '}
                <Link to="/terms" className="text-[#5D0018] hover:text-[#3D0010]">
                  terms and conditions
                </Link>
              </label>
            </div>
            {errors.agreeToTerms && (
              <p className="text-sm text-red-500">{errors.agreeToTerms}</p>
            )}

            <Button type="submit" variant="primary" fullWidth>
              Register
            </Button>
          </form>
        </Card>

        {/* Login Link */}
        <p className="mt-8 text-center text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-[#166335] hover:text-[#0E4020] font-medium">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
