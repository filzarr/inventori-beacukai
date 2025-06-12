// components/utils/tokenRefresher.tsx
"use client";

import { useEffect } from "react";

export default function TokenRefresher({ token }: { token?: string }) {
  useEffect(() => {
    if (token) {
      // Cegah reload loop dengan sessionStorage
      const hasRefreshed = sessionStorage.getItem("token-refreshed");
      if (!hasRefreshed) {
        sessionStorage.setItem("token-refreshed", "true");
        window.location.reload();
      }
    }
  }, [token]);

  return null;
}