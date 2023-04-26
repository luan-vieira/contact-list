import React from "react";
import CardGrid from "../CardGrid";
import * as C from "./styles";

const Grid = ({ contactsList, setContactsList }) => {
  const onDelete = (ID) => {
    const newArray = contactsList.filter((contact) => contact.id !== ID);
    setContactsList(newArray);
    localStorage.setItem("contacts", JSON.stringify(newArray));
  };

  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th width={40}>Nome</C.Th>
          <C.Th width={40}>E-mail</C.Th>
          <C.Th width={40}>Telefone</C.Th>
          <C.Th width={10}></C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {contactsList?.map((contact, index) => (
          <CardGrid key={index} contact={contact} onDelete={onDelete} />
        ))}
      </C.Tbody>
    </C.Table>
  );
};

export default Grid;
