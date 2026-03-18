// export configuration from here

export const configurations = {
  client_side_configurations: {
    clientSettings: {
      enableFlush: true,
    },
    collectionSettings: {
      elementSettings: {
        keyEventsMaskSpecialChars: true,
        customElementAttribute: "data-mb-id",
      },
      mode:{
        agentType: "primary",
        collectionMode: "full",
      }
    },
    mutationMaxChunkSize: 40,
    mutationChunkDelayMs: 2000,
  },
  cid:"magnetotest",
  baseUrl: "https://wup-magnetotest.au.v2.customers.biocatch.com",
  serverVersion:4
};
