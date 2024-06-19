import { useFormContext } from "react-hook-form";
import { Checkbox, Flex } from "antd";

import { FormItem } from "react-hook-form-antd";

import {
  EnergyCap,
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
          name={EnergyCap.CAPTM.name}
          label={EnergyCap.CAPTM.name}
        >
          <Checkbox />/
        </FormItem>

        <PrioritySelectItem
          name={EnergyCap.CAPTM.priorityName}
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
      <Flex>
        <FormItem
          control={control}
          name={EnergyCapFieldNames.CAPWAN}
          label={EnergyCapFieldNames.CAPWAN}
        >
          <Checkbox />/
        </FormItem>
        <PrioritySelectItem
          name={EnergyCapFieldPriorities.CAPWAN_PRIORITY}
          label="Priority"
        />
      </Flex>
    </>
  );
};

export default EnergyForm;
