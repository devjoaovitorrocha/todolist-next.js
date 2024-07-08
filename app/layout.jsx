import "./globals.css";


export const metadata = {
  title: "To do list Next",
  description: "lorem dsdfnjsdfdsfbkf dsjsdfnjsd sdfjsndfkjfs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
