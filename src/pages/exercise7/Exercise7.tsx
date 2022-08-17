import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface DogFormValues {
  dogName: string;
  dogSize: "small" | "medium" | "large" | "giant";
}

export default function Exercise7() {
  const schema = yup
    .object({
      dogName: yup.string().required().min(3),
      dogSize: yup.string().oneOf(["small", "medium", "large", "giant"]),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DogFormValues>({
    resolver: yupResolver(schema),
  });
  return (
    <div>
      <input type="text" placeholder="Dog Name" {...register("dogName")} />
      <p style={{ color: "red" }}>{(errors as any)?.dogName?.message || ""}</p>
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
      <p style={{ color: "red" }}>{(errors as any)?.dogSize?.message || ""}</p>

      <br />
      <br />

      <button onClick={handleSubmit((data) => console.log(data))}>send</button>
    </div>
  );
}
