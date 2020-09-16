import {publishers} from "./constans/publishers.js";
import {displayMessage} from "./components/displayMessage.js";
import createPublisher  from "./components/createHtml.js";
import {simulateError, limit} from "./constans/setting.js";






const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "";

try {
    if (simulateError) {
        throw "Bad things happened";
    }

    for (let i = 0; i < publishers.length; i++) {
        // exit loop
        if (limit && i === limit) {
            break;
        }

        resultsContainer.innerHTML += createPublisher(publishers[i]);
    }
} catch (error) {
    console.log(error);
    resultsContainer.innerHTML = displayMessage("error", error);
}

