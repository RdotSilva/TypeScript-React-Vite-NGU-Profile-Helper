import { Button, Checkbox, Flex, Typography } from "antd";
import { Controller, useForm } from "react-hook-form";
import generateJsonObject from "../../utils/generator";
import {
  EnergyCapFieldDescriptions,
  EnergyCapFieldNames,
} from "../../types/energy/energyTypes";

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
        <Flex>
          <Controller
            render={({ field }) => (
              <Checkbox {...field} defaultChecked={defaultValues.CAPALLBT}>
                CAPALLBT
              </Checkbox>
            )}
            control={control}
            name={EnergyCapFieldNames.CAPALLBT}
            defaultValue={true}
          />

          <Text code>{EnergyCapFieldDescriptions.CAPALLAT}</Text>
        </Flex>

        <Flex>
          <Controller
            render={({ field }) => (
              <Checkbox {...field} defaultChecked={defaultValues.CAPALLAT}>
                CAPALLAT
              </Checkbox>
            )}
            control={control}
            name={EnergyCapFieldNames.CAPALLAT}
            defaultValue={true}
          />

          <Text code>{EnergyCapFieldDescriptions.CAPALLAT}</Text>
        </Flex>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Flex>
    </form>
  );
};

export default CheckForm;
