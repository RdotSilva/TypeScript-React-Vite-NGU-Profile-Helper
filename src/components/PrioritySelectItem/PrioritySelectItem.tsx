import React, { useState } from "react";

import { Select } from "antd";
import { Control, Controller } from "react-hook-form";
import {
  EnergyCapFieldPriorities,
  FormValues,
} from "../../types/energy/energyTypes";

interface TimeSelectFormProps {
  control: Control<FormValues>;
  name: keyof typeof EnergyCapFieldPriorities;
}

const OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const PrioritySelectItem = ({ control, name }: TimeSelectFormProps) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

  return (
    <Controller
      render={({ field }) => (
        <Select
          mode="multiple"
          maxCount={1}
          placeholder="Select Priority"
          value={selectedItems}
          onChange={setSelectedItems}
          style={{ width: "15%" }}
          options={filteredOptions.map((item) => ({
            value: item,
            label: item,
          }))}
        />
      )}
      control={control}
      name={name}
    />
  );
};

export default PrioritySelectItem;
