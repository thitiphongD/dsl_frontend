"use client";
import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiEyeOffOutline, mdiEyeOutline } from "@mdi/js";

interface PasswordInputProps {
  placeholder?: string;
  initialVisibility?: boolean;
  className?: string;
  value: string;
  onChange: (value: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  placeholder,
  initialVisibility = false,
  className,
  value,
  onChange,
}) => {
  const [visible, setVisible] = useState(initialVisibility);

  const togglePasswordVisibility = () => {
    setVisible(!visible);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={`relative ${className}`}>
      <input
        type={visible ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        required
        className="w-96 placeholder-[#7c7c7c]"
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute inset-y-0 right-0 px-3 bg-transparent"
      >
        <Icon
          path={visible ? mdiEyeOutline : mdiEyeOffOutline}
          size={1}
          className="text-gray-400"
        />
      </button>
    </div>
  );
};

export default PasswordInput;
