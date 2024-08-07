import { Button, Flex, Typography } from "antd";
import { useFormContext } from "react-hook-form";
import generateJsonObject from "../../utils/generator";
import {
  EnergyCapFieldDescriptions,
  EnergyCapFieldNames,
  EnergyCapFieldPriorities,
  FormValues,
} from "../../types/energy/energyTypes";
import CheckFormItem from "./CheckFormItem/CheckFormItem";
import SelectFormItem from "./SelectFormItem";
import TimeSelectForm from "./TimeSelectForm";
import { useState } from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";
import PrioritySelectItem from "./PrioritySelectItem";
import { TimerOptions } from "../../types/timer/timerTypes";

interface EnergyFormProps {
  defaultValues: {
    [key: string]: boolean | number;
  };
}

const { Text } = Typography;

const EnergyFormOld = ({ defaultValues }: EnergyFormProps) => {
  const { handleSubmit, control } = useFormContext<FormValues>();

  const [snippet, setSnippet] = useState("");

  const onSubmit = (data) => {
    console.log(`onSubmit data: ${JSON.stringify(data)}`);
    const jsonObject = generateJsonObject(data);
    const stringObject = JSON.stringify(jsonObject);
    console.log(stringObject);
    setSnippet(stringObject);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex gap="middle" vertical>
        <TimeSelectForm
          control={control}
          name={TimerOptions.HOURS}
          defaultValue={defaultValues.HOURS as number}
        />
        <TimeSelectForm
          control={control}
          name={TimerOptions.MINUTES}
          defaultValue={defaultValues.MINUTES as number}
        />

        <Flex gap="middle" align="start">
          <PrioritySelectItem
            name={EnergyCapFieldPriorities.CAPWAN_PRIORITY}
            control={control}
          />
          <CheckFormItem
            name={EnergyCapFieldNames.CAPWAN}
            description={EnergyCapFieldDescriptions.CAPWAN}
            control={control}
            defaultValue={defaultValues.CAPWAN as boolean}
          />
        </Flex>

        <Flex gap="middle" align="start">
          <PrioritySelectItem
            name={EnergyCapFieldPriorities.CAPTM_PRIORITY}
            control={control}
          />
          <CheckFormItem
            name={EnergyCapFieldNames.CAPTM}
            description={EnergyCapFieldDescriptions.CAPTM}
            control={control}
            defaultValue={defaultValues.CAPTM as boolean}
          />
        </Flex>

        <Flex gap="middle" align="start">
          <PrioritySelectItem
            name={EnergyCapFieldPriorities.CAPALLNGU_PRIORITY}
            control={control}
          />
          <CheckFormItem
            name={EnergyCapFieldNames.CAPALLNGU}
            description={EnergyCapFieldDescriptions.CAPALLNGU}
            control={control}
            defaultValue={defaultValues.CAPALLNGU as boolean}
          />
        </Flex>

        <CheckFormItem
          name={EnergyCapFieldNames.CAPALLBT}
          description={EnergyCapFieldDescriptions.CAPALLBT}
          control={control}
          defaultValue={defaultValues.CAPALLBT as boolean}
        />

        <CheckFormItem
          name={EnergyCapFieldNames.CAPALLAT}
          description={EnergyCapFieldDescriptions.CAPALLAT}
          control={control}
          defaultValue={defaultValues.CAPALLAT as boolean}
        />

        <CheckFormItem
          name={EnergyCapFieldNames.CAPBESTAUG}
          description={EnergyCapFieldDescriptions.CAPBESTAUG}
          control={control}
          defaultValue={defaultValues.CAPBESTAUG as boolean}
        />

        <SelectFormItem
          name={EnergyCapFieldNames.CAPNGUX}
          control={control}
          description={EnergyCapFieldDescriptions.CAPNGUX}
        />

        <Button type="primary" htmlType="submit">
          Submit
        </Button>

        <Text code>{snippet}</Text>
        <CopyToClipboard text={snippet} onCopy={() => console.log("copied")}>
          <Button>Copy</Button>
        </CopyToClipboard>
      </Flex>
    </form>
  );
};

export default EnergyFormOld;
