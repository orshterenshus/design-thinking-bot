
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setIsLoading(true);

        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();
            
            if (res.ok) {
                setSuccess('Login successful!');
                localStorage.setItem('currentUser', JSON.stringify(data.user));

                setTimeout(() => {
                    router.push('/project-management');
                }, 800);
                // Keep loading true while redirecting for smoother experience
            } else {
                setError(data.error || 'Invalid credentials');
                setIsLoading(false);
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
            setIsLoading(false);
        }
    };

    return (
        <div className="font-sans bg-gray-100 flex items-center justify-center h-screen m-0 text-gray-800">
            <div className="bg-white p-5 rounded-lg shadow-lg w-72">
                <h1 className="font-bold text-4xl mb-5 text-gray-800">Login</h1>
                <form onSubmit={handleSubmit} className="text-left justify-center">
                    <label htmlFor="username">Username:</label>
                    <input
                        className="w-full p-2.5 my-2.5 border border-gray-300 rounded-md box-border text-gray-800"
                        type="text"
                        id="username"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input
                        className="w-full p-2.5 my-2.5 border border-gray-300 rounded-md box-border text-gray-800"
                        type="password"
                        id="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 flex justify-center items-center ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Logging in...
                            </>
                        ) : (
                            'Login'
                        )}
                    </button>
                    <Link
                        href="/register"
                        className="block text-center w-full p-3 mt-4 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                    >
                        Register
                    </Link>
                    <a
                        href="#"
                        className="block text-right mt-4 text-blue-500 hover:underline"
                        onClick={() => alert('Forgot password functionality to be implemented.')}
                    >
                        Forgot Password?
                    </a>
                </form>
                {error && <div className="mt-2 text-red-500 text-center text-sm">{error}</div>}
                {success && <div className="mt-2 text-green-500 text-center text-sm">{success}</div>}
            </div>
        </div>
    );
}
