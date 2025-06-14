import { apiFetch, withPagination } from "./api";
export const laporanMutasiPemasukan = (
  page = 1,
  paginate = 100,
  q = "",
  kode_barang = "",
) => {
  const params: Record<string, any> = {
    page,
    paginate,
    q,
  };

  if (kode_barang !== undefined) {
    params["kode-barang"] = kode_barang; 
  }

  return params;
};
// LaporanMutasi
export const getLaporanMutasi = (params = withPagination()) =>
  apiFetch("/laporan-mutasi", {}, params);
export const getLaporanMutasiPemasukan = (params = laporanMutasiPemasukan()) =>
  apiFetch("/laporan-mutasi/pemasukan", {}, params);