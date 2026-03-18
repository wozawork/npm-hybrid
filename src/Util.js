export const csid = () => {
  //random char generator
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 36; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

const getMetaContent = (metaName) => {
  if (typeof document === "undefined") {
    return "";
  }

  const meta = document.querySelector(`meta[name="${metaName}"]`);
  return (meta?.getAttribute("content") || "").trim();
};

const getCookieValue = (cookieName) => {
  if (typeof document === "undefined") {
    return "";
  }

  const escapedCookieName = cookieName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const cookieMatch = document.cookie.match(
    new RegExp(`(?:^|; )${escapedCookieName}=([^;]*)`),
  );
  return cookieMatch ? decodeURIComponent(cookieMatch[1]).trim() : "";
};

export const getInjectedCustomerSessionId = () => {
  // Android host app injects this as <meta name="customerSessionId" content="..." />.
  const fromMetaTag = getMetaContent("customerSessionId");
  if (fromMetaTag) {
    return fromMetaTag;
  }

  // Fallback in case host app uses cookie injection instead of meta tag.
  return getCookieValue("customerSessionId");
};

export const getStartupCustomerSessionId = () => {
  return getInjectedCustomerSessionId();
};

const getUserAgent = () => {
  if (typeof navigator === "undefined") {
    return "";
  }

  return navigator.userAgent || "";
};

export const isMobileWebView = () => {
  const ua = getUserAgent();

  if (!ua) {
    return false;
  }

  const isAndroid = /Android/i.test(ua);
  const isIOS = /iPhone|iPad|iPod/i.test(ua);

  // Android WebView usually contains "wv".
  const isAndroidWebView = isAndroid && /; wv\)|\bwv\b/i.test(ua);

  // iOS WebView generally has AppleWebKit without Safari in the UA string.
  const isIOSWebView = isIOS && /AppleWebKit/i.test(ua) && !/Safari/i.test(ua);

  return isAndroidWebView || isIOSWebView;
};

export const getBioCatchModeByClient = () => {
  if (isMobileWebView()) {
    return {
      agentType: "secondary",
      collectionMode: "lean",
    };
  }

  return {
    agentType: "primary",
    collectionMode: "full",
  };
};
