import { useFormContext } from "react-hook-form";
import { Checkbox, Flex } from "antd";

import { FormItem } from "react-hook-form-antd";

import { Typography } from "antd";

const { Text } = Typography;

import {
  EnergyCap,
  EnergyCapFieldDescriptions,
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
          valuePropName="checked"
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
        <Text style={{ marginLeft: "15px" }}>
          {EnergyCapFieldDescriptions.CAPTM}
        </Text>
      </Flex>
      <Flex>
        <FormItem
          valuePropName="checked"
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
          valuePropName="checked"
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
      <Flex>
        <FormItem
          valuePropName="checked"
          control={control}
          name={EnergyCapFieldNames.CAPBESTAUG}
          label={EnergyCapFieldNames.CAPBESTAUG}
        >
          <Checkbox />/
        </FormItem>
        <PrioritySelectItem
          name={EnergyCapFieldPriorities.CAPBESTAUG_PRIORITY}
          label="Priority"
        />
      </Flex>
      <Flex>
        <FormItem
          valuePropName="checked"
          control={control}
          name={EnergyCapFieldNames.CAPALLBT}
          label={EnergyCapFieldNames.CAPALLBT}
        >
          <Checkbox />/
        </FormItem>
        <PrioritySelectItem
          name={EnergyCapFieldPriorities.CAPALLBT_PRIORITY}
          label="Priority"
        />
      </Flex>
    </>
  );
};

export default EnergyForm;
