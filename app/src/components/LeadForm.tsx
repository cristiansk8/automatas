// app/components/LeadForm.tsx

'use client';

import { useState } from 'react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    country: '',
    email: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
        console.log("🔧 Endpoint /api/dolibarr llamado");
      const res = await fetch('/api/dolibarr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMessage('Gracias, nos pondremos en contacto pronto.');
        setFormData({ name: '', phone: '', country: '', email: '' });
      } else {
        setMessage('Hubo un error al enviar el formulario.');
      }
    } catch (err) {
      setMessage('Error de conexión con el servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-yellow-400 text-black p-8 rounded-2xl shadow-lg max-w-xl mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-6 text-center">Agenda tu cita</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Nombre completo"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600"
        />
        <div className="flex space-x-2">
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-1/3 p-3 rounded-lg border border-gray-300"
          >
            <option value="">País</option>
            <option value="CO">🇨🇴 +57</option>
            <option value="MX">🇲🇽 +52</option>
            <option value="AR">🇦🇷 +54</option>
            <option value="PE">🇵🇪 +51</option>
          </select>
          <input
            name="phone"
            placeholder="Teléfono"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-2/3 p-3 rounded-lg border border-gray-300"
          />
        </div>
        <input
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          type="email"
          required
          className="w-full p-3 rounded-lg border border-gray-300"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-yellow-400 py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
        >
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
        {message && <p className="text-sm text-center mt-2">{message}</p>}
      </form>
    </div>
  );
}
