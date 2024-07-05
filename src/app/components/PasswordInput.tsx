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
    <div className="inline-block">
      <input
        type={visible ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        required
        className={`w-96 placeholder-[#7c7c7c] ${className}`}
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="inline-block align-middle ml-[-35px] bg-transparent"
      >
        <Icon
          path={visible ? mdiEyeOutline : mdiEyeOffOutline}
          size={1}
          className="text-[#7c7c7c]"
        />
      </button>
    </div>
  );
};

export default PasswordInput;
