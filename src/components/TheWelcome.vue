<script>
import {private_key, public_key} from './marvel.js';
import axios from "axios";

var url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${public_key}&hash=f854b684a06440517ab7e53d3bb7cb6c`;
var url2 = `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=${public_key}&hash=f854b684a06440517ab7e53d3bb7cb6c`;
var url3 = `https://gateway.marvel.com/v1/public/events?ts=1&apikey=${public_key}&hash=f854b684a06440517ab7e53d3bb7cb6c`;

export default {
  name: 'TheWelcome',
  data() {
    return {
      char: [],
      mag: [],
      event: [],
    }
  },
  mounted() {
    this.getCharacters()
  },
  methods: {
    getCharacters: function () {
      //const response = axios.get(url)
      axios.all([
        axios.get(url, {
          myVar: 'myValue'
        }), axios.get(url2, {
          myVar: 'myValue'
        }),
        axios.get(url3, {
          myVar: 'myValue'
        })
      ]).then(axios.spread((data1, data2, data3) => {
        data1.data.data.results.forEach((item1) => {
          this.char.push(item1)
        })
        data2.data.data.results.forEach((item2) => {
          this.mag.push(item2)
        })
        data3.data.data.results.forEach((item3) => {
          this.event.push(item3)
        })
      }))
    }
  }
}

</script>

<template>
  <div class="outer">
    <div><br>
      <h1 class="slidertitle">events</h1></div>
    <div class="poster-slide2 scrollmenu">
      <img v-for="block in event" v-bind:src="block.thumbnail.path + '.jpg'">
    </div>
    <div><br>
      <h1 class="slidertitle ">magazines</h1></div>
    <div class="poster-slide scrollmenu">
      <img v-for="block in mag" v-bind:src="block.thumbnail.path + '.jpg'">
      <div class=""></div>
    </div>
    <div><br>
      <h1 class="slidertitle">characters</h1></div>
    <div class="poster-slide2 scrollmenu">
      <img v-for="block in char" v-bind:src="block.thumbnail.path + '.jpg'">
    </div>
  </div>
</template>
