// AccessDeniedPage.tsx

import React from 'react';
import Link from 'next/link';

const AccessDeniedPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Access Denied</h1>
      <p className="text-lg mb-4">You do not have permission to access this page.</p>
      <Link className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg" href="/">
          Go to Home
      </Link>
    </div>
  );
};

export default AccessDeniedPage;
