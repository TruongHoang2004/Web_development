'use client'
import React from "react";
import { Lobster } from 'next/font/google'
import { Kanit } from 'next/font/google'
import { Separator } from "@/components/ui/separator"
import styles from '../styles/header.module.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/slices/userSlice";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect } from "react";

const lobster = Lobster({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
});
const kanit = Kanit({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
})

const Header: React.FC = () => {
    const user = useSelector((state) => state.user.user);
    const token = useSelector((state) => state.user.token);
    /*
    useEffect(() => {
        if(user) {
          console.log('User information:', user)
          console.log('Token:', token);
        } else {
          console.log("Haven't logged in yet !")
        }
    }, [user, token])
    */

    const dispatch = useDispatch();
    const router = useRouter();
    const handleLogout = async () => {
        try {
            const response = await axios.post('http://localhost:5000/auth/logout', {}, {withCredentials: true})
            console.log(response.data.message);
            dispatch(logout());
            alert('Logout successful!');
            router.refresh();
          } catch (error) {
            console.error('Logout failed', error);
          }
          
       
    }

    return (
        <header className="border-b border-slate-300 text-green-950 py-4">
            <div className="w-10/12 m-auto flex items-center justify-between">
                <h1 className={`${lobster.className} text-5xl mr-9 text-emerald-900`} id="header_name">DreamLabour</h1>
                <div className={`${kanit.className} text-lg  font-normal flex h-5 items-center space-x-4`}>
                    {user && token ? (
                    <>
                        <a href="" className="no-underline">Services</a>
                        <Separator orientation="vertical" className="bg-zinc-950 w-px" />
                        <a href="" className="no-underline rounded-xl border border-lime-500 py-1 px-3 font-medium">Register as a Tasker</a>
                        <Separator orientation="vertical" className="bg-zinc-950 w-px" />
                        <p onClick={handleLogout} className="no-underline cursor-pointer">Logout</p>
                        <Separator orientation="vertical" className="bg-zinc-950 w-px" />
                        <a href="/profile" className="font-bold text-emerald-600">{user.name}</a> 
                    </>
                    ) : (
                    <>
                        <a href="" className="no-underline">Services</a>
                        <Separator orientation="vertical" className="bg-zinc-950 w-px" />
                        <a href="/register" className="no-underline">Sign-up</a>
                        <Separator orientation="vertical" className="bg-zinc-950 w-px" />
                        <a href="/login" className="no-underline">Login</a>
                        <Separator orientation="vertical" className="bg-zinc-950 w-px" />
                        <a href="" className="no-underline rounded-xl border border-lime-500 py-1 px-3 font-medium">Register as a Tasker</a>
                    </>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header;
