import http from './http';
export const api = {
  taxMatterList: 'common/tax/matter/getDownDrop', // 税金事项下拉列表
};

// 税种
export function getTaxMatterList () {
  return http.get(api.taxMatterList, {
    hideErrorToast: true
  });
}