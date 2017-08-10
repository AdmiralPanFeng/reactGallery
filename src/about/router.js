/**
 * Created by able on 17-6-18.
 */
export const aboutRoute = {
    path:'/about',
    indexRoute:{onEnter:(state,replace)=>replace('/about/user')},
    childRoutes:[
        {
            path:'/about/user',
            getComponents(location, callback) {
                require.ensure([], function (require) {
                    callback(null, require('./user').default)
                },'/about/user')
            }
        },
    ]
}
