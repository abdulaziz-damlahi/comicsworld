<script>
import {private_key, public_key} from './marvel.js';
import axios from "axios";

var url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${public_key}&hash=f854b684a06440517ab7e53d3bb7cb6c`;

export default {
  name: 'TheWelcome',
  data(){
  return {
    char: [],
  }
},
mounted()
{
  this.getCharacters()
}
,
methods:{
  getCharacters: function () {
    const response = axios.get(url)
        .then((result) => {
          result.data.data.results.forEach((item)=>{
            this.char.push(item)
          })
          const jsonObj = JSON.stringify(result.data.data.results);
          console.log(jsonObj)
        }).catch((error) =>
            console.log(error)
        )
  }
}
}

</script>

<template>
  <div class="outer">

    <div><br>
      <h1 class="slidertitle">latest</h1></div>
    <div class="poster-slide">
      <img src="https://i.ibb.co/BrQ9tdN/fireworks-poster.png">
      <img src="https://i.ibb.co/tbNVqxz/free-poster.png">
      <img src="https://i.ibb.co/XZP6RCQ/yourname-poster.png">
      <img src="https://i.ibb.co/61ftHNR/asilentvoice-poster.png">
      <img src="https://i.ibb.co/h8rkB6h/cityhunter-poster.png">
      <img src="https://i.ibb.co/WVjqddg/cornerworld-poster.png">
    </div>
    <div>
      <h1 class="slidertitle">most popular</h1></div>
    <div class="poster-slide2">
      <img
          src="https://i.ibb.co/BrQ9tdN/fireworks-poster.png">
      <img
          src="https://i.ibb.co/tbNVqxz/free-poster.png">
      <img
          src="https://i.ibb.co/XZP6RCQ/yourname-poster.png">
      <img
          src="https://i.ibb.co/61ftHNR/asilentvoice-poster.png">
      <img
          src="https://i.ibb.co/h8rkB6h/cityhunter-poster.png">
      <img
          src="https://i.ibb.co/WVjqddg/cornerworld-poster.png">
    </div>
    <div>
      <h1 class="slidertitle">characters</h1></div>
    <div class="poster-slide2">

        <img v-for="block in char" v-bind:src="block.thumbnail.path + '.jpg'">
      {{block.thumbnail.path }}
    </div>
  </div>

</template>
