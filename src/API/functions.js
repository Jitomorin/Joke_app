import axios from "axios";

const getJokes = async(parameters) => {
    const response = await axios('https://v2.jokeapi.dev/joke/Any', {
        
        params: {
            amount: parameters.amount,
        }
    });

    const data=response.data
    console.log(data)
    return data.jokes
}

export {getJokes}