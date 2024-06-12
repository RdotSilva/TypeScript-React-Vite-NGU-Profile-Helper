import { Button, Flex, Form } from "antd";
import { useForm, FormProvider } from "react-hook-form";
import EnergyFormTwo from "../EnergyForm/EnergyForm";
import { DevTool } from "@hookform/devtools";
import HourSelectForm from "../TimeSelectForm/HourSelectForm";
import MinuteSelectForm from "../TimeSelectForm/MinuteSelectForm";

const MainFormTwo = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Flex gap="middle" vertical>
        <Form
          style={{ maxWidth: 600, backgroundColor: "white", padding: "20px" }}
          onFinish={methods.handleSubmit((data) => {
            console.log(data);
          })}
        >
          <HourSelectForm />
          <MinuteSelectForm />
          <EnergyFormTwo />
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Flex>

      <DevTool control={methods.control} />
    </FormProvider>
  );
};

export default MainFormTwo;
