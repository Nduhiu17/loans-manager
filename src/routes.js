import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() =>
    import ('./components/dashboard/Default'));
const MonthlyDashBoard = React.lazy(() =>
    import ('./components/dashboard/MonthlyDashBoard'));
const AllTimeDashBoard = React.lazy(() =>
    import ('./components/dashboard/AllTimeDashBoard'));
const DashboardAnalytics = React.lazy(() =>
    import ('./components/dashboard/CustomerAnalytics'));
const DashboardProject = React.lazy(() =>
    import ('./components/dashboard/MonthlyDashBoard'));
const UsersGroup = React.lazy(() =>
    import ('./components/user-management/user-groups/UserGroups'));
const Users = React.lazy(() =>
    import ('./components/user-management/users/Users'));

const Producers = React.lazy(() =>
    import ('./components/producer-management/Producers'));

const ProducerAdmins = React.lazy(() =>
    import ('./components/producer-management/ProducerAdmins'));



const routes = [
    //dashboard routes
    { path: '/dashboard/default', exact: true, name: 'Analytics', component: DashboardDefault },
    { path: '/dashboard/monthly', exact: true, name: 'Crypto', component: MonthlyDashBoard },
    { path: '/dashboard/all-time', exact: true, name: 'All Time', component: AllTimeDashBoard },
    { path: '/dashboard/analytics', exact: true, name: 'Analytics', component: DashboardAnalytics },
    { path: '/dashboard/customer-analytics', exact: true, name: 'CustomerAnalytics', component: DashboardProject },

    //user management routes
    {path: '/user-management/user-groups', exact: true, name: 'Users', component: UsersGroup },
    { path: '/user-management/users', exact: true, name: 'Users', component: Users },

    //producers management routes
    { path: '/producer-management/producers', exact: true, name: 'Producers', component: Producers },
    { path: '/producer-management/producer-admins', exact: true, name: 'Producer Admins', component: ProducerAdmins }
];

export default routes;