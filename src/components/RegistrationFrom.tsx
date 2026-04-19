import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Create Account
        </h2>
        <p className="text-gray-500 text-center mt-2">
          Register to get started
        </p>

        {/* Form */}
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Register
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="text-gray-400 text-sm">OR</span>
            <hr className="flex-1 border-gray-300" />
          </div>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Already have an account?{" "}
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;


// This is code with react-hook-form and zod -> need to write more code here

// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

// // Zod Schema (validation rules)
// const schema = z
//   .object({
//     name: z.string().min(3, "Name must be at least 3 characters"),
//     email: z.string().email("Invalid email address"),
//     password: z.string().min(6, "Password must be at least 6 characters"),
//     confirmPassword: z.string(),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords do not match",
//     path: ["confirmPassword"],
//   });

// const RegistrationForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(schema),
//   });

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        
//         <h2 className="text-2xl font-bold text-gray-800 text-center">
//           Create Account
//         </h2>
//         <p className="text-gray-500 text-center mt-2">
//           Register to get started
//         </p>

//         <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">

//           {/* Name */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">
//               Full Name
//             </label>
//             <input
//               {...register("name")}
//               placeholder="Enter your full name"
//               className="w-full px-4 py-2 border rounded-lg"
//             />


//             // error message dekhauna lai code lekhna baki



//           {/* Email */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">
//               Email
//             </label>
//             <input
//               {...register("email")}
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 border rounded-lg"
//             />
//             

//           {/* Password */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               {...register("password")}
//               placeholder="Enter password"
//               className="w-full px-4 py-2 border rounded-lg"
//             />
//             {errors.password && (
//               <p className="text-red-500 text-sm">{errors.password.message}</p>
//             )}
//           </div>

//           {/* Confirm Password */}
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               {...register("confirmPassword")}
//               placeholder="Confirm password"
//               className="w-full px-4 py-2 border rounded-lg"
//             />
//             {errors.confirmPassword && (
//               <p className="text-red-500 text-sm">
//                 {errors.confirmPassword.message}
//               </p>
//             )}
//           </div>

//           {/* Button */}
//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
//           >
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegistrationForm;