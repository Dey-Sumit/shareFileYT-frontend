import axios from "axios";

import "../../styles/globals.css";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_ENDPOINT;

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid h-screen font-serif text-white bg-gray-900 place-items-center">
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
