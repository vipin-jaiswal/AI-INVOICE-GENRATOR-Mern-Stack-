import React from 'react';

const DashboardLayout =({children})=> {
    return (
        <div>
            <h2>Dashboard Layout</h2>
            <div>{children}</div>
        </div>
    );
}
export default DashboardLayout;