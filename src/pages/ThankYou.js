import React from 'react';
import { Link } from 'react-router-dom';

function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-semibold mb-4">Thank You!</h1>
      <p className="text-lg mb-8">Your order has been successfully submitted.</p>
      <Link to="/"><button className="bg-brown text-white py-2 px-4 rounded-md hover:bg-slate-600 transition-colors duration-500">Return to Home</button></Link>
    </div>
  );
}

export default ThankYou;