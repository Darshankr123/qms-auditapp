import { AuthProvider } from "@/auth/context/auth-provider";

export const metadata = {
  title: "Qms Audits",
  description: "",
  keywords: "Qms,akshayakalpa",
  themeColor: "#000000",
  manifest: "/manifest.json",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: [
    {
      rel: "icon",
      url: "/favicon/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
  ],
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      {/* <script src="" async defer /> */}

      <body>
        <AuthProvider>
          {/* <GlobalDataProvider>
            <LocalizationProvider>
              <SettingsProvider
                defaultSettings={{
                  themeMode: "light",
                  themeDirection: "ltr",
                  themeContrast: "default",
                  themeLayout: "vertical",
                  themeColorPresets: "default",
                  themeStretch: false,
                }}
              >
                <ThemeProvider>
                  <MotionLazy>
                    <SnackbarProvider>
                      <SettingsDrawer />
                      <ProgressBar />
                      <AuthConsumer>{children}</AuthConsumer>
                    </SnackbarProvider>
                  </MotionLazy>
                </ThemeProvider>
              </SettingsProvider>
            </LocalizationProvider>
          </GlobalDataProvider> */}
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
