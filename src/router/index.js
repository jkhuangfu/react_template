import React from 'react';
import Loadable from 'react-loadable';
const Loading = () => {
    return (
        <div>
            loading
      </div>
    )
}
const com1 = Loadable({
    loader: () => import(/* webpackChunkName: "com1" */ '@/components/com1'),
    loading: Loading
})

const com2 = Loadable({
    loader: () => import(/* webpackChunkName: "com2" */ '@/components/com2'),
    loading: Loading
})
const routers = [
    {
        path: '/',
        exact: true,
        render: com1
    },
    {
        path: '/t',
        exact: true,
        render: com2
    }
]
export default routers;

