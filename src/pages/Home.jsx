import React from "react";
import DocumentTitle from "../components/DocumentTitle/DocumentTitle";

export default function Home() {
  return (
    <div>
      <DocumentTitle>Home</DocumentTitle>
      <h1>Welcome to Phonebook</h1>
      <p>
        Manage your contacts easily and conveniently. Add new contacts, edit
        information and find the numbers you need quickly. We care about your
        communication!
      </p>
    </div>
  );
}
