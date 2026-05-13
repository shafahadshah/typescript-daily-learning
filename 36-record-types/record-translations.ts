type Language = "en" | "ur";

type TranslationKeys =
  | "welcome"
  | "logout";

const translations: Record<
  Language,
  Record<TranslationKeys, string>
> = {
  en: {
    welcome: "Welcome",
    logout: "Logout",
  },

  ur: {
    welcome: "خوش آمدید",
    logout: "لاگ آؤٹ",
  },
};

console.log(translations); 