import '@/styles/globals.css'
/* Additional styles */
import '@/styles/additional-styles/utility-patterns.css';
import '@/styles/additional-styles/custom-fonts.css';
import '@/styles/additional-styles/range-slider.css';
import '@/styles/additional-styles/toggle-switch.css';
import '@/styles/additional-styles/theme.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
