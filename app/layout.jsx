export const metadata = {
  title: "Fresh Air Media",
  description: "Home Page",
};

import "./reset.css";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
