import { getAvailableSalutations } from "@shopware-js-api-wrapper";

describe("shopware-6-client - E2E - ContextService - getAvailableCountries", () => {
  it("should test salutations response", async () => {
    const result = await getAvailableSalutations();
    expect(result).toMatchSnapshot();
  });
});
