import { getProductsIds } from "@shopware-js-api-wrapper";

describe("shopware-6-client - E2E - ProductService - getProductsIds", () => {
  it("should fetch product ids", async () => {
    const result = await getProductsIds();
    expect(result).toMatchSnapshot();
  });
});
