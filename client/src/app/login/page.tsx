'use client'
import Link from 'next/link';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import {login} from '../../redux/slices/userSlice';


const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const router = useRouter();
    const dispatch = useDispatch();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/auth/login', formData, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const { token, user } = response.data;
            dispatch(login({ token, user }));
            alert('Login successful!');
            await router.push('/');
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className="flex justify-center items-center font-[sans-serif] h-full min-h-screen p-4"
             style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="max-w-md w-full mx-auto">
                <form className="bg-opacity-70 bg-white rounded-2xl p-6 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]" onSubmit={handleSubmit}>
                    <div className="mb-12">
                        <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
                    </div>

                    <div>
                        <div className="relative flex items-center">
                            <input name="email" type="email" required
                                   className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                                   placeholder="Enter email" value={formData.email} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="mt-6">
                        <div className="relative flex items-center">
                            <input name="password" type="password" required
                                   className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                                   placeholder="Enter password" value={formData.password} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 border-gray-300 rounded" />
                            <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                                Remember me
                            </label>
                        </div>
                        <div>
                            <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">
                                Forgot Password?
                            </a>
                        </div>
                    </div>

                    <div className="mt-12">
                        <button type="submit"
                                className="w-full py-2.5 px-4 text-sm font-semibold tracking-wider rounded-full text-white bg-gray-800 hover:bg-[#222] focus:outline-none">
                            Sign in
                        </button>
                        <p className="text-gray-800 text-sm text-center mt-6">Don't have an account?
                            <Link href="/register" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Register here</Link>
                        </p>
                    </div>

                    <hr className="my-6 border-gray-400" />
                </form>
            </div>
        </div>
    );
};

export default Login;