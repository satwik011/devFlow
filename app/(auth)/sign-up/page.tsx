"use client";
import AuthForm from "@/components/forms/AuthForms";
import { SignUpSchema } from "@/lib/validations";

const Page = () => {
  return (
    <AuthForm
      formType="SIGN_UP"
      defaultValues={{ email: "", username: "", name: "", password: "" }}
      schema={SignUpSchema}
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
