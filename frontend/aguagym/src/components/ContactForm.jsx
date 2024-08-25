// src/components/ContactForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    cedula: '',
    phone: '',
    address1: '',
    address2: '',
    state: '',
    city: '',
    postalCode: '',
    membership: 'Basic Plan',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/reservations', formData);
      alert('Formulario enviado con éxito.');
      console.log(response.data);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <section id="contact" className="py-16 bg-[#EF792B] text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-8">Formulario de Contacto</h2>
        <p className= "text-41x1 font-bold text-center text-white mb-8" >Adquiriere una membresía ahora mismo</p>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Nombres</label>
              <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Apellidos</label>
              <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
            </div>
            <div>
              <label htmlFor="cedula" className="block text-sm font-medium text-gray-700">Cédula</label>
              <input type="text" id="cedula" name="cedula" value={formData.cedula} onChange={handleChange} required className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Número de Teléfono</label>
              <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
            </div>
            <div>
              <label htmlFor="address1" className="block text-sm font-medium text-gray-700">Dirección 1</label>
              <input type="text" id="address1" name="address1" value={formData.address1} onChange={handleChange} required className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="address2" className="block text-sm font-medium text-gray-700">Dirección 2</label>
              <input type="text" id="address2" name="address2" value={formData.address2} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">Estado</label>
              <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} required className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">Ciudad</label>
              <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
            </div>
            <div>
              <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Código Postal</label>
              <input type="text" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} required className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="membership" className="block text-sm font-medium text-gray-700">Membresía</label>
            <select id="membership" name="membership" value={formData.membership} onChange={handleChange} required className="mt-1 p-2 w-full border border-gray-300 rounded-md">
              <option value="Basic Plan">Basic Plan</option>
              <option value="Premium Plan">Premium Plan</option>
              <option value="Elite Plan">Elite Plan</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required className="mt-1 p-2 w-full border border-gray-300 rounded-md"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 w-full">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
