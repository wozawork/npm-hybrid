import { configurations } from "./configurations";
import { getBioCatchModeByClient, getStartupCustomerSessionId } from "./Util";
import SDK from "./sdk";

export const startBioCatchService = () => {
  console.log(SDK);

  const csidValue = getStartupCustomerSessionId();
  if (!csidValue) {
    console.error(
      "BioCatch startup aborted: customerSessionId was not found in injected meta tag or cookie.",
    );
    return;
  }

  const runtimeClientConfiguration = {
    ...configurations.client_side_configurations,
    collectionSettings: {
      ...(configurations.client_side_configurations.collectionSettings || {}),
      mode: getBioCatchModeByClient(),
    },
  };

  SDK.start(
    configurations.baseUrl,
    configurations.cid,
    csidValue,
    runtimeClientConfiguration,
    configurations.serverVersion,
  );
};

export const stopBioCatchService = () => {
  SDK.stop();
};

export const pauseBioCatchService = () => {
  SDK.pause();
};

export const resumeBioCatchService = () => {
  SDK.resume();
};

export const flushBioCatchService = () => {
  SDK.flush();
};

export const updateCustomerSessionIdBioCatchService = (customerSessionId) => {
  // SDK method name uses trailing ID in uppercase.
  SDK.updateCustomerSessionID(customerSessionId);
};
