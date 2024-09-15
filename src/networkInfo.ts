export interface INetworkInfo {
  displayName: string;
  getTransactionURL: (arg: string) => string;
  getThumbnailURL: (arg: string) => string;
}

const aidpcoinMainnet: INetworkInfo = {
  displayName: "Aidpcoin Mainnet",
  getTransactionURL: (id: string) => {
    return (
      "https://explorer.ai-depin.org/tx/" +
      id
    );
  },
  getThumbnailURL(assetName: string) {
    const baseURL =
      "https://explorer.ai-depin.org/thumbnail?assetName=";
    return baseURL + encodeURIComponent(assetName);
  },
};

const aidpcoinTestnet: INetworkInfo = {
  displayName: "Aidpcoin Testnet",
  getThumbnailURL: (assetName) => {
    const baseURL = "https://explorer.ai-depin.org/thumbnail?assetName=";
    return baseURL + encodeURIComponent(assetName);
  },
  getTransactionURL: (id: string) => {
    return "https://explorer.ai-depin.org/tx/" + id;
  },
};

const evrmoreMainnet: INetworkInfo = {
  displayName: "Evrmore Mainnet",
  getThumbnailURL(assetName) {
    const baseURL =
      "https://evr-explorer-mainnet.ting.finance/thumbnail?assetName=";
    return baseURL + encodeURIComponent(assetName);
  },
  getTransactionURL: (id: string) => {
    return (
      "https://evr-explorer-mainnet.ting.finance/index.html?route=TRANSACTION&id=" +
      id
    );
  },
};

export interface INetworks {
  aidp: INetworkInfo;
  "aidp-test": INetworkInfo;
  evr: INetworkInfo;
}

const asdf: INetworks = {
  aidp: aidpcoinMainnet,
  "aidp-test": aidpcoinTestnet,
  evr: evrmoreMainnet,
};

export default asdf;
