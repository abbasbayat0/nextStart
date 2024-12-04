import "./globals.css";

export const metadata = {
  title: "nextJS training",
  description: "learning nextJS in here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
