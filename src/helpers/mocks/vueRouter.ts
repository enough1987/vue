import router from "../../router/index";
import { vi } from "vitest";

vi.mock("vue-router", async () => {
  const actual = await vi.importActual("vue-router");

  return {
    ...(actual || {}),
    useRoute: vi.fn(),
    useRouter: vi.fn(),
  };
});

export const mountRouterSetting = {
  global: {
    plugins: [router],
    stubs: ["router-link", "router-view"],
  },
};
