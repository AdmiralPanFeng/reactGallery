/**
 * Created by able on 17-6-18.
 */
export const aboutsRoute = {
    path:'/abouts',
    indexRoute:{onEnter:(state,replace)=>replace('/abouts/user')},
    childRoutes:[
        {
            path:'/abouts/user',
            getComponents(location, callback) {
                require.ensure([], function (require) {
                    callback(null, require('./user').default)
                },'/abouts/user')
            }
        },
    ]
}
