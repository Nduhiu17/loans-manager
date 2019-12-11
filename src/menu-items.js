export default {
    items: [
        {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'group',
        icon: 'icon-navigation',
        children: [{
                id: 'dashboard',
                title: 'Dashboard',
                type: 'collapse',
                icon: 'feather icon-home',
                children: [{
                        id: 'default',
                        title: 'Weekly dashboard',
                        type: 'item',
                        url: '/dashboard/default'
                    },
                    {
                        id: 'monthly',
                        title: 'Monthly dashboard',
                        type: 'item',
                        url: '/dashboard/monthly',
                        badge: {
                            title: 'NEW',
                            type: 'badge-danger'
                        }
                    },
                    {
                        id: 'all-time',
                        title: 'All time dashboard',
                        type: 'item',
                        url: '/dashboard/all-time'
                    },
                    {
                        id: 'project',
                        title: 'Customer Analytics',
                        type: 'item',
                        url: '/dashboard/customer-analytics'
                    }
                ]
            },
            {
                id: 'user-management',
                title: 'User Management',
                type: 'collapse',
                icon: 'feather icon-users',
                children: [{
                        id: 'default',
                        title: 'User Groups',
                        type: 'item',
                        url: '/user-management/user-groups'
                    },
                    {
                        id: 'default',
                        title: 'Users',
                        type: 'item',
                        url: '/user-management/users'
                    }

                ]
            },
            {
                id: 'producers-management',
                title: 'Producers Management',
                type: 'collapse',
                icon: 'feather icon-package',
                children: [{
                        id: 'default',
                        title: 'Producers',
                        type: 'item',
                        url: '/producer-management/producers'
                    },
                    {
                        id: 'default',
                        title: 'Producer Admin',
                        type: 'item',
                        url: '/producer-management/producer-admins'
                    }

                ]
            }

        ]
    }
]
}