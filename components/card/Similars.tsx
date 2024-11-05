import React from "react";
import Card from "../details/Card";

const Similars = ({ cards }: any) => {
  return (
    <div className="similars">
      <h1 className="title">Похожие товары</h1>
      <div className="similarCards">
        {cards &&
          cards.length > 0 &&
          cards.map((item: any) => <Card key={item.id} data={item} />)}
      </div>
    </div>
  );
};

export default Similars;
