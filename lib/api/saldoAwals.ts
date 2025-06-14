import { apiFetch, withPagination } from "./api";

// Saldo Awal
export const getSaldoAwals = (params = withPagination()) =>
  apiFetch("/saldo-awals", {}, params);

export const getSaldoAwal = (id: string) =>
  apiFetch(`/saldo-awals/${id}`);

export const createSaldoAwal = (data: any) =>
  apiFetch("/saldo-awals", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const updateSaldoAwal = (id: string, data: any) =>
  apiFetch(`/saldo-awals/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

export const deleteSaldoAwal = (id: string) =>
  apiFetch(`/saldo-awals/${id}`, {
    method: "DELETE",
  });
