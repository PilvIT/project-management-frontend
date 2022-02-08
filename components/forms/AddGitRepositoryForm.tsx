import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../atoms/Button/Button";
import { GitRepositoryCreateModel } from "../../core/projects/models/GitRepositoryCreateModel";
import { GitRepositoryModel } from "../../core/projects/models/GitRepositoryModel";
import { TextField } from "../atoms/TextField/TextField";
import { jsonFetch } from "../../core/jsonFetch";
import { useRouter } from "next/router";
import { Link } from "../atoms/Link";

interface Props {
  className?: string;
  onCreated: (data: GitRepositoryModel) => void;
}

export const AddGitRepositoryForm = ({ className, onCreated }: Props) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GitRepositoryCreateModel>({ mode: "onBlur" });

  const createRepository: SubmitHandler<GitRepositoryCreateModel> = (data) => {
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

      <div className="mt-5 flex gap-4">
        <Button
          type="submit"
          className="bg-gradient-to-r from-indigo-500 to-blue-500"
        >
          Submit
        </Button>
        <Link
          href={`/projects/${router.query.id}`}
          className="bg-none text-gray-400"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
};
