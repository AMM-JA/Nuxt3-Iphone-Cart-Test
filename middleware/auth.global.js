export default defineNuxtRouteMiddleware((to,from)=>{
    const user = false;

    if(!user){
        return navigateTo('/');
    }
});