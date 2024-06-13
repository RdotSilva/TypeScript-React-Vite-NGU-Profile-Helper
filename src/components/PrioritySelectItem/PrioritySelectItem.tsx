import React, { useState } from "react";
import { Select } from "antd";
import { FormItem } from "react-hook-form-antd";
import { useFormContext } from "react-hook-form";

const OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

interface PrioritySelectItemProps {
  name: string;
  label: string;
}

const PrioritySelectItem = ({ name, label }: PrioritySelectItemProps) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [openSelect, setOpenSelect] = useState(false);
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

  const { control } = useFormContext();

  return (
    <>
      <FormItem control={control} name={name} label={label}>
        <Select />/
      </FormItem>
    </>
  );
};

export default PrioritySelectItem;
