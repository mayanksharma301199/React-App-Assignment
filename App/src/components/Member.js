import { Descriptions } from "antd";
import styles from './Member.module.css';
const Member = (props) => {
    const team = props.memberDescription;
  return (
    <Descriptions className={styles["member_container"]} title="Team" size="small" bordered>
      <Descriptions.Item label="AgeBrackets">{team.AgeBracket}</Descriptions.Item>
      <Descriptions.Item label="Age">{team.Age}</Descriptions.Item>
      {team.Gender !== "" && <Descriptions.Item label="Gender">{team.Gender}</Descriptions.Item>}
      <Descriptions.Item label="Skills">
      {team.Skills !== [] && team.Skills.map((skill) => {return (<b key={skill}>{skill} </b>);})}
      </Descriptions.Item>
    </Descriptions>
  );
};
export default Member;
