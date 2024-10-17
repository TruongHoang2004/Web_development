'use client'
import Link from 'next/link';

const Login = () => {
  return (
    <div className="flex justify-center items-center font-[sans-serif] h-full min-h-screen p-4"
      style={{ backgroundImage: 'url(/qminhancut.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className="max-w-md w-full mx-auto">
        <form className="bg-opacity-70 bg-white rounded-2xl p-6 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]">
          <div className="mb-12">
            <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
          </div>

          <div>
            <div className="relative flex items-center">
              <input name="email" type="text" required
                className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                placeholder="Enter email" />
            </div>
          </div>

          <div className="mt-6">
            <div className="relative flex items-center">
              <input name="password" type="password" required
                className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                placeholder="Enter password" />
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
              <a href="javascript:void(0);" className="text-blue-600 text-sm font-semibold hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>

          <Link href="/" className="flex items-center" style={{ transform: 'translate(-5px, 20px)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span className="ml-2">Quay lại trang chủ</span>
          </Link>

          <div className="mt-12">
            <button type="button"
              className="w-full py-2.5 px-4 text-sm font-semibold tracking-wider rounded-full text-white bg-gray-800 hover:bg-[#222] focus:outline-none">
              Sign-in
            </button>
            <p className="text-gray-800 text-sm text-center mt-6">Don't have an account
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