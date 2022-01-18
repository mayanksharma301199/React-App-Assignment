import {useState, useEffect} from 'react';
import { Radio } from 'antd';

const Age = (props) => {

    const adultAge = ["26-U", "40", "50", "60", "70"];
    const juniorAge = ["13-U", "14-U", "15-U", "16-U", "17-U"];
    const defaultValue = props.ageType === "Adult" ? "26-U" : "13-U" 
    const [value, setValue] = useState(defaultValue);

    useEffect(()=>{

        props.ageValue(defaultValue);
    
      }, []);

    const onChange = e => {
        setValue(e.target.value);
        props.ageValue(e.target.value);
      };

    return (

        <Radio.Group name="radiogroup" onChange={onChange} value={value} defaultValue={defaultValue}>
        {props.ageType === "Adult" ? 
            adultAge.map((element) => {return (<Radio key={element} value={element}>{element}</Radio>);})
           :juniorAge.map((element) => {return (<Radio key={element} value={element}>{element}</Radio>);})
        }
      </Radio.Group>

    );

};
export default Age;