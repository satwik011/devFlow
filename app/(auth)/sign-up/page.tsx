"use client";
import AuthForm from "@/components/forms/AuthForms";
import { signUpWithCredentials } from "@/lib/actions/auth.actions";
import { SignUpSchema } from "@/lib/validations";

const Page = () => {
  return (
    <AuthForm
      formType="SIGN_UP"
      defaultValues={{ email: "", username: "", name: "", password: "" }}
      schema={SignUpSchema}
      onSubmit={signUpWithCredentials}
    />
  );
};

export default Page;
