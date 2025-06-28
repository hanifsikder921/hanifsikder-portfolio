import React from 'react';
import { Outlet } from 'react-router';

const AuthencationLayout = () => {
    return (
        <div>
            Authencation Layout
            <Outlet></Outlet>
        </div>
    );
};

export default AuthencationLayout;