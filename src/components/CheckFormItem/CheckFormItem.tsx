import { Checkbox, Flex, Typography } from "antd";
import { Control, Controller } from "react-hook-form";
import {
  EnergyCapFieldNames,
  EnergyFormValues,
} from "../../types/energy/energyTypes";

const { Text } = Typography;

interface CheckFormItemsProps {
  name: EnergyCapFieldNames;
  description: string;
  control: Control<EnergyFormValues>;
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
          <Checkbox {...field} checked={defaultValue}>
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
