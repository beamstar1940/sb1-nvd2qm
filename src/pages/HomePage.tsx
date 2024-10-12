import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, BarChart } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to IntelliPay</h1>
      <p className="text-xl mb-8">AI-powered payment processing for smarter transactions</p>
      <div className="flex justify-center space-x-4">
        <Link to="/payment" className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center">
          <CreditCard className="mr-2" />
          Make a Payment
        </Link>
        <Link to="/dashboard" className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center">
          <BarChart className="mr-2" />
          View Dashboard
        </Link>
      </div>
    </div>
  );
};

export default HomePage;