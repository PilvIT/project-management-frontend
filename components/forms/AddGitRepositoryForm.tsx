import {
  GitRepositoryCreate,
  GitRepositoryDetail,
} from "../../core/models/GitRepository";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../atoms/Button";
import { ButtonGroup } from "../atoms/ButtonGroup";
import { FieldGroup } from "../atoms/FieldGroup";
import { Link } from "../atoms/Link";
import { TextField } from "../atoms/TextField";
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
    jsonFetch<GitRepositoryDetail>("POST", `/git-repositories`, {
      ...data,
      project: router.query.id,
    }).then(onCreated);
  };

  return (
    <form onSubmit={handleSubmit(createRepository)} className={className}>
      <FieldGroup>
        <TextField
          type="url"
          error={errors}
          label="Repository Url"
          name="url"
          register={register}
          placeholder="https://github.com/org/project-name"
        />
      </FieldGroup>

      <ButtonGroup>
        <Button type="submit" styling={{ color: "primary" }}>
          Submit
        </Button>
        <Link
          to={`/projects/${router.query.id}`}
          styling={{
            color: "secondary",
          }}
        >
          Cancel
        </Link>
      </ButtonGroup>
    </form>
  );
};
