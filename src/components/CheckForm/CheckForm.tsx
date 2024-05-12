import { Button, Flex } from "antd";
import { useForm, useFormContext } from "react-hook-form";
import generateJsonObject from "../../utils/generator";
import {
  EnergyCapFieldDescriptions,
  EnergyCapFieldNames,
  EnergyFormValues,
} from "../../types/energy/energyTypes";
import CheckFormItem from "../CheckFormItem/CheckFormItem";
import SelectFormItem from "../SelectFormItem/SelectFormItem";

const defaultValues = {
  CAPALLBT: true,
  CAPALLAT: true,
  CAPALLNGU: true,
  CAPBESTAUG: true,
  CAPWAN: true,
  CAPTM: true,
};
const CheckForm = () => {
  const { handleSubmit, control } = useFormContext<EnergyFormValues>();

  const onSubmit = (data) => {
    console.log(`onSubmit data: ${JSON.stringify(data)}`);
    const jsonObject = generateJsonObject(data);
    console.log(jsonObject);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex gap="middle" vertical>
        <CheckFormItem
          name={EnergyCapFieldNames.CAPWAN}
          description={EnergyCapFieldDescriptions.CAPWAN}
          control={control}
          defaultValue={defaultValues.CAPWAN}
        />

        <CheckFormItem
          name={EnergyCapFieldNames.CAPTM}
          description={EnergyCapFieldDescriptions.CAPTM}
          control={control}
          defaultValue={defaultValues.CAPTM}
        />

        <CheckFormItem
          name={EnergyCapFieldNames.CAPALLNGU}
          description={EnergyCapFieldDescriptions.CAPALLNGU}
          control={control}
          defaultValue={defaultValues.CAPALLNGU}
        />

        <CheckFormItem
          name={EnergyCapFieldNames.CAPALLBT}
          description={EnergyCapFieldDescriptions.CAPALLBT}
          control={control}
          defaultValue={defaultValues.CAPALLBT}
        />

        <CheckFormItem
          name={EnergyCapFieldNames.CAPALLAT}
          description={EnergyCapFieldDescriptions.CAPALLAT}
          control={control}
          defaultValue={defaultValues.CAPALLAT}
        />

        <CheckFormItem
          name={EnergyCapFieldNames.CAPBESTAUG}
          description={EnergyCapFieldDescriptions.CAPBESTAUG}
          control={control}
          defaultValue={defaultValues.CAPBESTAUG}
        />

        <SelectFormItem
          name={EnergyCapFieldNames.CAPNGUX}
          control={control}
          description={EnergyCapFieldDescriptions.CAPNGUX}
        />

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Flex>
    </form>
  );
};

export default CheckForm;
