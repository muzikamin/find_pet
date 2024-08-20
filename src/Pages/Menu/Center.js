import { useForm } from "react-hook-form";

export const Center = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return <div>텍스트</div>;
};
