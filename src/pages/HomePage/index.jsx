import { useState } from "react";
import { TShirt } from "../components/TShirt";
import { TShirtSetup } from "../components/TShirtSetup";
import "./style.css";

export const HomePage = () => {
  const [barva, setBarva] = useState("yellow");
  const [type, setType] = useState("normalShortSleeve");
  const [print, setPrint] = useState("Ahoj světe");

  const handleChange = (type) => {
    setType(type);
  };

  return (
    <div className="container">
      <div className="tshirt-panel">
        <div className="tshirt-panel__tshirt">
          <TShirt type={type} color={barva} print={print} />
        </div>
        <div className="tshirt-panel__setup">
          <h2>Možnosti:</h2>
          <TShirtSetup
            onTypeChange={handleChange}
            onColorChange={(event) => {
              setBarva(event.target.value);
            }}
            onPrintChange={(event) => {
              setPrint(event.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};
