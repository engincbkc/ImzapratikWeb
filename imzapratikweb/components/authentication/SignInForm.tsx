"use client"
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter, useSearchParams } from "next/navigation";

interface FormData {
  email: string;
  password: string;
}

const SignInForm: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  console.log("process.env.NEXT_PUBLIC_API_URL",process.env.API_URL);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const resp:any = await fetch('api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          formData),
      });


      if (resp.ok) {
        // Başarılı giriş durumunu işleyebilirsiniz
        console.log('Giriş başarılı.');
        const nextUrl = searchParams.get("next");
      // @see: https://github.com/vercel/next.js/discussions/44149
      router.push(`${nextUrl}` ?? "/");
      router.refresh();
      } else {
        // Giriş başarısızsa hata mesajlarını işleyebilirsiniz
        alert("Login failed");
        console.error('Giriş başarısız.');
      }
    } catch (error) {
      console.error('Sunucu hatası:', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="e-mail"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
