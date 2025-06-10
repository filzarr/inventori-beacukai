import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import React from "react"

interface LabeledInputProps {
  id: string
  label: string
  placeholder?: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  disabled?: boolean
}

export const FormInput: React.FC<LabeledInputProps> = ({
  id,
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  className = "",
  disabled = false,
}) => {
  return (
    <div className={`flex flex-col gap-1.5 max-w-1/2 px-8 ${className}`}>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        placeholder={placeholder || label}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  )
}