import { Flex } from "antd";
import EnergyForm from "./EnergyFormOld";
import "./MainFormOld.css";
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
  MINUTES: 0,
};

const MainFormOld = () => {
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

export default MainFormOld;
