import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import * as C from "./styles";

import Grid from "../Grid";
import Input from "../Input";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./validator";

const Form = ({ handleAdd, contactsList, setContactsList }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleRegister = (data) => {
    const contact = {
      id: uuidv4(),
      ...data,
    };

    handleAdd(contact);
    reset();
  };

  return (
    <>
      <C.Container onSubmit={handleSubmit(handleRegister)}>
        <Input
          type="name"
          id="name"
          label="Nome"
          placeholder="Digite um nome"
          error={errors.name?.message}
          {...register("name")}
        />
        <Input
          type="email"
          id="email"
          label="Email"
          placeholder="ex: teste@mail.com"
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          type="tel"
          id="phone"
          label="Telefone"
          placeholder="ex: 11999999999"
          error={errors.phone?.message}
          {...register("phone")}
        />
        <C.Button type="submit">SALVAR</C.Button>
      </C.Container>
      <Grid contactsList={contactsList} setContactsList={setContactsList} />
    </>
  );
};

export default Form;
