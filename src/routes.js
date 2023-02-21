import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const UserDetail = React.lazy(() => import('./views/userDetail'))
const routes = [
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/user', name: 'UserDetail', element: UserDetail },
]

export default routes
