<template>
  <div style="height: 100%">
    <el-menu
      :default-active="activeMenu"
      :collapse="isCollapsed"
      background-color="#222"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
      router
      style="height: 100%;text-align:left"
    >
      <sidebar-item
        v-for="route in permission_route"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      ></sidebar-item>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarItem from "./SidebarItem";

export default {
  data() {
    return {
      isCollapsed: false
    };
  },
  components: { SidebarItem },
  computed: {
    ...mapGetters(["permission_route"]),
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    isCollapse() {
      return !this.sidebar.opened;
    }
  }
};
</script>