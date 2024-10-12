import React from 'react';
import { BarChart, DollarSign, TrendingUp } from 'lucide-react';

const DashboardPage: React.FC = () => {
  // Mock data for demonstration
  const recentTransactions = [
    { id: 1, description: 'Online Purchase', amount: 89.99, date: '2024-03-15' },
    { id: 2, description: 'Subscription Renewal', amount: 19.99, date: '2024-03-14' },
    { id: 3, description: 'Service Fee', amount: 5.00, date: '2024-03-13' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Total Revenue</h3>
            <DollarSign className="h-8 w-8 text-green-500" />
          </div>
          <p className="text-3xl font-bold mt-2">$12,345.67</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Transactions</h3>
            <BarChart className="h-8 w-8 text-blue-500" />
          </div>
          <p className="text-3xl font-bold mt-2">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Growth</h3>
            <TrendingUp className="h-8 w-8 text-purple-500" />
          </div>
          <p className="text-3xl font-bold mt-2">+15.7%</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <h3 className="text-xl font-semibold p-4 border-b">Recent Transactions</h3>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {recentTransactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${transaction.amount.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;