import { CHAIN_NAMESPACES, CustomChainConfig } from "@web3auth/base";

export const CHAIN_CONFIG = {
  mainnet: {
    displayName: 'Binance Smart Chain Testnet',
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: '0x61',
    rpcTarget: `https://binance-testnet-node-197c.settlemint.com/bpaas-c2d7ed1bf72AB0b5Db82D5c405f9C677355d5914`,
    blockExplorer: 'https://testnet.bscscan.com/',
    ticker: 'BNB',
    tickerName: 'Binance Coin',
  } as CustomChainConfig,
  solana: {
    chainNamespace: CHAIN_NAMESPACES.SOLANA,
    rpcTarget: "https://api.mainnet-beta.solana.com",
    blockExplorer: "https://explorer.solana.com/",
    chainId: "0x1",
    displayName: "Solana Mainnet",
    ticker: "SOL",
    tickerName: "Solana",
  } as CustomChainConfig,
  polygon: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    rpcTarget: "https://polygon-rpc.com",
    blockExplorer: "https://polygonscan.com/",
    chainId: "0x89",
    displayName: "Polygon Mainnet",
    ticker: "matic",
    tickerName: "Matic",
  } as CustomChainConfig,
} as const;

export type CHAIN_CONFIG_TYPE = keyof typeof CHAIN_CONFIG;
