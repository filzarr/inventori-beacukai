import { apiFetch, withPagination } from "./api";

// LaporanMutasi
export const getLaporanMutasi = (params = withPagination()) =>
  apiFetch("/laporan-mutasi", {}, params);