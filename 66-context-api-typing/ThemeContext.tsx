import {
  createContext,
  useState,
} from "react";

type Theme =
  "light" |
  "dark";

type ThemeContextType = {
  theme: Theme;

  setTheme:
    React.Dispatch<
      React.SetStateAction<Theme>
    >;
};

export const ThemeContext =
  createContext<
    ThemeContextType | null
  >(null);

export function ThemeProvider({
  children,
}: {
  children:
    React.ReactNode;
}) {

  const [
    theme,
    setTheme,
  ] = useState<Theme>(
    "light"
  );

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}