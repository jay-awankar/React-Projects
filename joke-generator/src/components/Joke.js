import React, { useState } from "react";
import Button from "./Button";

const Joke = () => {
  const [joke, setJoke] = useState("");

  const fetchApi = () => {
    fetch("https:sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((res) => res.json())
      .then((data) => setJoke(data.joke));
  };

  // const jokeResult = fetch("https://api.api-ninjas.com/v1/jokes", {
  //   method: "GET",
  //   url: "https://api.api-ninjas.com/v1/jokes",
  //   headers: { "X-Api-Key": "SKfMLMRDjCUMKCuEF/qO3w==CEaH8pKSjv0YOqth" },
  //   contentType: "application/json",
  //   success: function (result) {
  //     console.log(result);
  //   },
  //   error: function ajaxError(jqXHR) {
  //     console.error("Error: ", jqXHR.responseText);
  //   },
  // })
  //   .then((res) => res.json())
  //   .then((data) => setJoke(data.joke));
  // console.log(jokeResult);

  return (
    <div>
      <Button callApi={fetchApi} />
      <h2>{joke}</h2>
    </div>
  );
};

export default Joke;
