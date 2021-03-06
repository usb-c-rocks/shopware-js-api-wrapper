import { removeCartItem } from "@shopware-js-api-wrapper";
import { defaultInstance } from "../../../src/apiService";
import { random } from "faker";

jest.mock("../../../src/apiService");
const mockedApiInstance = defaultInstance as jest.Mocked<
  typeof defaultInstance
>;

describe("CartService - removeCartItem", () => {
  const mockedDelete = jest.fn();
  beforeEach(() => {
    jest.resetAllMocks();
    mockedApiInstance.invoke = {
      delete: mockedDelete,
    } as any;
  });

  it("should call valid endpoint and return cart without deleted item", async () => {
    mockedDelete.mockResolvedValueOnce({
      data: {
        data: {
          name: random.uuid(),
          token: random.uuid(),
          lineItems: [],
        },
      },
    });

    const lineItemId = "geawq90a5dab4206843d0vc3sa8wefdf";

    const result = await removeCartItem(lineItemId);
    expect(mockedDelete).toBeCalledTimes(1);
    expect(mockedDelete).toBeCalledWith(
      "/sales-channel-api/v1/checkout/cart/line-item/geawq90a5dab4206843d0vc3sa8wefdf"
    );
    expect(result.lineItems).toHaveLength(0);
  });

  it("should throw unhandled 400 error when non-existing lineItemId given", async () => {
    mockedDelete.mockRejectedValueOnce(
      new Error("400: CHECKOUT__CART_LINEITEM_NOT_FOUND")
    );

    const lineItemId = "someNonExistingLineItemId";

    expect(removeCartItem(lineItemId)).rejects.toThrow(
      "400: CHECKOUT__CART_LINEITEM_NOT_FOUND"
    );
    expect(mockedDelete).toBeCalledTimes(1);
    expect(mockedDelete).toBeCalledWith(
      "/sales-channel-api/v1/checkout/cart/line-item/someNonExistingLineItemId"
    );
  });
});
