import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../components/common/Button';
import Input from '../../../components/common/Input';
import Card from '../../../components/common/Card';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'student',
    rememberMe: false
  });

  const [errors, setErrors] = useState({});

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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Store user role and mock auth state
      localStorage.setItem('userRole', formData.role);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', formData.email);
      // Navigate to appropriate dashboard
      navigate(`/${formData.role}/dashboard`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full sm:max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <img
            src="/AWKUM_logo.png"
            alt="AWKUM Logo"
            className="mx-auto w-24 h-24 mb-4"
          />
          <h1 className="text-2xl font-merriweather font-bold text-[#5D0018] mb-2">
            Welcome Back
          </h1>
          <p className="text-[#4A4A4A]">
            Login to access your AWKUM LMS account
          </p>
        </div>

        {/* Login Form */}
        <Card variant="white" className="shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
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

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 text-[#166335] border-gray-300 rounded focus:ring-[#166335]"
                />
                <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <Link to="/forgot-password" className="text-sm text-[#166335] hover:text-[#0E4020]">
                Forgot password?
              </Link>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                  Login as
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

              <Button type="submit" variant="primary" fullWidth>
                Login
              </Button>
            </div>
          </form>
        </Card>

        {/* Registration Link */}
        <p className="mt-8 text-center text-sm">
          Don't have an account?{' '}
          <Link to="/register" className="text-[#166335] hover:text-[#0E4020] font-medium">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
