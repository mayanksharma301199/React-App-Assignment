import { useEffect } from 'react';
import { Select } from 'antd';
const { Option } = Select;

const AgeBracket = (props) => {
    
    useEffect(()=>{

        props.ageBracketValue("Adult");
    
      }, []);

    function handleChange(value) {
        props.ageBracketValue(value);
      }

  return (
    <>
      <h3>AppBracket</h3>
    <Select defaultValue="Adult" style={{ width: "100%" }} onChange={handleChange}>
    <Option value="Adult">Adult</Option>
    <Option value="Junior">Junior</Option>
  </Select>
  </>

  );

};
export default AgeBracket;
