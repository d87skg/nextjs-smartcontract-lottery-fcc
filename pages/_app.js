import "../styles/globals.css";
import { Web3Modal } from "@web3modal/react";
import { WagmiConfig } from "wagmi";
import { wagmiConfig } from "../wagmi";

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}
