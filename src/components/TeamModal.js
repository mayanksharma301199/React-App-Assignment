import {Modal} from 'antd';
const TeamModal = (props) => {

    const handleOk = () => {
      props.changeVisibility(true)
      };
    
      const handleCancel = () => {
        props.changeVisibility(false);
      };

  return (
    <Modal
      title="Basic Modal"
      visible={props.isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {props.children}
    </Modal>
  );
};
export default TeamModal;
