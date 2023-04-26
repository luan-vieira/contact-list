import React, { useEffect, useState } from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Form from "./components/Form";
import aData from "./database";

const App = () => {
  const [contactsList, setContactsList] = useState(() => {
    const data = localStorage.getItem("contacts");
    if (JSON.parse(data) === null) {
      return aData;
    }

    if (JSON.parse(data).length === 0) {
      return aData;
    }

    return JSON.parse(data);
  });

  const handleAdd = (contact) => {
    const newArraysetContacts = [...contactsList, contact];

    setContactsList(newArraysetContacts);

    localStorage.setItem("contacts", JSON.stringify(newArraysetContacts));
  };

  return (
    <>
      <Header />
      <Form
        handleAdd={handleAdd}
        contactsList={contactsList}
        setContactsList={setContactsList}
      />
      <GlobalStyle />
    </>
  );
};

export default App;
