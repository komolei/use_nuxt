<script>
import store from '@/store/index'
import {mapGetters,mapActions} from 'vuex';
export default {
  data() {
    return {
      info: "login"
    };
  },
  computed:{
      ...mapGetters({isLogin:'getIsLogin'})
  },
  render(h) {
    return <div class="c">
    <button type="text" nativeclick="change">change Info</button>
    </div>;
  },
  methods:{
      ...mapActions(['changeIsLogin']),
      change(){
          $store.dispatch('changeIsLogin',true)
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

