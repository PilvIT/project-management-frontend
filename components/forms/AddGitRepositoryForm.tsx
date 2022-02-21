import {
  GitRepositoryCreate,
  GitRepositoryDetail,
} from "../../core/models/GitRepository";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../atoms/Button/Button";
import { Link } from "../atoms/Link";
import { TextField } from "../atoms/TextField/TextField";
import { jsonFetch } from "../../core/jsonFetch";
import { useRouter } from "next/router";

interface Props {
  className?: string;
  onCreated: (data: GitRepositoryDetail) => void;
}

export const AddGitRepositoryForm = ({ className, onCreated }: Props) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GitRepositoryCreate>({ mode: "onBlur" });

  const createRepository: SubmitHandler<GitRepositoryCreate> = (data) => {
    jsonFetch("POST", `/git-repositories`, {
      ...data,
      project: router.query.id,
    }).then(onCreated);
  };

  return (
    <form
      onSubmit={handleSubmit(createRepository)}
      className={`flex flex-col ${className}`}
    >
      <div>
        <TextField
          type="url"
          error={errors}
          label="Repository Url"
          name="url"
          register={register}
          placeholder="https://github.com/org/project-name"
        />
      </div>

      <div className="mt-5 flex items-center gap-4">
        <Button type="submit" styling={{ color: "primary" }}>
          Submit
        </Button>
        <Link
          to={`/projects/${router.query.id}`}
          className="bg-none text-gray-400"
          styling={{
            color: "secondary",
          }}
        >
          Cancel
        </Link>
      </div>
    </form>
  );
};
