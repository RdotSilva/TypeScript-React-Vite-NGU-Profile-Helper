import { Flex } from "antd";
import EnergyForm from "../EnergyForm/EnergyForm";
import "./MainForm.css";
import { useForm, FormProvider } from "react-hook-form";
import { EnergyFormValues } from "../../types/energy/energyTypes";

const defaultValues = {
  CAPALLBT: true,
  CAPALLAT: true,
  CAPALLNGU: true,
  CAPBESTAUG: true,
  CAPWAN: true,
  CAPTM: true,
  HOURS: 0,
};

const MainForm = () => {
  const methods = useForm<EnergyFormValues>({
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <Flex className="form-container">
        <EnergyForm defaultValues={defaultValues} />
      </Flex>
    </FormProvider>
  );
};

export default MainForm;
