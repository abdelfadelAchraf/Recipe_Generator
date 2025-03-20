import React from 'react';

type Props = {};

const Pricing = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-6">
      <h1 className="text-5xl font-bold text-red-400 mb-6 uppercase">Pricing Plans</h1>
      <p className="text-lg text-red-400 mb-4 text-center max-w-md">
        Unlock the power of AI-generated recipes with our flexible plans.
      </p>
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Free Plan */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center hover:bg-red-50 hover:-translate-y-2.5 transition-all duration-300 ">
          <h2 className="text-2xl font-bold text-red-400">Free</h2>
          <p className="text-gray-700 mt-2">Perfect for casual users</p>
          <span className="text-3xl font-bold text-yellow-500 mt-4">$0/mo</span>
          <ul className="mt-4 text-gray-600 text-left">
            <li>✔ 10 AI-generated recipes/month</li>
            <li>✔ Basic ingredient customization</li>
            <li>✔ Community support</li>
          </ul>
          <button className="mt-4 bg-red-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-500 transition">
            Get Started
          </button>
        </div>

        {/* Pro Plan - Highlighted */}
        <div className="bg-white p-8 rounded-lg shadow-2xl flex flex-col items-center border-4 border-red-400 scale-105 hover:bg-red-50 hover:-translate-y-2.5 transition-all duration-300 ">
          <h2 className="text-3xl font-bold text-red-400">Pro</h2>
          <p className="text-gray-700 mt-2">For home chefs & food lovers</p>
          <span className="text-4xl font-bold text-yellow-500 mt-4">$14.99/mo</span>
          <ul className="mt-4 text-gray-600 text-left">
            <li>✔ 100 AI-generated recipes/month</li>
            <li>✔ Advanced ingredient customization</li>
            <li>✔ Save & organize favorite recipes</li>
            <li>✔ Priority support</li>
          </ul>
          <button className="mt-4 bg-red-400 text-white font-bold py-2 px-5 rounded-lg hover:bg-red-500 transition">
            Get Started
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center hover:bg-red-50 hover:-translate-y-2.5 transition-all duration-300 ">
          <h2 className="text-2xl font-bold text-red-400">Ultimate</h2>
          <p className="text-gray-700 mt-2">For food bloggers & professionals</p>
          <span className="text-3xl font-bold text-yellow-500 mt-4">$29.99/mo</span>
          <ul className="mt-4 text-gray-600 text-left">
            <li>✔ Unlimited AI-generated recipes</li>
            <li>✔ Personalized diet recommendations</li>
            <li>✔ Early access to new features</li>
            <li>✔ 24/7 Priority Support</li>
          </ul>
          <button className="mt-4 bg-red-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-500 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
