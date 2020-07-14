import { getAvailableShippingMethods } from "@shopware-js-api-wrapper";

describe("shopware-6-client - E2E - ContextService - getAvailableShippingMethods", () => {
  it("should test shoppingMethods response", async () => {
    const result = await getAvailableShippingMethods();
    expect(result).toMatchSnapshot();
  });
});
