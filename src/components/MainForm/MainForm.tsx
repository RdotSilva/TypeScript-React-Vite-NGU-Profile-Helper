import { Button, Flex, Form } from "antd";
import { useForm, FormProvider } from "react-hook-form";
import EnergyForm from "../EnergyForm/EnergyForm";
import { DevTool } from "@hookform/devtools";
import { defaultValues } from "../../types/defaultValues";

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
          <EnergyForm />
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Generate
            </Button>
          </Form.Item>
        </Flex>
      </Form>

      <DevTool control={methods.control} />
    </FormProvider>
  );
};

export default MainForm;
