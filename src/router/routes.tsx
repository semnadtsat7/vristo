import { lazy } from 'react';
const Index = lazy(() => import('../pages/Index'));
const LoginBoxed = lazy(() => import("../pages/Authentication/LoginBoxed"));
const SystemAnnouncement = lazy(() => import('../pages/Components/SystemAnnouncement'));
const SchoolAnnouncement = lazy(() => import('../pages/Components/SchoolAnnouncement'));

const routes = [
    // dashboard
    {
        path: '/home',
        element: <Index />,
        layout: 'default',
    },
    {
        path: '/',
        element: <LoginBoxed />,
        layout: 'blank',
    },    
    {
        path: '/components/system-announcement',
        element: <SystemAnnouncement />,
    },
    {
        path: '/components/school-announcement',
        element: <SchoolAnnouncement />,
    },

];

export { routes };
