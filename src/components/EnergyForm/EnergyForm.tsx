import { Button, Flex, Typography } from "antd";
import { useFormContext } from "react-hook-form";
import generateJsonObject from "../../utils/generator";
import {
  EnergyCapFieldDescriptions,
  EnergyCapFieldNames,
  FormValues,
  TimerOptions,
} from "../../types/energy/energyTypes";
import CheckFormItem from "../CheckFormItem/CheckFormItem";
import SelectFormItem from "../SelectFormItem/SelectFormItem";
import TimeSelectForm from "../TimeSelectForm/TimeSelectForm";
import { useState } from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";

interface EnergyFormProps {
  defaultValues: {
    [key: string]: boolean | number;
  };
}

const { Text } = Typography;

const EnergyForm = ({ defaultValues }: EnergyFormProps) => {
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
        <CheckFormItem
          name={EnergyCapFieldNames.CAPWAN}
          description={EnergyCapFieldDescriptions.CAPWAN}
          control={control}
          defaultValue={defaultValues.CAPWAN as boolean}
        />

        <CheckFormItem
          name={EnergyCapFieldNames.CAPTM}
          description={EnergyCapFieldDescriptions.CAPTM}
          control={control}
          defaultValue={defaultValues.CAPTM}
        />

        <CheckFormItem
          name={EnergyCapFieldNames.CAPALLNGU}
          description={EnergyCapFieldDescriptions.CAPALLNGU}
          control={control}
          defaultValue={defaultValues.CAPALLNGU}
        />

        <CheckFormItem
          name={EnergyCapFieldNames.CAPALLBT}
          description={EnergyCapFieldDescriptions.CAPALLBT}
          control={control}
          defaultValue={defaultValues.CAPALLBT}
        />

        <CheckFormItem
          name={EnergyCapFieldNames.CAPALLAT}
          description={EnergyCapFieldDescriptions.CAPALLAT}
          control={control}
          defaultValue={defaultValues.CAPALLAT}
        />

        <CheckFormItem
          name={EnergyCapFieldNames.CAPBESTAUG}
          description={EnergyCapFieldDescriptions.CAPBESTAUG}
          control={control}
          defaultValue={defaultValues.CAPBESTAUG}
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

export default EnergyForm;
