'use client';

import { SignUp } from '@clerk/clerk-react';

const SignUpPage = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
