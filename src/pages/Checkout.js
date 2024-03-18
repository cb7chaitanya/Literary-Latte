import React, {useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Checkout() {
  const location = useLocation();
  const total = location.state.total;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    // For demonstration purposes, let's navigate to a Thank You page after submission
    navigate('/ThankYou');
  };

  return (
    <div className='w-full h-screen' style={{backgroundImage: `url(${'https://i.pinimg.com/564x/20/eb/55/20eb557e5508f8a5b8a4c40d405d55d2.jpg'})`}}>
    <div className='text-brown overflow-hidden pt-12'>
    <div className='max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-md'>
        <h2 className='text-2xl font-semibold mb-4'>Payment Information</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
            <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} className='mt-1 p-2 border border-gray-300 rounded-md w-full' required />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
            <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} className='mt-1 p-2 border border-gray-300 rounded-md w-full' required />
          </div>
          <div className='mb-4'>
            <label htmlFor='cardNumber' className='block text-sm font-medium text-gray-700'>Card Number</label>
            <input type='text' id='cardNumber' name='cardNumber' value={formData.cardNumber} onChange={handleChange} className='mt-1 p-2 border border-gray-300 rounded-md w-full' required />
          </div>
          <div className='grid grid-cols-2 gap-4 mb-4'>
            <div>
              <label htmlFor='expiry' className='block text-sm font-medium text-gray-700'>Expiry</label>
              <input type='text' id='expiry' name='expiry' value={formData.expiry} onChange={handleChange} className='mt-1 p-2 border border-gray-300 rounded-md w-full' placeholder='MM/YY' required />
            </div>
            <div>
              <label htmlFor='cvv' className='block text-sm font-medium text-gray-700'>CVV</label>
              <input type='text' id='cvv' name='cvv' value={formData.cvv} onChange={handleChange} className='mt-1 p-2 border border-gray-300 rounded-md w-full' required />
            </div>
            <div className='mb-4'>
            <label htmlFor='total' className='block text-sm font-medium text-gray-700'>Total Amount</label>
            <input type='text' id='total' name='total' value={`Rs.${total}`} className='mt-1 p-2 border border-gray-300 rounded-md w-full bg-gray-200' readOnly />
          </div>
          </div>
          <button type='submit' className='bg-brown text-white py-2 px-4 rounded-md hover:bg-slate-700 transition-colors'>Submit Payment</button>
        </form>
      </div>
    </div>
  </div>
  );
}

export default Checkout;
