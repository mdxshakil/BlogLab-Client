import { useThemeMode } from "../hooks/useThemeMode";
import SubmitBtn from "../components/auth/SubmitBtn";
import GoogleBtn from "../components/auth/GoogleBtn";
import FormHeading from "../components/auth/FormHeading";
import FormFooter from "../components/auth/FormFooter";
import { useForm, FieldValues } from "react-hook-form";
import { useState } from "react";
import PasswordField from "../components/auth/PasswordField";
import TextField from "../components/auth/TextField";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [login, { isLoading, isError, error, isSuccess }] = useLoginMutation();

  const onSubmit = (data: FieldValues) => {
    login(data);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Welcome back!");
      navigate("/");
    }
    if (isError) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      toast.error((error as any)?.data?.message || "An error occured");
    }
  }, [isError, isSuccess, navigate, error]);

  // apply current theme to the page
  useThemeMode();
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="bg-base-300 flex rounded-2xl shadow-lg p-6 items-center w-full md:w-2/5 min-h-screen">
        <div className=" px-6 w-full">
          <FormHeading
            title="Login"
            message="Already a member? easily login."
          />
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              register={register}
              errors={errors}
              name="email"
              placeholder="Email"
              type="email"
            />
            <PasswordField
              register={register}
              errors={errors}
              name="password"
              placeholder="Password"
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              isPasswordField={true}
            />
            <SubmitBtn isLoading={isLoading} />
          </form>
          <div className="divider">or</div>
          <GoogleBtn />
          <div className="mt-5 text-xs py-4 text-primary">
            <p>Forgot your password?</p>
          </div>
          <div className="divider p-0 m-0"></div>
          <FormFooter label="Don't have an account?" path="/signup" />
        </div>
      </div>
    </section>
  );
};

export default Login;
