import { Helmet } from 'react-helmet-async';

import { LoginView } from 'src/sections/login';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Login | 8 bit Wizards </title>
      </Helmet>

      <LoginView />
    </>
  );
}
