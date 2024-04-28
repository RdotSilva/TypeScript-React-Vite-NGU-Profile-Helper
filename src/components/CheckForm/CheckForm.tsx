import { Button, Checkbox, Flex, Typography } from "antd";
import { Controller, useForm } from "react-hook-form";
import generateJsonObject from "../../utils/generator";
import {
  EnergyCapFieldDescriptions,
  EnergyCapFieldNames,
} from "../../types/energy/energyTypes";
import CheckFormItem from "../CheckFormItem/CheckFormItem";

const { Text } = Typography;

const defaultValues = {
  CAPALLBT: true,
  CAPALLAT: true,
};

const CheckForm = () => {
  const { handleSubmit, control } = useForm({
    defaultValues,
  });

  const onSubmit = (data) => {
    console.log(`onSubmit data: ${JSON.stringify(data)}`);
    const jsonObject = generateJsonObject(data);
    console.log(jsonObject);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex gap="middle" vertical>
        <CheckFormItem
          name={EnergyCapFieldNames.CAPALLBT}
          description={EnergyCapFieldDescriptions.CAPALLBT}
          control={control}
          defaultValue={defaultValues.CAPALLBT}
        />

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Flex>
    </form>
  );
};

export default CheckForm;
