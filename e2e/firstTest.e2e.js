import { device, expect, element, by } from "detox";

describe("Example", () => {
  beforeEach(async () => {
    await device.launchApp();
  });

  test("should have welcome message", async () => {
    await expect(element(by.id("welcome"))).toBeVisible();
  });
});
