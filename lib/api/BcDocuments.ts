import { apiFetch, withPagination } from "./api";

// BC Documents
export const getBcDocuments = (params = withPagination()) =>
  apiFetch("/bc-documents", {}, params);
export const getBcDocument = (id: string) => apiFetch(`/bc-documents/${id}`);
export const createBcDocument = (data: any) =>
  apiFetch("/bc-documents", { method: "POST", body: JSON.stringify(data) });
export const updateBcDocument = (id: string, data: any) =>
  apiFetch(`/bc-documents/${id}`, { method: "PUT", body: JSON.stringify(data) });
export const deleteBcDocument = (id: string) =>
  apiFetch(`/bc-documents/${id}`, { method: "DELETE" });