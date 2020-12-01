<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs"/>
    <div v-for="blog in filteredBlogs" v-bind:key="blog.id" class="single-blog">
        <router-link v-bind:to="'/blog/' + blog.id"><h2 v-rainbow >{{blog.title | to-uppercase}}</h2></router-link>
        <article>{{blog.content | snippet}}</article>
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
      axios.get("https://vue---blog-website.firebaseio.com/posts.json").then(data =>{
        return data.data;
        //return data.json();
      }).then(data =>{
          var blogsArray=[];
          for(let key in data){
              data[key].id = key;
              blogsArray.push(data[key]);
          }
          this.blogs = blogsArray;
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
  mixins: [searchMixin]
}
</script>

<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
    border: 1px dotted #aaa;
}
#show-blogs a{
    color: #444;
    text-decoration: none;
}
input[type="text"]{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
}
</style>
