<template>
       <div class="app-wrapper" >
           <div class="drawer-bg" >
                <sidebar-menu class="sidebar-container" ></sidebar-menu>

                <div class="main-container">
                        <app-main></app-main>
                </div>
           </div>
       </div>
</template>

<script>
import { AppMain,SidebarMenu } from './components'
export default {
    name:'Layout',
    components:{
        AppMain,
        SidebarMenu
    },
    mounted(){
        this.$store.dispatch('permission/generateRoutes',['admin'])
    }
    
}
</script>
<style lang="scss" scoped >
 .main-container {
    min-height: 100%;
    transition: margin-left .28s;
    margin-left: 210px;
    position: relative;
  }
  .app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .drawer-bg {
    background: #000;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
  .sidebar-container {
    transition: width 0.28s;
    width: 210px;
    height: 100%;
    position: fixed;
    font-size: 0px;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
  }
</style>