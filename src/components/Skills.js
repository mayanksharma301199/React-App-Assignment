import { useEffect } from "react";
import { Checkbox, Row, Col } from "antd";

const Skills = (props) => {

  const adultSkills = ["A", "AA", "AAA", "Novice", "Masters"];
  const juniorSkills = ["Bronze", "Silver", "Gold", "High School", "Club"];
  const defaultValue = props.ageType === "Adult" ? adultSkills : juniorSkills

  useEffect(()=>{

    props.skillsValue(defaultValue);

  }, []);

  function onChange(checkedValues) {
    props.skillsValue(checkedValues);
  }

  return (
    <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
      <Row>
        {props.ageType === "Adult" ? 
             adultSkills.map((element) => {return (<Col key={element} span={8}><Checkbox value={element}>{element}</Checkbox></Col>);})
            :juniorSkills.map((element) => {return (<Col key={element} span={8}><Checkbox value={element}>{element}</Checkbox></Col>);})
        }
      </Row>
    </Checkbox.Group>
  );
};
export default Skills;
