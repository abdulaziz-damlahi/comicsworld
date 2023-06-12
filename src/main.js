import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";
createApp(App).mount('#app')

window.onload = () => {
    var posterSlide = document.querySelector('.poster-slide')
    var posterSlideImgs = document.querySelectorAll('.poster-slide img')

    posterSlideImgs.forEach(img => {
        img.addEventListener('mouseout', () => posterSlide.className = "poster-slide")
    })
    posterSlideImgs.forEach(img => {
        img.addEventListener('mouseover', () => posterSlide.className = "poster-slide hovered")
    })
}
window.onload = () => {
    var posterSlide2 = document.querySelector('.poster-slide2')
    var posterSlideImgs2 = document.querySelectorAll('.poster-slide2 img')

    posterSlideImgs2.forEach(img => {
        img.addEventListener('mouseout', () => posterSlide2.className = "poster-slide2")
    })
    posterSlideImgs2.forEach(img => {
        img.addEventListener('mouseover', () => posterSlide2.className = "poster-slide2 hovered2")
    })
}

