/* eslint-disable @typescript-eslint/no-explicit-any */
import { useThemeMode } from "../hooks/useThemeMode";
import TermsCheckbox from "../components/auth/TermsCheckbox";
import SubmitBtn from "../components/auth/SubmitBtn";
import GoogleBtn from "../components/auth/GoogleBtn";
import FormHeading from "../components/auth/FormHeading";
import FormFooter from "../components/auth/FormFooter";
import { useForm, FieldValues } from "react-hook-form";
import PasswordField from "../components/auth/PasswordField";
import { useEffect, useState } from "react";
import TextField from "../components/auth/TextField";
import RoleInput from "../components/auth/RoleInput";
import { useSignupMutation } from "../redux/features/auth/authApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import ProfileImageInput from "../components/auth/ProfileImageInput";
import SelectFavouriteCategories from "../components/auth/SelectFavouriteCategories";

const Signup = () => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState<any>();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [signUp, { isLoading, isSuccess, isError, error }] =
    useSignupMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const formData = new FormData();
    if (data.password !== data.confirmPassword) {
      toast.error("Password and Confirm Password do not match");
      return; // Don't proceed with the signup if passwords don't match
    }
    formData.append("profilePicture", profileImage);
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("contactNo", data.contactNo);
    formData.append("password", data.password);
    formData.append("role", data.role);
    // Append selectedCategories to the formData
    selectedCategories.forEach((category) => {
      formData.append("favouriteCategories", category as string);
    });
    if (selectedCategories.length < 2) {
      toast.error("Atleast 2 category must be selected");
    } else {
      await signUp(formData);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Signup successful! Login to your account.");
      navigate("/login");
    }
    if (isError) {
      toast.error((error as any)?.data?.message);
    }
  }, [isError, isSuccess, navigate, error]);

  // apply current theme to the page
  useThemeMode();
  return (
    <section className=" flex items-center justify-center">
      <div className="bg-base-300 flex flex-row-reverse rounded-2xl shadow-lg p-6 items-center w-full md:w-3/5">
        <div className="w-full">
          <FormHeading
            title="SignUp"
            message="Create your new awesome account"
          />
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <ProfileImageInput
                register={register}
                errors={errors}
                setProfileImage={setProfileImage}
              />
              <TextField
                register={register}
                errors={errors}
                name="firstName"
                placeholder="First Name"
                type="text"
              />
              <TextField
                register={register}
                errors={errors}
                name="lastName"
                placeholder="Last Name"
                type="text"
              />
            </div>
            <TextField
              register={register}
              errors={errors}
              name="email"
              placeholder="Email"
              type="email"
            />
            <TextField
              register={register}
              errors={errors}
              name="contactNo"
              placeholder="Contact no."
              type="text"
            />
            <PasswordField
              register={register}
              errors={errors}
              name="password"
              placeholder="Password"
            />
            <PasswordField
              register={register}
              errors={errors}
              name="confirmPassword"
              placeholder="Confirm Password"
            />
            <div>
              <h3 className="font-medium mb-2">Select your role:</h3>
              <ul className="grid w-full gap-2 grid-cols-2">
                <RoleInput
                  register={register}
                  errors={errors}
                  name="reader"
                  title="Reader"
                />
                <RoleInput
                  register={register}
                  errors={errors}
                  name="blogger"
                  title="Blogger"
                />
              </ul>
            </div>
            <div>
              <SelectFavouriteCategories
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
              />
            </div>
            <TermsCheckbox register={register} errors={errors} />
            <SubmitBtn isLoading={isLoading} />
          </form>
          <div className="divider">or</div>
          <GoogleBtn />
          <FormFooter label="Already have an account?" path="/login" />
        </div>
      </div>
    </section>
  );
};

export default Signup;
