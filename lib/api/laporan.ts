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
export const laporanquery = (
  page = 1,
  paginate = 100,
  q = "",
  kategori? : string,
) => {
  const params: Record<string, any> = {
    page,
    paginate,
    q,
    kategori
  };

  if (kategori !== undefined) {
    params["kategori"] = kategori; 
  }

  return params;
};
// LaporanMutasi
export const getLaporanMutasi = (params = laporanquery()) =>
  apiFetch("/laporan-mutasi", {}, params);
export const getLaporanMutasiPemasukan = (params = laporanMutasiPemasukan()) =>
  apiFetch("/laporan-mutasi/pemasukan", {}, params);