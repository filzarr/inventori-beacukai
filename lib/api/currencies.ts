import { apiFetch, withPagination } from "./api";


// Currencies
export const getCurrencies = (params = withPagination()) =>
  apiFetch("/currencies", {}, params);
export const getCurrency = (id: string) => apiFetch(`/currencies/${id}`);
export const createCurrency = (data: any) =>
  apiFetch("/currencies", { method: "POST", body: JSON.stringify(data) });
export const updateCurrency = (id: string, data: any) =>
  apiFetch(`/currencies/${id}`, { method: "PUT", body: JSON.stringify(data) });
export const deleteCurrency = (id: string) =>
  apiFetch(`/currencies/${id}`, { method: "DELETE" });