import React from "react";
import { useForm } from "react-hook-form";

interface DogFormValues {
  dogName: string;
  dogSize: "small" | "medium" | "large" | "giant";
}

export default function Exercise6() {
  const { register, handleSubmit } = useForm<DogFormValues>();
  return (
    <div>
      <input type="text" placeholder="Dog Name" {...register("dogName")} />
      <br />
      <br />

      <select
        id="cars"
        placeholder="Dog Size"
        defaultValue={""}
        {...register("dogSize")}
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

      <button onClick={handleSubmit((data) => console.log(data))}>send</button>
    </div>
  );
}
