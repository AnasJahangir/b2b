import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./assets/Cadastro.css";
import RegistrationForm from "../components/Form";
function Cadastro() {
  return (
    <div className="Cadastro">
      <Header />
      <RegistrationForm />
      <Footer />
    </div>
  );
}

export default Cadastro;
