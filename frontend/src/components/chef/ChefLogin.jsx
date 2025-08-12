import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import axios from 'axios';
import toast from 'react-hot-toast';

const ChefLogin = () => {
  const { isChef, setIsChef, navigate } = useAppContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Only for register
  const [mode, setMode] = useState('login'); // 'login' or 'register'
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    setLoading(true);
    try {
      let response;

      if (mode === 'login') {
        response = await axios.post('/api/chef/login', { email, password });
      } else {
        response = await axios.post('/api/chef/register', { name, email, password });
      }

      const data = response.data;

      if (data.success) {
        toast.success('Success!');
        setIsChef(true); // this will trigger redirect
      } else {
        toast.error(data.message || 'Something went wrong');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Request failed');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isChef) {
      navigate('/chef'); // redirect to chef dashboard
    }
  }, [isChef, navigate]);

  return !isChef && (
    <form onSubmit={onSubmitHandler} className="min-h-screen flex items-center text-sm text-gray-600">
      <div className="flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200">
        <p className="text-2xl font-medium m-auto">
          <span className="text-primary">Chef</span> {mode === 'login' ? 'Login' : 'Register'}
        </p>

        {mode === 'register' && (
          <div className="w-full">
            <p>Name</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
              required
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter your email"
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
            required
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Enter your password"
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
            required
          />
        </div>

        <button
          disabled={loading}
          className={`bg-primary text-white w-full py-2 rounded-md cursor-pointer ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          type="submit"
        >
          {loading ? 'Please wait...' : mode === 'login' ? 'Login' : 'Register'}
        </button>

        <p className="text-center w-full mt-2 cursor-pointer">
          {mode === 'login' ? (
            <>
              Become a <span className="text-primary font-semibold">Chef</span>?{' '}
              <span
                onClick={() => setMode('register')}
                className="text-primary font-medium cursor-pointer"
              >
                Click here to register
              </span>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <span
                onClick={() => setMode('login')}
                className="text-primary font-medium cursor-pointer"
              >
                Login here
              </span>
            </>
          )}
        </p>
        <p
          onClick={() => navigate('/')}
          className="text-center w-full mt-1 text-primary-dull hover:text-primary cursor-pointer"
        >
          ← Back to Home
        </p>
      </div>
    </form>
  );
};

export default ChefLogin;
