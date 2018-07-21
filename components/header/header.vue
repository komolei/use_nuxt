<template>
    <el-menu mode="horizontal" :default-active="defaultIndex">
        <el-submenu v-for="(item, index) in menus" :index="index.toString()" :unique-opened='true'  :key="index" > 
              <nuxt-link :to="item.url">  {{item.title}}</nuxt-link>
        </el-submenu>
    </el-menu>

</template>

<script>
export default {
    // :router='true' :route="item.url"
  name: "headernav",
  data() {
    return {
      defaultIndex: "0",
      menus: [{ title: "index",url:'/index' }, { title: "error" ,url:'/error'}]
    };
  }
};
</script>

