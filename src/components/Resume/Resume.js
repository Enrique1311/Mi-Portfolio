import { useState } from "react";
import Subtitle from "../utilities/Subtitle/Subtitle";
import ItemResume from "./ItemResume";
import "./Resume.css";
import { FaUserGraduate, FaHistory, FaMusic } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";

const Resume = () => {
  const [items, setItem] = useState([
    {
      title: "Educación",
      icon: <FaUserGraduate />,
      content:
        "2018: Me recibí como Técnico en Seguridad e Higiene laboral en la Universidad Siglo 21.",
      content2:
        "2021: Luego me gradué como Desarrollador WEb Full Stack en Numen Academy.",
      open: false,
    },
    {
      title: "Historial",
      icon: <FaHistory />,
      content:
        "1997 al 2009: MOCBA S.A.. Me desempeñe como control de servicio, inspector, Jefe de Tránsito y en tesorería.",
      content2: "2009 al 2014: SR Viajes. Conductor profesional.",
      content3: "2014 al 2019: Sides S.A.. Operario",
      content4: "2019 hasta la actualidad: Uber. Conductor profesional",
      open: false,
    },
    {
      title: "Habilidades",
      icon: <MdOutlineComputer />,
      content: "Html, Css, Javascript, React Js, Next Js, Node Js...",
      content2:
        "Soy proactivo, disciplinado, innovador, original y ma gusta resolver los desafíos con la máxima eficiencia y eficacia posibles.",
      open: false,
    },
    {
      title: "Pasiones",
      icon: <FaMusic />,
      content: "Me encanta escuchar música e ir al gimnasio.",
      content2: "Viajar y conocer lugares nuevos.",
      content3: "Hacer páginas web es otra actividad que disfruto mucho.",
      content4:
        "¡Estar con mi esposa y mis dos hijos es lo que más me llena el alma!",
      open: false,
    },
  ]);

  const toggle = (index) => {
    setItem(
      items.map((item, i) => {
        if (i === index) {
          item.open = !item.open;
        } else {
          item.open = false;
        }
        return item;
      })
    );
  };

  return (
    <div className="resume-container" id="resume">
      <Subtitle>Resumen</Subtitle>
      <div className="resume">
        {items.map((item, index) => (
          <ItemResume item={item} index={index} toggle={toggle} />
        ))}
      </div>
    </div>
  );
};

export default Resume;
