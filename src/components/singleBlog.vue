<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
        <p>Author : {{blog.author}}</p>
        <ul>
            <li v-for="category in blog.categories" v-bind:key="category.id">{{category}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id: this.$route.params.id,
            blog:{}
        }
    },
    created(){
        const axios = require("axios");
      axios.get("https://vue---blog-website.firebaseio.com/posts/"+ this.id + ".json").then(data =>{
          return data.data;
          
      }).then(data =>{
          this.blog = data;
      });
          
      }
}
</script>
<style>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border: 1px dotted #aaa;
}
</style>