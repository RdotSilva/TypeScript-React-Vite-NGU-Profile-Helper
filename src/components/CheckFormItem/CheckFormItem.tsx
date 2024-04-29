import { Checkbox, Flex, Typography } from "antd";
import { Control, Controller } from "react-hook-form";
import { EnergyCapFieldNames } from "../../types/energy/energyTypes";

const { Text } = Typography;

type FormValues = {
  [key in EnergyCapFieldNames]: boolean;
};

interface CheckFormItemsProps {
  name: EnergyCapFieldNames;
  description: string;
  control: Control<FormValues>;
  defaultValue: boolean;
}

const CheckFormItem = ({
  name,
  description,
  control,
  defaultValue,
}: CheckFormItemsProps) => {
  return (
    <Flex>
      <Controller
        render={({ field }) => <Checkbox {...field}>{name}</Checkbox>}
        control={control}
        name={name}
        defaultValue={defaultValue}
      />

      <Text code>{description}</Text>
    </Flex>
  );
};

export default CheckFormItem;
