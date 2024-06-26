import { Checkbox, Flex, Typography } from "antd";
import { useFormContext } from "react-hook-form";
import { FormItem } from "react-hook-form-antd";
import {
  MagicCap,
  MagicCapFieldDescriptions,
} from "../../types/magic/magicTypes";
import PrioritySelectItem from "../PrioritySelectItem/PrioritySelectItem";

const { Text } = Typography;

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
      <PrioritySelectItem name={MagicCap.CAPALLNGU.priority} label="Priority" />
      <Text style={{ marginLeft: "15px" }}>
        {MagicCapFieldDescriptions.CAPALLNGU}
      </Text>
    </Flex>
  );
};

export default MagicForm;
