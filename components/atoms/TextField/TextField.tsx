import {
  FieldError,
  FieldErrors,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface Props<Form> {
  error: FieldErrors;
  label: string;
  name: Path<Form>;
  placeholder?: string;
  register: UseFormRegister<Form>;
  required?: boolean;
  validation?: RegisterOptions;
}

export const TextField = <T,>({
  error,
  label,
  name,
  placeholder,
  register,
  required,
  validation,
}: Props<T>) => {
  const errorField: FieldError | undefined = error[name];

  return (
    <div className="flex flex-col gap-1">
      <label className="">{label}</label>
      <input
        {...register(name, {
          required: required && {
            value: true,
            message: "Fill this field",
          },
          ...validation,
        })}
        aria-invalid={errorField ? true : false}
        className="border border-solid border-slate-400 rounded-md focus:outline-1 focus:outline-blue-400 p-2"
        placeholder={placeholder}
      />
      {errorField && (
        <small className="text-red-500" role="alert">
          {errorField.message}
        </small>
      )}
    </div>
  );
};
