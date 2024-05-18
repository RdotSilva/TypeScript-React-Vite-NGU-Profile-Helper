import { Button, Flex } from "antd";
import { useFormContext } from "react-hook-form";
import generateJsonObject from "../../utils/generator";
import {
  EnergyCapFieldDescriptions,
  EnergyCapFieldNames,
  EnergyFormValues,
} from "../../types/energy/energyTypes";
import CheckFormItem from "../CheckFormItem/CheckFormItem";
import SelectFormItem from "../SelectFormItem/SelectFormItem";
import TimeSelectForm from "../TimeSelectForm/TimeSelectForm";

interface EnergyFormProps {
  defaultValues: {
    [key: string]: boolean | number;
  };
}

const EnergyForm = ({ defaultValues }: EnergyFormProps) => {
  const { handleSubmit, control } = useFormContext<EnergyFormValues>();

  const onSubmit = (data) => {
    console.log(`onSubmit data: ${JSON.stringify(data)}`);
    const jsonObject = generateJsonObject(data);
    console.log(jsonObject);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex gap="middle" vertical>
        <TimeSelectForm control={control} name="HOURS" />
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

export default EnergyForm;
