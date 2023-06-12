<script>
import {private_key, public_key} from './marvel.js';
import axios from "axios";
var url =`https://gateway.marvel.com/v1/public/comics?ts=1&apikey=${public_key}&hash=f854b684a06440517ab7e53d3bb7cb6c`;
console.log(url)
export default {

  name: 'TheWelcome',
  mounted() {
    this.getCharacters()
  },
  methods:{
  getCharacters: function () {
    axios.get(url)
        .then((result) => {
          console.log(result)
        }).catch((error) =>
        console.log(error)
    )}
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
    <div><br>
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
    <div><br>
      <h1 class="slidertitle">characters</h1></div>
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
  </div>

</template>
