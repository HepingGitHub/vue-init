import { commonality,asyncRoutes } from '@/router'

function hasPermission(route,roles){
    if(route.meta && route.meta.roles){
        return roles.some(role => route.meta,roles.includes(role))
    }
    else{
        return true
    }
}

export function filterAsyncRoutes(routes,roles){
    const res = []

    routes.filter(route => {
        const moment = {...route}
        
        if(hasPermission(moment,roles)){
            if(moment.children){
                moment.children = filterAsyncRoutes(moment.children,roles)
            }
            res.push(moment)
        }
    })

    return res;
}

const state = {
    routes:[],
    momentRoutes:[]
}

const mutations = {
    SET_ROUTES:(state,routes)=>{
        state.momentRoutes = routes
        state.routes = commonality.concat(routes)
        console.log(state.routes)
    }
}

const actions = {
    generateRoutes({commit},roles){

        return new Promise((resolve,reject) => {
            let accessedRoutes
            if(roles.includes('admin')){
                accessedRoutes = asyncRoutes || []
            }else {
                accessedRoutes = filterAsyncRoutes(asyncRoutes,roles)
            }

            commit('SET_ROUTES',accessedRoutes)
            resolve(accessedRoutes)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
