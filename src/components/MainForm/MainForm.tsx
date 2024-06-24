import { Button, Flex, Form } from "antd";
import { useForm, FormProvider } from "react-hook-form";
import EnergyForm from "../EnergyForm/EnergyForm";
import { DevTool } from "@hookform/devtools";
import HourSelectForm from "../TimeSelectForm/HourSelectForm";
import MinuteSelectForm from "../TimeSelectForm/MinuteSelectForm";
import { defaultValues } from "../../types/defvaultValues";

const MainForm = () => {
  const methods = useForm({ defaultValues });

  return (
    <FormProvider {...methods}>
      <Form
        onFinish={methods.handleSubmit((data) => {
          console.log(data);
        })}
      >
        <Flex
          vertical
          style={{ width: 600, backgroundColor: "white", padding: "15px" }}
          align="flex-start"
        >
          <HourSelectForm />
          <MinuteSelectForm />
          <EnergyForm />
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

export default MainForm;
