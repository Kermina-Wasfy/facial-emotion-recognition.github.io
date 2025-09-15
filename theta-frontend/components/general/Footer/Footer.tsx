"use client";
import { AxiosError } from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { postContact } from "@/apis/pages/contact";
import { useQuery } from "@tanstack/react-query";
import { getMobileApps } from "@/apis/main";


const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Too long"),
  phone: z.string().min(8, "Phone must be at least 8 digits"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Footer() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  
  const {
    data: mobileAppsData,
    isLoading: appsLoading,
    error: appsError,
  } = useQuery({
    queryKey: ["mobile-apps-footer"],
    queryFn: getMobileApps,
  });

  const mobileApps = mobileAppsData?.mobile_apps || [];
  const androidApp = mobileApps.find(
    (app) => app.os.toLowerCase() === "android"
  );
  const iosApp = mobileApps.find((app) => app.os.toLowerCase() === "ios");

  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
  });

 async function onSubmit(values: ContactFormValues) {
  setServerError(null);
  setSuccessMessage(null);

  try {
    const res = await postContact(values);
    if (res.success) {
      setSuccessMessage(res.message || "Message sent successfully!");
      reset();
    } else {
      setServerError(
        res.message || "Something went wrong while sending the message."
      );
    }
  } catch (err) {
    const axiosErr = err as AxiosError<{ message?: string }>;
    const msg =
      axiosErr.response?.data?.message ||
      "Something went wrong while sending the message.";
    console.error(axiosErr);
    setServerError(msg);
  }
}


  return (
    <footer className="container mx-auto bg-white border-t border-gray-200 py-10 relative shadow-[0_-20px_30px_-20px_rgba(0,0,0,0.3)]">
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <Image src="/logo.svg" alt="Theta Logo" width={120} height={60} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-6">
        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-[#151313]">Quick links</h4>
          <ul className="space-y-2 text-[#646363] text-sm">
            <li>
              <Link
                href="/#about"
                className="hover:text-[#126F42] transition-colors"
              >
                About Theta
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="hover:text-[#126F42] transition-colors"
              >
                Contact us
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="hover:text-[#126F42] transition-colors"
              >
                Privacy & Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h4 className="font-semibold mb-4 text-[#151313]">Download app</h4>
          <div className="flex flex-col gap-2 w-max">
            {appsLoading && (
              <p className="text-sm text-gray-500">Loading apps...</p>
            )}
            {appsError && (
              <p className="text-sm text-red-500">Failed to load apps</p>
            )}

            {androidApp && (
              <a
                href={androidApp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-[#062516] px-12 py-1 text-sm text-[#062516] rounded-md hover:bg-[#126F42] hover:text-[#FFFFFF]"
              >
                <Image
                  src="/playstore-icon.svg"
                  alt="Play Store"
                  width={14}
                  height={14}
                />
                Play store
              </a>
            )}
            {iosApp && (
              <a
                href={iosApp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-[#062516] px-12 py-1 text-sm text-[#062516] rounded-md hover:bg-[#126F42] hover:text-[#FFFFFF]"
              >
                <Image
                  src="/appstore-icon.svg"
                  alt="App Store"
                  width={14}
                  height={14}
                />
                App store
              </a>
            )}
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <h4 className="font-semibold mb-4 text-[#151313]">Contact us</h4>

          {serverError && (
            <div className="mb-3 text-sm text-red-600">{serverError}</div>
          )}
          {successMessage && (
            <div className="mb-3 text-sm text-green-600">{successMessage}</div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
            noValidate
          >
            {/* Name */}
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-[#3D3D3D] mb-1"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className={`border rounded-md p-2 text-sm ${
                  errors.name ? "border-red-500" : "border-[#ECECEC]"
                }`}
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="text-sm font-semibold text-[#3D3D3D] mb-1"
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                className={`border rounded-md p-2 text-sm ${
                  errors.phone ? "border-red-500" : "border-[#ECECEC]"
                }`}
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
                      if (
                        !/[0-9+]/.test(e.key) &&
                        !allowedKeys.includes(e.key)
                      ) {
                        e.preventDefault();
                      }
                    }}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-[#3D3D3D] mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Someone@something.com"
                className={`border rounded-md p-2 text-sm ${
                  errors.email ? "border-red-500" : "border-[#ECECEC]"
                }`}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Subject */}
            <div className="flex flex-col">
              <label
                htmlFor="subject"
                className="text-sm font-semibold text-[#3D3D3D] mb-1"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Subject"
                className={`border rounded-md p-2 text-sm ${
                  errors.subject ? "border-red-500" : "border-[#ECECEC]"
                }`}
                {...register("subject")}
              />
              {errors.subject && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col md:col-span-2">
              <label
                htmlFor="message"
                className="text-sm text-[#3D3D3D] font-semibold mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message here"
                rows={3}
                className={`border rounded-md p-2 text-sm ${
                  errors.message ? "border-red-500" : "border-[#ECECEC]"
                }`}
                {...register("message")}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="relative z-10 bg-[#126F42] text-white px-5 py-4 text-sm rounded-md md:col-span-2 
             shadow hover:shadow-2xl cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </div>

      {/* Left Bottom Image */}
      <div className="container absolute bottom-0 left-0 z-0">
        <Image src="/footer.png" alt="Vegetables" width={200} height={200} />
      </div>
    </footer>
  );
}
