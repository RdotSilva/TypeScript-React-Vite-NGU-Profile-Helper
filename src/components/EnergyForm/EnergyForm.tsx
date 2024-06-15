import { useFormContext } from "react-hook-form";
import { Checkbox, Flex } from "antd";

import { FormItem } from "react-hook-form-antd";

import {
  EnergyCapFieldNames,
  EnergyCapFieldPriorities,
} from "../../types/energy/energyTypes";
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

        <PrioritySelectItem
          name={EnergyCapFieldPriorities.CAPTM_PRIORITY}
          label="Priority"
        />
      </Flex>
      <Flex>
        <FormItem
          control={control}
          name={EnergyCapFieldNames.CAPALLNGU}
          label={EnergyCapFieldNames.CAPALLNGU}
        >
          <Checkbox />/
        </FormItem>
        <PrioritySelectItem
          name={EnergyCapFieldPriorities.CAPALLNGU_PRIORITY}
          label="Priority"
        />
      </Flex>
    </>
  );
};

export default EnergyForm;
