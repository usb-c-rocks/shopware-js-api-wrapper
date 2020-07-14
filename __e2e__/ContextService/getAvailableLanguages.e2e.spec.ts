import { getAvailableLanguages } from "@shopware-js-api-wrapper";

describe("shopware-6-client - E2E - ContextService - getAvailableLanguages", () => {
  it("should test languages response", async () => {
    const result = await getAvailableLanguages();
    expect(result).toMatchSnapshot();
  });
});
