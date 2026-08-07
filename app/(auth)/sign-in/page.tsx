"use client";
import AuthForm from "@/components/forms/AuthForms";
import { signInWithCredentials } from "@/lib/actions/auth.actions";
import { signInSchema } from "@/lib/validations";

const Page = () => {
  return (
    <AuthForm
      formType="SIGN_IN"
      defaultValues={{ email: "", password: "" }}
      schema={signInSchema}
      onSubmit={signInWithCredentials}
    />
  );
};

export default Page;
