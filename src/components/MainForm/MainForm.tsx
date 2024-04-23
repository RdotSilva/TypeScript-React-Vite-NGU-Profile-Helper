import { Flex } from "antd";
import CheckForm from "../CheckForm/CheckForm";
import "./MainForm.css";

const MainForm = () => {
  return (
    <Flex className="form-container">
      <CheckForm />
    </Flex>
  );
};

export default MainForm;
