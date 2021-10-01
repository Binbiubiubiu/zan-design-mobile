export default {
  name: '姓名',
  tel: '電話',
  save: '保存',
  confirm: '確認',
  cancel: '取消',
  delete: '刪除',
  loading: '加載中...',
  noCoupon: '暫無優惠券',
  nameEmpty: '請填寫姓名',
  confirmDelete: '確定要刪除嗎',
  telInvalid: '請填寫正確的電話',
  zanCalendar: {
    end: '結束',
    start: '開始',
    title: '日期選擇',
    confirm: '確定',
    startEnd: '開始/結束',
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    monthTitle: (year: number, month: number) => `${year}年${month}月`,
    rangePrompt: (maxRange: number) => `最多選擇 ${maxRange} 天`,
  },
  zanCascader: {
    select: '請選擇',
  },
  zanContactCard: {
    addText: '添加聯系人',
  },
  zanContactList: {
    addText: '新建聯系人',
  },
  zanPagination: {
    prev: '上一頁',
    next: '下一頁',
  },
  zanPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '釋放即可刷新...',
  },
  zanSubmitBar: {
    label: '合計：',
  },
  zanCoupon: {
    unlimited: '無使用門檻',
    discount: (discount: number) => `${discount}折`,
    condition: (condition: number) => `滿${condition}元可用`,
  },
  zanCouponCell: {
    title: '優惠券',
    count: (count: number) => `${count}張可用`,
  },
  zanCouponList: {
    exchange: '兌換',
    close: '不使用優惠',
    enable: '可使用優惠券',
    disabled: '不可使用優惠券',
    placeholder: '請輸入優惠碼',
  },
  zanAddressEdit: {
    area: '地區',
    postal: '郵政編碼',
    areaEmpty: '請選擇地區',
    addressEmpty: '請填寫詳細地址',
    postalEmpty: '郵政編碼不正確',
    defaultAddress: '設為默認收貨地址',
  },
  zanAddressEditDetail: {
    label: '詳細地址',
    placeholder: '街道門牌信息',
  },
  zanAddressList: {
    add: '新增地址',
  },
};
