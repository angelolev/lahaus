import React from "react";

const List = ({ id, title, savedItems, images }) => {
  return (
    <>
      <article className="list">
        <div className="list__gallery">
          {images.map((img) => {
            return (
              <div key={img.id} className="list__image-container">
                <img className="list__image" src={img.src} alt={img.name} />
              </div>
            );
          })}
        </div>
        <div className="list__title">
          <h2>{title}</h2>
        </div>
        <div className="list__description">
          <h4>{savedItems} propiedades guardadas</h4>
        </div>
      </article>
    </>
  );
};

export default List;
