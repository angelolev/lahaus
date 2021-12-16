import React from "react";
import newList from "../assets/new-list.png";

const NewList = (props) => {
  return (
    <article className="list list--new-list">
      <div className="list__gallery">
        <img src={newList} alt="New list" />
        <i className="icon icon-plus"></i>
      </div>
      <div className="list__title">
        <h2>Crear nueva lista</h2>
      </div>
    </article>
  );
};

export default NewList;
