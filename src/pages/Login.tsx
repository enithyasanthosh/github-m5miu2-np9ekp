import React, { useState } from 'react';
import { Apple, Chrome } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');

  return (
    <div className="flex-1 flex items-center justify-center bg-[#1A1D21] p-8">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Welcome to Asianxt News Pro
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Sign in or sign up to continue
        </p>

        <div className="space-y-4">
          <button className="w-full bg-white text-black rounded-lg py-3 px-4 flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
            <Chrome size={20} />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}
