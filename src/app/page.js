import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50 text-gray-800 font-sans">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Design Thinking Bot</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Welcome to your AI-powered companion for the Design Thinking process.
        Collaborate, Ideate, and Innovate.
      </p>

      <div className="flex gap-4">
        <Link
          href="/login"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition font-semibold"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
