import React from "react";
import ProFastLogo from "../../shared/proFastLogo/ProFastLogo";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(watch("example"));
  return (
    <div>
        <h1>Create an Account!</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm p-6 rounded shadow"
      >
        <div className="form-control mb-4">
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 8 })}
            className="input input-bordered w-full"
          />
          {errors.password?.type === 'required' && <span>This field is required</span>}
          {errors.password?.type === 'minLength' && <span>Password must be 8 characters long</span>}
        </div>

        <div className="form-control">
          <a className="link link-hover text-sm text-blue-600">
            Forgot password?
          </a>
          <button className="btn btn-neutral mt-4 w-full">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
