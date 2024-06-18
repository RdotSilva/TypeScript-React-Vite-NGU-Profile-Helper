import React from "react";
import { Select } from "antd";
import { FormItem } from "react-hook-form-antd";
import { useFormContext } from "react-hook-form";

const OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

interface PrioritySelectItemProps {
  name: string;
  label: string;
}

const PrioritySelectItem = ({ name, label }: PrioritySelectItemProps) => {
  const { control, getValues, watch } = useFormContext();

  const capAllNguPriority = watch("CAPALLNGU-PRIORITY");
  const capTmPriority = watch("CAPTM-PRIORITY");
  const capWanPriority = watch("CAPWAN-PRIORITY");

  const selectedItems = [
    capAllNguPriority,
    capTmPriority,
    capWanPriority,
  ].filter((item) => item !== undefined && item !== null);

  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

  return (
    <>
      <FormItem control={control} name={name} label={label}>
        <Select
          onChange={() => console.log(getValues())}
          options={filteredOptions.map((item) => ({
            value: item,
            label: item,
          }))}
        />
      </FormItem>
    </>
  );
};

export default PrioritySelectItem;
