import "./App.css";
import loading from "./assets/loading.webp";
import { getJokes } from "./API/functions";
import { useState } from "react";

//HELP
//will struggle with the filtering functionality
//but i can handle it

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [joke, setJoke] = useState();
  const [setup, setSetup] = useState();
  const [amount, setamount] = useState(6);

  const getRandomJoke = async () => {
    const parameters = {
      amount: amount,
    };
    setIsLoading(true);
    const data = await getJokes(parameters);
    //check if joke is single or two part
    setJoke(data);
    console.log("data: " + data);
    setIsLoading(false);
  };
  return (
    <main className="bg-Isabelline">
      <section className="min-h-screen sm:mx-10 bg-Isabelline flex flex-col font-Josefin ">
        <h1 className="title font-BebasNeue text-4xl my-5 text-center">
          <span>R</span>
          <span>a</span>
          <span>n</span>
          <span>d</span>
          <span>o</span>
          <span>m</span>
          <span> </span>
          <span>J</span>
          <span>o</span>
          <span>k</span>
          <span>e</span>
          <span>s</span>
          <span> </span>
          <span>G</span>
          <span>e</span>
          <span>n</span>
          <span>e</span>
          <span>r</span>
          <span>a</span>
          <span>t</span>
          <span>o</span>
          <span>r</span>
        </h1>

        <div className="flex flex-col w-auto mx-auto text-center">
          <span className="m-3 text-xl">Number of jokes</span>
          {/* <input
            className="w-auto bg-inherit mx-auto text-center"
            defaultValue={6}
            type="number"
          /> */}
          <div className="text-2xl">{amount}</div>
          <input
            className="bg-white "
            type="range"
            min={1}
            max={10}
            value={amount}
            step={1}
            onChange={(value) => {
              setamount(value.target.value);
            }}
          />
          <button
            className=" bg-space_cadet p-1 text-white rounded-md w-1/2 mx-auto my-3"
            onClick={getRandomJoke}
          >
            Generate
          </button>
        </div>

        {isLoading ? (
          <div className="flex mx-auto">
            <img
              className="w-full justify-self-center"
              src={loading}
              alt="loading"
            />
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-8 my-3">
            {joke?.map((joke) => {
              if (joke.type === "single") {
                return (
                  <div className="bg-IsabellineDark text-space_cadet rounded-md p-3">
                    {joke.joke}
                  </div>
                );
              } else {
                return (
                  <div className="bg-IsabellineDark text-space_cadet rounded-md p-3">
                    <h2 className="mb-2">{joke.setup + "\n \n"}</h2>
                    <h3 className="text-yellow-900">{joke.delivery}</h3>
                  </div>
                );
              }
            })}
          </div>
        )}
      </section>
    </main>
  );
};

export default App;
