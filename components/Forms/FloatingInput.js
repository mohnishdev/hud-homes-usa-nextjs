'use client';

/**
 * Reusable FloatingInput component to eliminate duplication
 * Implements floating label pattern
 */
export default function FloatingInput({
  id,
  type = "text",
  label,
  value,
  onChange,
  maxLength,
  required = false,
  className = "",
  labelClassName = "",
  containerClassName = "",
  ...props
}) {
  return (
    <div className={`relative ${containerClassName}`}>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        maxLength={maxLength}
        required={required}
        className={`form-input peer ${className}`}
        {...props}
      />
      <label
        htmlFor={id}
        className={`form-label peer-focus:top-2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs ${labelClassName}`}
      >
        {label}
      </label>
    </div>
  );
}
