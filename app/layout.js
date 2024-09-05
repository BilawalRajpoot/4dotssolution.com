import { ToastContainer } from 'react-toastify';
import './globals.css';

export default function RootLayout({ children }) {
  return <html lang="en">
    <ToastContainer style={{ zIndex: 999999999999999999999999999999999999999999999999999999999 }} />

    {children}
  </html>;
}
