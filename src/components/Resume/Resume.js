import { useState } from "react";
import Subtitle from "../utilities/Subtitle/Subtitle";
import ItemResume from "./ItemResume";
import "./Resume.css";
import {FaUserGraduate, FaHistory, FaMusic} from "react-icons/fa";
import {MdOutlineComputer} from "react-icons/md";

const Resume = () => {
  const [items, setItem] = useState([
    { 
      title: "Education",
      icon: <FaUserGraduate/>,
      content: "ghjkjkhkjh hjjfjghjghj jkjhjkhkjh jhjkhjkjkh jhjkjhkj kjhjkjh jjhjkkj kjhkjjkjk jjkjkhjkj jhjkhkjhj kjjhjk hjhkjhkjhkjh jkhjkhjkjhjkh kjkjkllj jjjkjhjkjkh jhkjhjkhjhkj kjhjkhjhjkhjkh kjhkjjkhkhkjhkjhhkj jjkhjkhkjhkjhjk jkjkhkjhkjhkjh jkjkhkjhkjhjhkj hkjhkjhkjh",
      open: false
    },
    {
      title: "Work History",
      icon: <FaHistory/>,
      content: "ghjkjkhkjh hjjfjghjghj hjhkjhkjhkjh jkhjkhjkjhjkh kjkjkllj jjjkjhjkjkh jhkjhjkhjhkj kjhjkhjhjkhjkh kjhkjjkhkhkjhkjhhkj jjkhjkhkjhkjhjk jkjkhkjhkjhkjh jkjkhkjhkjhjhkj hkjhkjhkjh",
      open: false
    },
    {
      title: "Skills",
      icon: <MdOutlineComputer/>,
      content: "ghjkjkhkjh hjjfjghjghj hjhkjhkjhkjh jkhjkhjkjhjkh kjkjkllj jjjkjhjkjkh jhkjhjkhjhkj kjhjkhjhjkhjkh kjhkjjkhkhkjhkjhhkj jjkhjkhkjhkjhjk jkjkhkjhkjhkjh jkjkhkjhkjhjhkj hkjhkjhkjh",
      open: false
    },
    {
      title: "Interests",
      icon: <FaMusic/>,
      content: "ghjkjkhkjh hjjfjghjghj hjhkjhkjhkjh jkhjkhjkjhjkh kjkjkllj jjjkjhjkjkh jhkjhjkhjhkj kjhjkhjhjkhjkh kjhkjjkhkhkjhkjhhkj jjkhjkhkjhkjhjk jkjkhkjhkjhkjh jkjkhkjhkjhjhkj hkjhkjhkjh",
      open: false
    }
  ]);

  const toggle = index => {
    setItem(items.map((item, i) => {
      if (i === index) {
        item.open = !item.open
      } else { 
        item.open = false;
      }
      return item;
    }))
  };

  return (
    <div className="resume-container" id="resume">
      <Subtitle>Resume</Subtitle>
      <div className="resume">
        {items.map((item, index) => (
          <ItemResume item={item} index={index} toggle={toggle}/>
        ))} 
      </div> 
    </div>
  );
};

export default Resume;
