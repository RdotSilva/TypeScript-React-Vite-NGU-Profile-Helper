import { Checkbox, Flex, Typography } from "antd";
import { Control, Controller } from "react-hook-form";
import {
  EnergyCapFieldNames,
  FormValues,
} from "../../types/energy/energyTypes";

const { Text } = Typography;

interface CheckFormItemsProps {
  name: keyof typeof EnergyCapFieldNames;
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
    <Flex align="center" justify="space-between">
      <Controller
        render={({ field }) => (
          <Checkbox {...field} checked={field.value as boolean}>
            {name}
          </Checkbox>
        )}
        control={control}
        name={name}
        defaultValue={defaultValue}
      />
      {/* TODO: Fix long length for description */}
      <Text code>{description}</Text>
    </Flex>
  );
};

export default CheckFormItem;
