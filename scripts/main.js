import { Dashboard } from "./Dashboard.js"
const eventHub = document.querySelector(".container")
/*
    1. Sort scores by date
    2. Display scores in YY/MM/DD format
*/
document.querySelector("#container").innerHTML = Dashboard()

