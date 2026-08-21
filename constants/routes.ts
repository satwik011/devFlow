const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  ASK_QUESTION: "/ask-question",
  PROFILE: (id: string) => `/profile/${id}`,
  QUESTION: (id: string) => `/questions/${id}`,
  SIGN_IN_WITH_OAUTH: `signin-with-oauth`,
  TAGS: (id: string) => `/tags/${id}`,
  QUESTION_DETAILS: (id: string) => `/questions/${id}`,
};

export default ROUTES;
