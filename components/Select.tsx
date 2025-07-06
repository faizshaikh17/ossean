'use client';

import React from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  placeholder?: string;
  className?: string;
}

export default function Select({
  value,
  onChange,
  options,
  placeholder = 'Select...',
  className = '',
}: SelectProps) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`appearance-none bg-black text-white border border-neutral-700/30 px-3 py-2 text-sm focus:outline-none focus:ring-[0.5px] focus:ring-yellow-300/30 transition ${className}`}
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option
          key={opt.value}
          value={opt.value}
          className="bg-black text-white"
        >
          {opt.label}
        </option>
      ))}
    </select>
  );
}
