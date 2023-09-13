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
import { useGetAllCategoryQuery } from "../redux/features/category/categoryApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [signUp, { isLoading, isSuccess, isError, error }] =
    useSignupMutation();
  const { data: categories, isLoading: categoryLoading } =
    // eslint-disable-next-line no-undefined
    useGetAllCategoryQuery(undefined);
  const [selectedCategories, setSelectedCategories] = useState<
    Array<{
      categoryId: string;
    }>
  >([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCategorySelection = (chosenId: string) => {
    const isSelected = selectedCategories.find(
      (category) => category.categoryId === chosenId
    );
    if (isSelected) {
      const remainingCategories = selectedCategories.filter(
        (category) => category.categoryId !== chosenId
      );
      setSelectedCategories(remainingCategories);
    } else {
      setSelectedCategories((prevCategories) => [
        ...prevCategories,
        { categoryId: chosenId },
      ]);
    }
  };

  const onSubmit = async (data: FieldValues) => {
    const signupData = {
      ...data,
      favouriteCategories: selectedCategories,
    };
    if (selectedCategories.length < 2) {
      toast.error("Atleast 2 category must be selected");
    } else {
      signUp(signupData);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Signup successful! Login to your account.");
      navigate("/login");
    }
    if (isError) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              isPasswordField={true}
            />
            <PasswordField
              register={register}
              errors={errors}
              name="confirmPassword"
              placeholder="Confirm Password"
              showConfirmPassword={showConfirmPassword}
              setShowConfirmPassword={setShowConfirmPassword}
              isConfirmPasswordField={true}
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
            {/* select favourite categories */}
            <div>
              <h3 className="font-semibold text-center mb-3">
                Select favourite categories:
              </h3>
              <div className="flex items-center justify-center flex-wrap gap-3">
                {categoryLoading && (
                  <span className="loading loading-spinner"></span>
                )}
                {categories?.data?.map(
                  (category: { id: string; title: string }) => {
                    const isSelected = selectedCategories.find(
                      (item) => item.categoryId === category.id
                    );
                    return (
                      <p
                        key={category?.id}
                        className={`py-2 px-3 rounded-full cursor-pointer ${
                          isSelected
                            ? "bg-primary text-base-100"
                            : "bg-base-100"
                        }`}
                        onClick={() => handleCategorySelection(category.id)}
                      >
                        {category?.title}
                      </p>
                    );
                  }
                )}
              </div>
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
