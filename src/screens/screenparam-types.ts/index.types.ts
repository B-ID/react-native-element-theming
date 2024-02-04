export type RootStackParamList = {
  onboarding: undefined;
  logout: undefined;
  home: undefined;
  settings: undefined;
  verifyOTP: undefined;
};

const evenNumber = (value: number) => {
  // check if number is even
  if (value % 2 === 0) return "even";
  return "odd";
};
