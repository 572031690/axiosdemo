<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import APIUrl from '@/axios/api.url'
// import { post, get } from '@/axios/index'
export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {
      mjhurl: ""
    };
  },
  mounted() {
    // this.getAxios();
    console.log(this.$serapi, "serapiserapi");

    // console.log(this.$sendapi("mjh/home/showModuleList"), "serapiserapi");
    this.$sendapi("mjh/home/showModuleList", {
      params: {
        username: "马家辉",
        password: 12354
      }
    }).then(res => {
      console.log('发送传过来',res);
    })
  },
  methods: {
    getAxios() {
      var appopenid = "appopenidheader";
      window.sessionStorage.setItem("mytoken", appopenid); // 存入token
      console.log(window.sessionStorage.getItem("mytoken")); // 查看存入的token
      this.mjhurl = this.$api.util.mjhURL;
      // console.log(get(this.mjhurl, {}))
      this.$get(this.mjhurl, {
        params: {
          username: "马家辉",
          password: 12354
        }
      }).then(res => {
        console.log(res, "=============");
      });
    }
  }
};
</script>
