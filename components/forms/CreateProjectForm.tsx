import { useForm } from "react-hook-form";

export const CreateProjectForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // TODO: Repositories

  return (
    <div>
      <label>
        Group
        <input
          {...register("group", { required: true })}
          className="border border-solid border-slate-400 rounded-sm"
          placeholder="Company name"
        />
      </label>
    </div>
  );
};
