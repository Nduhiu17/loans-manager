import React from 'react';

const LoginPage = React.lazy(() =>
import('./App/auth/compontents/login/LoginPage'));

const ResetPassword = React.lazy(() =>
import('./App/auth/compontents/reset-password/ResetPasswordPage'));

const route = [
         //auth routes
         { path: '/auth/login', exact: true, name: 'Login', component: LoginPage },
         { path: '/auth/reset-password', exact: true, name: 'Reset Password', component: ResetPassword }
];


export default route;