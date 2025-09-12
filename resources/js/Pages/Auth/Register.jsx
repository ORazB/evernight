import { Head, Link, useForm } from '@inertiajs/react';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <div className="h-screen grid grid-cols-2 bg-white">
            {/* Left Side - Image */}
            <div className="flex flex-col bg-[#FAFAFA] w-[65%] relative rounded-xl m-5 p-5 overflow-visible">
                <img src="./images/Logo.png" alt="logo-left" className="w-[120px] mb-6" />

                <div className="flex flex-col justify-center h-full relative">
                    <img src="./images/register.png" alt="register-img" className="absolute right-[-93px] top-1/2 -translate-y-1/2 max-h-[90%] w-auto object-cover scale-150" />
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex flex-col justify-center px-16 relative">
                <div className="absolute top-6 right-6">
                    
                    <Link href={route('login')} className="text-sm text-[#919493]">
                        Have an account already? <span className="font-bold text-black">Log in</span>
                    </Link>
                </div>

                <p className="text-7xl font-semibold mb-6 text-black tracking-wide">Sign Up</p>

                <button className="flex items-center justify-center border rounded-lg w-[55%] py-4 mb-6">
                    <FcGoogle className="mr-2" size={20} /> <span className='text-black font-extrabold'>Sign up with Google</span>
                </button>

                <form onSubmit={submit} className="space-y-4">
                    <div className="flex items-center border rounded-lg px-3 w-[55%] bg-[#F5F5F5]">
                        <AiOutlineMail className="text-gray-500" />
                        <input
                            type="email"
                            placeholder="Email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="w-full px-3 py-2 outline-none border-none bg-[#F5F5F5] text-black"
                            required
                        />
                    </div>
                    <div className="flex items-center border rounded-lg px-3 w-[55%] bg-[#F5F5F5]">
                        <AiOutlineLock className="text-gray-500" />
                        <input
                            type="password"
                            placeholder="Password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="w-full px-3 py-2 outline-none border-none bg-[#F5F5F5] text-black"
                            required
                        />
                    </div>
                    <div className="flex items-center border rounded-lg px-3 w-[55%] bg-[#F5F5F5]">
                        <AiOutlineLock className="text-gray-500" />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            className="w-full px-3 py-2 outline-none border-none bg-[#F5F5F5] text-black"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="bg-[#E6C558] text-white font-semibold py-2 rounded-lg hover:bg-yellow-500 w-[55%]"
                    >
                        Create account
                    </button>
                </form>

                <div className="mt-4 text-sm text-[#C0C0C0]">
                    Forgot Password?{" "}
                    <Link href="#" className="font-bold text-black">
                        Click here
                    </Link>
                </div>
            </div>
        </div>
    );
}
