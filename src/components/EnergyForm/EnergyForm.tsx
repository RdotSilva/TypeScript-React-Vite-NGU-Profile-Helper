import { useFormContext } from "react-hook-form";
import { Checkbox, Flex } from "antd";

import { FormItem } from "react-hook-form-antd";

import { EnergyCapFieldNames } from "../../types/energy/energyTypes";
import PrioritySelectItem from "../PrioritySelectItem/PrioritySelectItem";

const EnergyForm = () => {
  const { control } = useFormContext();

  return (
    <>
      <Flex>
        <FormItem
          control={control}
          name={EnergyCapFieldNames.CAPTM}
          label={EnergyCapFieldNames.CAPTM}
        >
          <Checkbox />/
        </FormItem>
        <PrioritySelectItem name="test" label="test" />
      </Flex>
      <FormItem
        control={control}
        name={EnergyCapFieldNames.CAPALLNGU}
        label={EnergyCapFieldNames.CAPALLNGU}
      >
        <Checkbox />/
      </FormItem>
    </>
  );
};

export default EnergyForm;
