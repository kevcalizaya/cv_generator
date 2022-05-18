import React from "react";
import FormInput from "./FormInput";
import "./CvEditor.css";

const CvEditor = ({ setData }) => {
  return (
    <div className="cv-editor">
      <h2>Editor CV</h2>
      <form>
        <section className="editor-section">
          <h3 className="editor-section__title">Datos Personales</h3>
          <div className="row">
            <FormInput
              name="name"
              label="Nombre"
              placeholder="Ej: Juan"
            />
            <FormInput
              name="surname"
              label="Apellidos"
              placeholder="Ej: Perez"
            />
          </div>
          <div className="row">
            <FormInput
              name="ci"
              label="Cédula de identidad"
              placeholder="Ej: 1025451"
            />
            <FormInput
              name="dateOfBirth"
              label="Fecha de nacimiento"
              inputType="date"
            />
          </div>
        </section>
      </form>
    </div>
  );
};

export default CvEditor;
