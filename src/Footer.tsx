import React from "react";
import logoX from './icons/x.png';
import logoCoingecko from './icons/coingecko.png';
import logoDiscord from './icons/discord.png';
import logoTradeogre from './icons/tradeogre.png';
import logoWebsite from './icons/website.png';
import logoXeggex from './icons/xeggex.png';
export function Footer({ signOut, mnemonic }) {
  return (
    <article>
    <div className="logo-container">
    <a href="https://www.ai-depin.org" target="_blank" rel="noopener noreferrer">
        <img src={logoWebsite} alt="Logo" className="logo" />
    </a>
    <a href="https://twitter.com/AIDePIN_org" target="_blank" rel="noopener noreferrer">
        <img src={logoX} alt="Logo" className="logo" />
    </a>
        <a href="https://discord.gg/3HCqPzSsuZ" target="_blank" rel="noopener noreferrer">
        <img src={logoDiscord} alt="Logo" className="logo" />
    </a>
    <a href="https://xeggex.com/market/AIDP_USDT" target="_blank" rel="noopener noreferrer">
        <img src={logoXeggex} alt="Logo" className="logo" />
    </a>
    <a href="https://tradeogre.com/exchange/AIDP-USDT" target="_blank" rel="noopener noreferrer">
        <img src={logoTradeogre} alt="Logo" className="logo" />
    </a>
    <a href="https://www.coingecko.com/en/coins/ai-depin" target="_blank" rel="noopener noreferrer">
        <img src={logoCoingecko} alt="Logo" className="logo" />
    </a>
    </div>
     
      <footer>
        <div className="grid">
          <button onClick={signOut}>Sign out</button>
          <button
            className="secondary"
            onClick={(event) => {
              const target = event.target as HTMLButtonElement;
              navigator.clipboard.writeText(mnemonic);
              target.disabled = true;
              setInterval(() => (target.disabled = false), 2000);
            }}
          >
            Copy your secret 12 words to memory
          </button>
        </div>
      </footer>
    </article>
  );
}
