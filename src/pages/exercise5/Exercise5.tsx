import React, { useState } from "react";

export default function Exercise5() {
  const [dogName, setDogName] = useState<string>("");
  const [dogSize, setDogSize] = useState<string>("small");

  return (
    <div>
      <input
        type="text"
        placeholder="Dog Name"
        onChange={(event) => setDogName(event.target.value)}
      />
      <br />
      <br />

      <select
        id="cars"
        placeholder="Dog Size"
        defaultValue={""}
        onChange={(event) => setDogSize(event.target?.value || "")}
      >
        <option value="" disabled hidden>
          Choose here
        </option>
        <option value="small">small</option>
        <option value="medium">medium</option>
        <option value="large">large</option>
        <option value="giant">giant</option>
      </select>
      <br />
      <br />

      <button onClick={() => console.log({ dogSize, dogName })}> send </button>
    </div>
  );
}
