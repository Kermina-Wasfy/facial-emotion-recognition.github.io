"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(/^[0-9+]+$/, "Only numbers and + sign are allowed")
    .min(8, "Phone number must be at least 8 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form Data:", data);
  };
  return (
    <section
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url('/contact-bg.png')`,
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)"
        
       }}
    >
      <div className="container mx-auto py-12 rounded-lg mt-24">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="flex flex-col justify-start text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Egestas dui mattis
              vulputate vel. Lorem ipsum dolor sit amet consectetur. Egestas dui
              mattis vulputate vel.
            </p>
          </div>

          {/* Right Column (Form) */}
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6"
            >
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-lg">Name*</label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:border-black"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-lg">Email*</label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Enter your mail"
                  className="w-full p-3 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:border-black"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-lg">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  inputMode="numeric"
                  placeholder="Enter your number"
                  {...register("phone", {
                    pattern: {
                      value: /^[0-9+]+$/,
                      message: "Only numbers and + sign are allowed",
                    },
                  })}
                  onKeyDown={(e) => {
                    const allowedKeys = [
                      "Backspace",
                      "Delete",
                      "ArrowLeft",
                      "ArrowRight",
                      "Tab",
                    ];
                    if (!/[0-9+]/.test(e.key) && !allowedKeys.includes(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  className="w-full p-3 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:border-black"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-white text-lg">
                  Message*
                </label>
                <textarea
                  {...register("message")}
                  placeholder="Write your message please"
                  rows={5}
                  className="w-full p-3 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:border-black"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-auto self-center px-20 py-3 bg-transparent text-white border-2 border-white rounded-md text-center text-lg font-medium hover:bg-white hover:text-black transition"
              >
                View all Projects
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
