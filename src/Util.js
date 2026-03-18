export const csid = () => {
  //random char generator
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 36; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
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
