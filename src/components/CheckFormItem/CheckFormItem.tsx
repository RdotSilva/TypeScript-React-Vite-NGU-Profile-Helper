import { Checkbox, Flex, Typography } from "antd";
import { Controller } from "react-hook-form";

const { Text } = Typography;

const CheckFormItem = ({ name, description, control, defaultValue }) => {
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
