import React from "react";
import * as C from "./styles";
import { FaTrash } from "react-icons/fa";

const CardGrid = ({ contact, onDelete }) => {

  const phoneNumber = contact.phone;

  const ddd = phoneNumber.slice(0, 2);
  const part1 = phoneNumber.slice(2, 7);
  const part2 = phoneNumber.slice(7, 11);

  const formattedNumber = `(${ddd}) ${part1}-${part2}`;

  return (
    <C.Tr>
      <C.Td>{contact.name}</C.Td>
      <C.Td>{contact.email}</C.Td>
      <C.Td>{formattedNumber}</C.Td>
      <C.Td>
        <FaTrash onClick={() => onDelete(contact.id)} />
      </C.Td>
    </C.Tr>
  );
};

export default CardGrid;
