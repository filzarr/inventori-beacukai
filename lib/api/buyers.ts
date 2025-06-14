import { apiFetch, withPagination } from "./api";

// Buyers
export const getBuyers = (params = withPagination()) =>
  apiFetch("/buyers", {}, params);
export const getBuyer = (id: string) => apiFetch(`/buyers/${id}`);
export const createBuyer = (data: any) =>
  apiFetch("/buyers", { method: "POST", body: JSON.stringify(data) });
export const updateBuyer = (id: string, data: any) =>
  apiFetch(`/buyers/${id}`, { method: "PUT", body: JSON.stringify(data) });
export const deleteBuyer = (id: string) =>
  apiFetch(`/buyers/${id}`, { method: "DELETE" });