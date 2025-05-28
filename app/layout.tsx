import { Inter } from "next/font/google";
import "@mantine/core/styles.css";
import "./globals.css";
import {
  ColorSchemeScript,
  createTheme,
  mantineHtmlProps,
  MantineProvider,
  Stack,
} from "@mantine/core";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jesper Svensson",
  description: "Personal website of Jesper Svensson",
};

const theme = createTheme({
  cursorType: "pointer",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <Stack justify="space-between" className="min-h-screen">
            {children}
            <Footer />
          </Stack>
        </MantineProvider>
      </body>
    </html>
  );
}
