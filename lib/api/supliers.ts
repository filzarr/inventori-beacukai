import { apiFetch, withPagination } from "./api";

// Supliers
export const getSupliers = (params = withPagination()) =>
  apiFetch("/supliers", {}, params);
export const getSuplier = (id: string) => apiFetch(`/supliers/${id}`);
export const createSuplier = (data: any) =>
  apiFetch("/supliers", { method: "POST", body: JSON.stringify(data) });
export const updateSuplier = (id: string, data: any) =>
  apiFetch(`/supliers/${id}`, { method: "PUT", body: JSON.stringify(data) });
export const deleteSuplier = (id: string) =>
  apiFetch(`/supliers/${id}`, { method: "DELETE" });