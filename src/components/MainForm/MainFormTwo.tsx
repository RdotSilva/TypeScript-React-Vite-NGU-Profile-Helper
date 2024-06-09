import { Button, Flex, Form } from "antd";
import { useForm, FormProvider } from "react-hook-form";
import EnergyFormTwo from "../EnergyForm/EnergyFormTwo";
import TimeSelectFormTwo from "../TimeSelectForm/TimeSelectFormTwo";
import { DevTool } from "@hookform/devtools";

const MainFormTwo = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Form
        style={{ maxWidth: 600, backgroundColor: "white", padding: "20px" }}
        onFinish={methods.handleSubmit((data) => {
          console.log(data);
        })}
      >
        <Flex className="form-container">
          <EnergyFormTwo />
          <TimeSelectFormTwo />
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Flex>
      </Form>
      <DevTool control={methods.control} />
    </FormProvider>
  );
};

export default MainFormTwo;
