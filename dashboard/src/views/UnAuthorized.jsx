import React from 'react';

const UnAuthorized = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white font-sans">
      <div className="text-center animate-fade-in">
        <h1 className="text-9xl font-extrabold mb-6">401</h1>
        <p className="text-2xl mb-4">Unauthorized Access</p>
        <p className="text-lg mb-6">You do not have permission to view this page.</p>
        <div>
          <a
            href="/"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Go Home
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default UnAuthorized;

