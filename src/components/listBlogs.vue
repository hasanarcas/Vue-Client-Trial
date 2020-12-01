<!--<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>List Blog Titles</h1>
    <input type="text" v-model="search" placeholder="search blogs"/>
    <div v-for="blog in filteredBlogs" v-bind:key="blog.id" class="single-blog">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
    </div> 
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin";

export default {

  data () {
    return {
       blogs:[],
       search: ""
    }
  },
  methods: {

  },
  created(){
      const axios = require("axios");
      axios.get("https://jsonplaceholder.typicode.com/posts").then(data =>{
          this.blogs = data.data.slice(0,10);
      })
  },
  
  computed:{
      
  },
  filters:{
      "to-uppercase":function(value){  //localy
          return value.toUpperCase();
      }
  },
  directives:{
     "rainbow":{
         bind(el,binding,vnode){   //localy
             el.style.color = "#" + Math.random().toString().slice(2,8);
         }
     } 
  },
  mixins:[searchMixin]
}
</script>

<style scoped>
#show-blogs{
    max-width: 800px;
    margin:0 auto;
}
.single-blog{
    padding:20px;
    margin:20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
