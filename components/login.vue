<template>
    <div class="c">
        <span v-if="isLogin">{{info}}</span>
        <button type="text" @click="changeState">change Info</button>
    </div>
</template>

<script>
import store from "@/store/index";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      info: "login"
    };
  },
  computed: {
    ...mapGetters({ isLogin: "login/getIsLogin" })
  },
  methods: {
    ...mapActions(["changeIsLogin"]),
    changeState() {
      this.$store.dispatch("login/changeIsLogin", !this.$store.state.login.isLogin);
    }
  }
};
</script>


<style lang="scss" scoped>
@import "~assets/css/global.scss";
$fontColor: red;
.c {
  color: $fontColor;
  @include komolei;
}
</style>

