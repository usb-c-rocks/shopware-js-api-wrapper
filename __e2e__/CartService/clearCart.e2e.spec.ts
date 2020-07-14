import { clearCart, update } from "@shopware-js-api-wrapper";

describe("shopware-6-client - E2E - CartService - clearCart", () => {
  beforeEach(() => {
    update({ contextToken: "" });
  });
  it("should clear cart response without products", async () => {
    const result = await clearCart();
    result.contextToken = "mockedContextToken";
    expect(result).toMatchSnapshot();
  });

  it("should clear cart response with products", async () => {
    const result = await clearCart();
    result.contextToken = "mockedContextToken";
    expect(result).toMatchSnapshot();
  });
});
