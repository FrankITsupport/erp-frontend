// modules/admin/mocks/admin.handlers.ts
import { http, HttpResponse } from "msw";

export const authHandlers = [
  http.post("/api/login", async ({ request }: { request: Request }) => {
    const body = await request.json();
    if (body.username === "admin" && body.password === "1234") {
      return HttpResponse.json({ token: "mock-token-123" });
    }
    return HttpResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }),

  http.get("/api/profile", () => {
    return HttpResponse.json({
      id: 1,
      username: "admin",
      role: "superuser",
    });
  }),
];
