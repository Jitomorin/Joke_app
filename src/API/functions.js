const getJokes = async(parameters) => {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any', {
        
        params: parameters
    });
    const data = await response.json();
    console.log(data)
    return data
}

export {getJokes}