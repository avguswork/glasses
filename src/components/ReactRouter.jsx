import * as React from "react";
import { useSearchParams } from "react-router-dom";

export default function ReactRouter() {
  let [searchParams, setSearchParams] = useSearchParams();

  function handleSubmit(event) {
    event.preventDefault();
    
    console.log(event.target.value)
    let params =  searchParams.get("filter") || "";
    setSearchParams({filter: event.target.value});
  }

  return (
    <div>
    <h1>Search</h1>
      <form >
        <input name="input" onChange={handleSubmit}/>
        <input />
      </form>
    </div>
  );
}

//onSubmit={handleSubmit}