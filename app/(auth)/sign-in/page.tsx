"use client";
import AuthForm from "@/components/forms/AuthForms";
import { signInSchema } from "@/lib/validations";

const Page = () => {
  return (
    <AuthForm
      formType="SIGN_IN"
      defaultValues={{ email: "", username: "" }}
      schema={signInSchema}
      onSubmit={(data) =>
        Promise.resolve({
          success: true,
          data,
        })
      }
    />
  );
};

export default Page;
