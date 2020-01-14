<template>
    <div v-if="!item.hidden" >

        <template v-if="hasOnlyChild(item.children,item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren)" >
            <el-menu-item :index="resolvePath(onlyOneChild.path)" >
                <item :icon="onlyOneChild.meta.icon" :title="onlyOneChild.meta.title" ></item>
            </el-menu-item>
        </template>

        <!-------有多个子节点----->
        <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body >
            <template slot="title" >
                <item v-if="item.meta" :icon="item.meta.icon" :title="item.meta.title"  ></item>
            </template>
            <sidebar-item v-for="child in item.children" :key="child.path" :item="child" :base-path="resolvePath(child.path)" >
            </sidebar-item>
        </el-submenu>
    </div>
</template>

<script>

import Item from './Item'
import { isExternal } from '@/utils/validate'
import path from 'path'
export default {
    name:'SidebarItem',
    components:{Item },
    props:{
        item:{
            type:Object,
            required:true
        },
        basePath:{
            type:String,
            default:''
        }
    },
    data(){
        this.onlyOneChild=null
        return {
           
        }
    },
    methods:{
        //是否只有一个子路由
        hasOnlyChild(children = [],parent){
            const showChildren = children.filter(item => {
                if(item.hidden){
                    return false
                }else{
                    this.onlyOneChild = item
                    return true
                }
            })

            if(showChildren.length === 0){
                this.onlyOneChild = {...parent,path:'',noShowingChildren: true}
                return true
            }
            if(showChildren.length === 1){
                return true
            }

            return false
            
        },
      resolvePath(routePath){
          if(isExternal(routePath)){
              return routePath;
          }
          if(isExternal(this.basePath)){
              return this.basePath
          }
        return path.resolve(this.basePath,routePath)
      }
    }
}
</script>

<style>

</style>