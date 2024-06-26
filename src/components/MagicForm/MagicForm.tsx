import { Checkbox, Flex } from "antd";
import { useFormContext } from "react-hook-form";
import { FormItem } from "react-hook-form-antd";
import { MagicCap } from "../../types/magic/magicTypes";

const MagicForm = () => {
  const { control } = useFormContext();

  return (
    <Flex>
      <FormItem
        valuePropName="checked"
        control={control}
        name={MagicCap.CAPALLNGU.name}
        label={MagicCap.CAPALLNGU.name}
      >
        <Checkbox />/
      </FormItem>
    </Flex>
  );
};

export default MagicForm;
