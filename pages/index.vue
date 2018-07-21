<template>
  <section class="container">
    <login/>
    <div class="c" @click="isShow=true">open dialog</div>
    <el-dialog title="" :visible.sync="isShow" width="30%" @close="isShow=false">

      <span slot="footer">
        <el-button @click="isShow = false">取 消</el-button>
      </span>
    </el-dialog>

  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
import login from "~/components/login.vue";

export default {
  components: {
    AppLogo,
    login
  },
  data() {
    return {
      isShow: false
    };
  },
  layout(context) {
    return "index";
  },
  // router(){
  //   middleware: "sayHello"
  // }
};
</script>

<style lang='scss' scoped>
@import "~assets/css/global.scss";
.c {
  @include komolei;
}
</style>

