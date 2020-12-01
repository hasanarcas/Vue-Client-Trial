<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
        <label>Blog Title:</label>
        <input type="text" v-model.lazy="blog.title" required />
        <label>Blog Content:</label>
        <textarea v-model.lazy="blog.content"></textarea>
        <div id="checkboxes">
            <label>Ninjas</label>
            <input type="checkbox" value="ninjas" v-model="blog.categories"/>
            <label>Wizards</label>
            <input type="checkbox" value="wizards" v-model="blog.categories"/>
            <label>Mario</label>
            <input type="checkbox" value="mario" v-model="blog.categories"/>
            <label>Kekos</label>
            <input type="checkbox" value="kekos" v-model="blog.categories"/>
        </div>
        <label>Author</label>
        <select v-model="blog.author">
            <option v-for="author in authors" v-bind:key="author.id">{{author}}</option>
        </select>
        <button v-on:click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
        <h3>Thanks for adding your post</h3>
    </div>
    <div id="preview">
        <h3>Preview Blog</h3>
        <p>Blog title:{{blog.title}}</p>
        <p>Blog content:</p>
        <p>{{blog.content}}</p>
        <p>Author: {{blog.author}}</p>
        <p>Blog Categories:</p>
        <ul>
            <li v-for="category in blog.categories" v-bind:key="category.id">{{category}}</li>
        </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  
  data () {
    return {
       blog:{
           title:"",
           content:"",
           author:"",
           categories:[]
           
       },
       authors:["Hasan Arcas","Abdulrahman","Abdulcabbar"],
       submitted:false
    }
  },
  methods: {
      post:function(){
            const axios = require("axios");

            axios.post("https://vue---blog-website.firebaseio.com/posts.json",this.blog
          ).then(data =>{
              console.log(data);
              this.submitted = true;
          });
      }
  } 
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline;
}
</style>