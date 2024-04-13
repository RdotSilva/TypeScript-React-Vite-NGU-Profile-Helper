import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  cap: string;
  capRequired: string;
};

const MainForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      cap: "Default Value Cap Input",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("cap")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("cap")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("capRequired", { required: "Cap is required" })} />
      {/* errors will return when field validation fails  */}
      {errors.capRequired && <span>{errors.capRequired.message}</span>}

      <input type="submit" />
    </form>
  );
};

export default MainForm;
