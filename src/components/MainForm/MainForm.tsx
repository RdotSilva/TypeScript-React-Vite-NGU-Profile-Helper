import { Flex } from "antd";
import CheckForm from "../CheckForm/CheckForm";
import "./MainForm.css";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { EnergyFormValues } from "../../types/energy/energyTypes";

const defaultValues = {
  CAPALLBT: true,
  CAPALLAT: true,
  CAPALLNGU: true,
  CAPBESTAUG: true,
  CAPWAN: true,
  CAPTM: true,
};

const MainForm = () => {
  const methods = useForm<EnergyFormValues>({
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <Flex className="form-container">
        <CheckForm />
      </Flex>
    </FormProvider>
  );
};

export default MainForm;
