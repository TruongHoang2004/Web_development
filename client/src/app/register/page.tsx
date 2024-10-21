'use client'
import Link from 'next/link';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/auth/register', formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }, withCredentials: true
            });
            alert('Registration successful!');
            router.push('/login');
        } catch (error) {
            console.error('Error registering:', error);
        }
    };

    return (
        <div className="flex justify-center items-center font-[sans-serif] h-full min-h-screen p-4"
             style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="max-w-md w-full mx-auto">
                <form className="bg-opacity-70 bg-white rounded-2xl p-6 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]" onSubmit={handleSubmit}>
                    <div className="mb-12">
                        <h3 className="text-gray-800 text-3xl font-extrabold">Register</h3>
                    </div>

                    <div>
                        <div className="relative flex items-center">
                            <input name="name" type="text" required
                                   className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                                   placeholder="Name" value={formData.name} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="mt-6">
                        <div className="relative flex items-center">
                            <input name="email" type="email" required
                                   className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                                   placeholder="Email" value={formData.email} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="mt-6">
                        <div className="relative flex items-center">
                            <input name="password" type="password" required
                                   className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                                   placeholder="Password" value={formData.password} onChange={handleChange} />
                        </div>
                    </div>

                    <Link href="/" className="flex items-center" style={{ transform: 'translate(-5px, 20px)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span className="ml-2">Quay lại trang chủ</span>
                    </Link>

                    <div className="mt-12">
                        <button type="submit"
                                className="w-full py-2.5 px-4 text-sm font-semibold tracking-wider rounded-full text-white bg-gray-800 hover:bg-[#222] focus:outline-none">
                            Register
                        </button>
                        <p className="text-gray-800 text-sm text-center mt-6">Already have an account?
                            <Link href="/login" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Sign in here</Link>
                        </p>
                    </div>

                    <hr className="my-6 border-gray-400" />
                </form>
            </div>
        </div>
    );
};

export default Register;