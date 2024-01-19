import { CardWrapper } from "./card-wrapper";

export function LoginForm() {
  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      Login form!
    </CardWrapper>
  );
}
