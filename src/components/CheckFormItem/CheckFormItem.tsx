import { Checkbox, Flex, Typography } from "antd";
import { Control, Controller } from "react-hook-form";

const { Text } = Typography;

interface CheckFormItemsProps {
  name: string;
  description: string;
  control: Control<any>;
  defaultValue: string | boolean;
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
