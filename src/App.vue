<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>
<script>
import addBlog from "./components/addBlog.vue";
import showBlogs from "./components/showBlogs";
import listBlogs from "./components/listBlogs";
import header from "./components/header.vue";
export default {
  components:{
         "add-blog": addBlog,
         "show-blogs": showBlogs,
         "list-blogs": listBlogs,
         "app-header": header
  },

  data () {
    return {
       
    }
  },
  methods: {

  } 
}
</script>

<style scoped>
body{
  margin:0;
}
</style>
