"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import * as api from '../../../utils/api'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TasksLayout({ children, }: { children: React.ReactNode }) {

    const router = useRouter();
    const [formData, setFormData] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onShowpwd = (e: any) => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const res = await api.postData('http://localhost:3000/users/signup', formData);
        console.log(res);

        if(res.error != null){
            toast.error(res.error);
            return;
        }

        router.push('/user/signin');
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <ToastContainer/>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://res-1.cdn.office.net/todo/982104_2.95.3/touch-icon-180x180.png" alt="logo" />
                    ToDo
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign up to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User name</label>
                                <input type="text" name="username" id="username" onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required={true} />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type={showPassword ? 'text' : 'password'} name="password" id="password" onChange={handleInputChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                                <div className="flex items-center mt-2">
                                    <input type='checkbox' id="showpwd" onChange={onShowpwd}/>
                                    <label htmlFor="showpwd" className="block ml-1 text-sm font-medium text-gray-900 dark:text-white">{showPassword ? 'Hide' : 'Show'} Password</label>
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Sign up
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <a href="/user/signin" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</a>
                            </p>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}
