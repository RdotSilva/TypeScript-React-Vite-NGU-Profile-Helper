import { useFormContext } from "react-hook-form";
import { Checkbox, Flex } from "antd";

import { FormItem } from "react-hook-form-antd";

import { Typography } from "antd";

const { Text } = Typography;

import {
  EnergyCap,
  EnergyCapFieldNames,
  EnergyCapFieldPriorities,
} from "../../types/energy/energyTypes";
import PrioritySelectItem from "../PrioritySelectItem/PrioritySelectItem";
import HourSelectForm from "../TimeSelectForm/HourSelectForm";
import MinuteSelectForm from "../TimeSelectForm/MinuteSelectForm";

const EnergyForm = () => {
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
          {EnergyCap.CAPTM.description}
        </Text>
      </Flex>
      <Flex>
        <FormItem
          valuePropName="checked"
          control={control}
          name={EnergyCap.CAPALLNGU.name}
          label={EnergyCap.CAPALLNGU.name}
        >
          <Checkbox />/
        </FormItem>
        <PrioritySelectItem
          name={EnergyCapFieldPriorities.CAPALLNGU}
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
          name={EnergyCapFieldPriorities.CAPWAN}
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
          name={EnergyCapFieldPriorities.CAPBESTAUG}
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
          name={EnergyCapFieldPriorities.CAPALLBT}
          label="Priority"
        />
      </Flex>
    </>
  );
};

export default EnergyForm;
