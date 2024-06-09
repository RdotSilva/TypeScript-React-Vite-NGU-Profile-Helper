import { useFormContext } from "react-hook-form";
import { Checkbox } from "antd";

import { FormItem } from "react-hook-form-antd";

import { EnergyCapFieldNames } from "../../types/energy/energyTypes";

const EnergyFormTwo = () => {
  const { control } = useFormContext();

  return (
    <>
      <FormItem
        control={control}
        name={EnergyCapFieldNames.CAPTM}
        label={EnergyCapFieldNames.CAPTM}
      >
        <Checkbox />/
      </FormItem>
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

export default EnergyFormTwo;
