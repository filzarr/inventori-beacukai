import { apiFetch, withPagination } from "./api";


// ProductMovement
export const getProductions = (params = withPagination()) =>
  apiFetch("/productions", {}, params);
export const getProduction = (id: string) => apiFetch(`/productions/${id}`);
export const createProduction = (data: any) =>
  apiFetch("/productions", { method: "POST", body: JSON.stringify(data) });
export const updateProduction = (id: string, data: any) =>
  apiFetch(`/productions/${id}`, { method: "PUT", body: JSON.stringify(data) });
export const deleteProduction = (id: string) =>
  apiFetch(`/productions/${id}`, { method: "DELETE" });