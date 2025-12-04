import { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptAdded = useRef(false);

  useEffect(() => {
    if (scriptAdded.current || !containerRef.current) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FX_IDC:USDNGN", title: "USD/NGN" },
        { proName: "TVC:GOLD", title: "Gold" },
        { proName: "FX_IDC:EURNGN", title: "EUR/NGN" },
        { proName: "FX_IDC:NGNGMX", title: "NGN/GMX" },
        { proName: "FX_IDC:NGNTZX", title: "NGN/TZX" },
        { proName: "FX_IDC:ZARNGN", title: "ZAR/NGN" },
        { proName: "FX_IDC:AUDNGN", title: "AUD/NGN" }
      ],
      colorTheme: "light",
      locale: "en",
      isTransparent: false,
      showSymbolLogo: true,
      displayMode: "adaptive"
    });

    containerRef.current.appendChild(script);
    scriptAdded.current = true;

    return () => {
      scriptAdded.current = false;
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(TradingViewWidget);