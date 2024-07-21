import { Checkbox, Flex, Typography } from "antd";
import { useFormContext } from "react-hook-form";
import { FormItem } from "react-hook-form-antd";
import { MagicCap } from "../../types/magic/magicTypes";
import PrioritySelectItem from "../PrioritySelectItem/PrioritySelectItem";
import HourSelectForm from "../TimeSelectForm/HourSelectForm";
import MinuteSelectForm from "../TimeSelectForm/MinuteSelectForm";

const { Text } = Typography;

const MagicForm = () => {
  const { control } = useFormContext();

  return (
    <>
      <Flex>
        <HourSelectForm />
        <MinuteSelectForm />
      </Flex>
      <Flex>
        <FormItem
          valuePropName="checked"
          control={control}
          name={MagicCap.CAPALLNGU.name}
          label={MagicCap.CAPALLNGU.name}
        >
          <Checkbox />/
        </FormItem>
        <PrioritySelectItem
          name={MagicCap.CAPALLNGU.priority}
          label="Priority"
        />
        <Text style={{ marginLeft: "15px" }}>
          {MagicCap.CAPALLNGU.description}
        </Text>
      </Flex>
    </>
  );
};

export default MagicForm;
