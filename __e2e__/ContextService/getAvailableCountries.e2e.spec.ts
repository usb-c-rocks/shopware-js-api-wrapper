import { getAvailableCountries } from "@shopware-js-api-wrapper";

describe("shopware-6-client - E2E - ContextService - getAvailableCountries", () => {
  it("should test countries response", async () => {
    const result = await getAvailableCountries();
    expect(result).toMatchSnapshot();
  });
});
