
const legendDiv = document.querySelector("#legend-div")
const legendDescriptionContainer = document.querySelector("#legend-description-container")

const pokeTeamsDiv = document.querySelector("#poketeams-div")
const poketeamsDescriptionContainer = document.querySelector("#poketeams-description-container")

const wordleDiv = document.querySelector("#wordle-div")
const wordleDescriptionContainer = document.querySelector("#wordle-description-container")

const yappinDiv = document.querySelector("#yappin-div")
const yappinDescriptionContainer = document.querySelector("#yappin-description-container")

yappinDiv.addEventListener("mouseenter", () => {
    yappinDescriptionContainer.style.opacity = 1
})

yappinDiv.addEventListener("mouseleave", () => {
    yappinDescriptionContainer.style.opacity = 0
})

wordleDiv.addEventListener("mouseenter", () => {
    wordleDescriptionContainer.style.opacity = 1
})

wordleDiv.addEventListener("mouseleave", () => {
    wordleDescriptionContainer.style.opacity = 0
})

pokeTeamsDiv.addEventListener("mouseenter", () => {
    poketeamsDescriptionContainer.style.opacity = 1
})

pokeTeamsDiv.addEventListener("mouseleave", () => {
    poketeamsDescriptionContainer.style.opacity = 0
})

legendDiv.addEventListener("mouseenter", () => {
    legendDescriptionContainer.style.opacity = 1;
})

legendDiv.addEventListener("mouseleave", () => {
    legendDescriptionContainer.style.opacity = 0;
})