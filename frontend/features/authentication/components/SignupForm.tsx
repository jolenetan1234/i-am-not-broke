import React from 'react';
import FloatingComponent from '@/layouts/FloatingComponent';
import Form from './Form';

const SignupForm = ({ handleSignupClose }: { handleSignupClose: () => void }) => {
  return (
    <FloatingComponent>
      <Form handleSignupClose={handleSignupClose} isSignup />
    </FloatingComponent>
  )
}

export default SignupForm