import { defaultInstance } from "../../../src/apiService";
import {
  setCurrentShippingAddress,
  update,
} from "@shopware-js-api-wrapper";

jest.mock("../../../src/apiService");
const mockedApiInstance = defaultInstance as jest.Mocked<
  typeof defaultInstance
>;

describe("ContextService - setCurrentShippingAddress", () => {
  const mockedPatch = jest.fn();
  beforeEach(() => {
    jest.resetAllMocks();
    mockedApiInstance.invoke = {
      patch: mockedPatch,
    } as any;
  });

  describe("with contextToken given", () => {
    beforeEach(() => {
      update({ contextToken: "NWDdcRTTWoPk4Ngv13z5NDMMsDFRb9W6" });
    });

    it("should return context token", async () => {
      mockedPatch.mockResolvedValueOnce({
        data: { "sw-context-token": "NWDdcRTTWoPk4Ngv13z5NDMMsDFRb9W6" },
      });

      const newShippingAddressId = "45f96f681f9d4834b29e9e15df3a7149";

      const result = await setCurrentShippingAddress(newShippingAddressId);

      expect(mockedPatch).toBeCalledTimes(1);
      expect(mockedPatch).toBeCalledWith("/store-api/v1/context", {
        shippingAddressId: "45f96f681f9d4834b29e9e15df3a7149",
      });

      expect(result.contextToken).toEqual("NWDdcRTTWoPk4Ngv13z5NDMMsDFRb9W6");
    });
  });

  describe("without contextToken given", () => {
    beforeEach(() => {
      update({ contextToken: undefined });
    });

    it("should return context token", async () => {
      mockedPatch.mockResolvedValueOnce({
        data: { "sw-context-token": "NWDdcRTTWoPk4Ngv13z5NDMMsDFRb9W6" },
      });

      const newShippingAddressId = "45f96f681f9d4834b29e9e15df3a7149";

      const result = await setCurrentShippingAddress(newShippingAddressId);
      expect(mockedPatch).toBeCalledTimes(1);
      expect(mockedPatch).toBeCalledWith("/store-api/v1/context", {
        shippingAddressId: "45f96f681f9d4834b29e9e15df3a7149",
      });

      expect(result.contextToken).toEqual("NWDdcRTTWoPk4Ngv13z5NDMMsDFRb9W6");
    });
  });
});
