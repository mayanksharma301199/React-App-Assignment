import { useEffect } from "react";
import { Checkbox, Row, Col } from "antd";

const Skills = (props) => {

  const adultSkills = ["A", "AA", "AAA", "Novice", "Masters"];
  const juniorSkills = ["Bronze", "Silver", "Gold", "High School", "Club"];


  useEffect(()=>{

    props.skillsValue([]);

  }, []);

  function onChange(checkedValues) {
    props.skillsValue(checkedValues);
  }

  return (
    <><h3>Skills</h3>
    <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
      <Row>
        {props.ageType === "Adult" ? 
             adultSkills.map((element) => {return (<Col key={element} span={8}><Checkbox value={element}>{element}</Checkbox></Col>);})
            :juniorSkills.map((element) => {return (<Col key={element} span={8}><Checkbox value={element}>{element}</Checkbox></Col>);})
        }
      </Row>
    </Checkbox.Group>
    </>
  );
};
export default Skills;
