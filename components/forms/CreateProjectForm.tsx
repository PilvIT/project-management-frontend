import { SubmitHandler, useForm } from "react-hook-form";
import { TextField } from "../atoms/TextField/TextField";
import { Button } from "../atoms/Button/Button";
import { ProjectCreateModel } from "../../core/projects/models/ProjectCreateModel";
import { ProjectModel } from "../../core/projects/models/ProjectModel";
import { jsonFetch } from "../../core/jsonFetch";

interface Props {
  onCreated: (project: ProjectModel) => void;
}

export const CreateProjectForm = ({ onCreated }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectCreateModel>({ mode: "onBlur" });

  const createProject: SubmitHandler<ProjectCreateModel> = (data) => {
    jsonFetch("POST", "/projects", data).then(onCreated);
  };

  return (
    <form
      onSubmit={handleSubmit(createProject)}
      className="flex flex-col gap-4"
    >
      <TextField
        label="Group"
        name="group"
        placeholder="Organization name"
        error={errors}
        register={register}
        validation={{
          maxLength: {
            value: 200,
            message: "Project name should have less than 200 characters",
          },
        }}
        required
      />
      <TextField
        label="Project Name"
        name="name"
        placeholder="Hand Sanitizer App"
        error={errors}
        register={register}
        validation={{
          maxLength: {
            value: 200,
            message: "Project name should have less than 200 characters",
          },
        }}
        required
      />
      <Button type="submit" className="mt-5">
        Create
      </Button>
    </form>
  );
};
