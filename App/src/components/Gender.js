import {useState, useEffect} from 'react';
import { Radio } from 'antd';

const Gender = (props) => {

    const [value, setValue] = useState("Men");

    useEffect(()=>{

        props.genderValue("Men");
    
      }, []);

    const onChange = e => {
        setValue(e.target.value);
        props.genderValue(e.target.value);
      };

    return (
      <><h3>Gender</h3>
        <Radio.Group name="radiogroup" onChange={onChange} value={value} defaultValue={"Men"}>
        <Radio value={"Men"}>Men</Radio>
        <Radio value={"Women"}>Women</Radio>
        <Radio value={"Coed"}>Coed</Radio>
      </Radio.Group>
      </>
    );

};
export default Gender;