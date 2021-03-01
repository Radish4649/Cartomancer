<template>
        <Loader />
</template>

<script>
/* ===============
    this page needs to:
    (✔) 1. get the request from the AWS lambda function
    (✔) 2. get a random orientation for each card
    (　) 3. preload the images for each card
    (✔) 4. send the user to the next page
=============== */
import Loader from "../_common/Loader.vue"
import axios from "axios";

export default {
    name: "ReadingRedirectApp",
    components: {Loader},
    mounted() {
        axios
        .get("https://zjitlfcb27.execute-api.us-east-2.amazonaws.com/default/getTarotCards")
        .then( response => {
            var time = ["Past", "Present", "Future"]

            for (let i = 0; i < response.data.length; i++) {
                response.data[i].orientation = Math.round(Math.random())
                response.data[i].time = time[i]
            }

            localStorage.setItem("drawn", JSON.stringify(response.data))
            console.log("cards successfully drawn")
            window.location.replace("../reading/index.html")
        })
        .catch( response => {
            console.log("ERROR")
            console.log(response.message)
            window.location.replace("./")
        })
    }
}
//https://zjitlfcb27.execute-api.us-east-2.amazonaws.com/default/getTarotCards
</script>