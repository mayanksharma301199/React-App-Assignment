import React, { useState } from "react";
import "./App.css";
import TeamModal from "./components/TeamModal";
import { Button } from "antd";
import AgeBracket from "./components/AgeBracket";
import Age from "./components/Age";
import Gender from "./components/Gender";
import Skills from "./components/Skills";
import Member from "./components/Member";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentModalValue, setCurrentModalValue] = useState("AgeBracket");
  const [teamValues, setTeamValues] = useState({});
  const [teamMembers, setTeamMembers] = useState([]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const visibilityHandler = (visibility) => {
    if (visibility === true) {
      if (currentModalValue === "AgeBracket") {
        if (teamValues.AgeBracket === "Adult") {
          setCurrentModalValue("Gender");
        } else {
          setCurrentModalValue("Age");
        }
      } else if (currentModalValue === "Gender") {
        setCurrentModalValue("Age");
      } else if (currentModalValue === "Age") {
        setCurrentModalValue("Skills");
      } else {
        setIsModalVisible(false);
        setTeamMembers((prevValues) => {return ([...prevValues, {...teamValues}]);});
        setCurrentModalValue("AgeBracket")
        setTeamValues({});
      }
    } else {
      setIsModalVisible(visibility);
    }

    // console.log(teamValues);
  };

  const ageBracketValue = (value) => {
    setTeamValues((prevValues) => {
      return { ...prevValues, AgeBracket: value };
    });
  };

  const genderValue = (value) => {
    setTeamValues((prevValues) => {
      return { ...prevValues, Gender: value };
    });
  };

  const ageValue = (value) => {
    setTeamValues((prevValues) => {
      return { ...prevValues, Age: value };
    });
  };

  const skillsValue = (value) => {
    setTeamValues((prevValues) => {
      return { ...prevValues, Skills: value };
    });
  };

  return (
    <>
      <div style={{ textAlign: "center", paddingTop: "30px" }}>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <TeamModal
          isModalVisible={isModalVisible}
          changeVisibility={visibilityHandler}
        >
          {currentModalValue === "AgeBracket" ? (
            <AgeBracket ageBracketValue={ageBracketValue} />
          ) : currentModalValue === "Gender" ? (
            <Gender genderValue={genderValue} />
          ) : currentModalValue === "Age" ? (
            <Age ageType={teamValues.AgeBracket} ageValue={ageValue} />
          ) : (
            <Skills ageType={teamValues.AgeBracket} skillsValue={skillsValue} />
          )}
        </TeamModal>
        <div style={{ textAlign: "center", paddingTop: "30px" }}>
        {
          teamMembers !== [] && teamMembers.map(

              (element) => {

                return (<Member key={Math.random()} memberDescription={element} />);

              }

          )
        }
        </div>
      </div>
    </>
  );
}

export default App;
