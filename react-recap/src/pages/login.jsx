import { useForm } from "react-hook-form";

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      action=""
      className="flex flex-col gap-4 mx-auto max-w-md p-6 bg-white rounded-md shadow-md"
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <label className="block text-sm font-medium text-gray-700" htmlFor="">
        Email
      </label>
      <input
        className="block w-full px-3 py-2 mt-1 text-sm leading-tight text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
        type="text"
        {...register("email", {
          required: true,
          pattern: {
            value: /noroff\.no/,
            message: "Email must include @student.noroff.no",
          },
        })}
        placeholder="Email Address"
      />
      {errors.email &&
        (errors.email.message ? (
          <p className="text-red-600">{errors.email.message}</p>
        ) : (
          <p className="text-red-600">Unexpected error</p>
        ))}
      <label htmlFor="">Password</label>
      <input
        className="block w-full px-3 py-2 mt-1 text-sm leading-tight text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
        type="password"
        {...register("password",{
            required: true,
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
              message: "Password must contain at least one uppercase letter and one lowercase letter",
            },
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
        })}
        //password needs to be at least 6 characters and give error message 
        placeholder="Password"
      />
      {errors.password &&
        (errors.password.message ? (
          <p className="text-red-600">{errors.password.message}</p>
        ) : (
          <p className="text-red-600">Unexpected error</p>
        ))}
      <button
        className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        type="submit"
      >
        Login
      </button>
    </form>
  );
}
