"use strict"

console.log("Hello, world!")

const colorBox = document.querySelector(".block")
const btn = document.querySelector(".btn")

btn.addEventListener("click", () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    const color = `rgb(${r},${g},${b})`

    colorBox.style.backgroundColor = color;
})