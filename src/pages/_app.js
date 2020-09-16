import "../styles/global.scss";

/** Default Next.js app component */
/** entrypoint to render pages */
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
