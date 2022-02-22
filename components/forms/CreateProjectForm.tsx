import { ProjectCreate, ProjectDetail } from "../../core/models/Project";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../atoms/Button";
import { FaPlus } from "react-icons/fa";
import { Link } from "../atoms/Link";
import { TextField } from "../atoms/TextField";
import { jsonFetch } from "../../core/jsonFetch";

interface Props {
  onCreated: (project: ProjectDetail) => void;
}

export const CreateProjectForm = ({ onCreated }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectCreate>({ mode: "onBlur" });

  const createProject: SubmitHandler<ProjectCreate> = (data) => {
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

      <div className="flex gap-3 mt-5">
        <Button type="submit" styling={{ color: "primary" }}>
          <FaPlus />
          Create
        </Button>
        <Link
          to="/projects"
          appearance="button"
          styling={{ color: "secondary" }}
        >
          Cancel
        </Link>
      </div>
    </form>
  );
};
