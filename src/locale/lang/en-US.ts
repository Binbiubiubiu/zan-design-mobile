export default {
  name: 'Name',
  tel: 'Phone',
  save: 'Save',
  confirm: 'Confirm',
  cancel: 'Cancel',
  delete: 'Delete',
  loading: 'Loading...',
  noCoupon: 'No coupons',
  nameEmpty: 'Please fill in the name',
  confirmDelete: 'Are you sure you want to delete?',
  telInvalid: 'Malformed phone number',
  zanCalendar: {
    end: 'End',
    start: 'Start',
    title: 'Calendar',
    startEnd: 'Start/End',
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `Choose no more than ${maxRange} days`,
  },
  zanCascader: {
    select: 'Select',
  },
  zanContactCard: {
    addText: 'Add contact info',
  },
  zanContactList: {
    addText: 'Add new contact',
  },
  zanPagination: {
    prev: 'Previous',
    next: 'Next',
  },
  zanPullRefresh: {
    pulling: 'Pull to refresh...',
    loosing: 'Loose to refresh...',
  },
  zanSubmitBar: {
    label: 'Total：',
  },
  zanCoupon: {
    unlimited: 'Unlimited',
    discount: (discount: number) => `${discount * 10}% off`,
    condition: (condition: number) => `At least ${condition}`,
  },
  zanCouponCell: {
    title: 'Coupon',
    count: (count: number) => `You have ${count} coupons`,
  },
  zanCouponList: {
    exchange: 'Exchange',
    close: 'Close',
    enable: 'Available',
    disabled: 'Unavailable',
    placeholder: 'Coupon code',
  },
  zanAddressEdit: {
    area: 'Area',
    postal: 'Postal',
    areaEmpty: 'Please select a receiving area',
    addressEmpty: 'Address can not be empty',
    postalEmpty: 'Wrong postal code',
    defaultAddress: 'Set as the default address',
  },
  zanAddressEditDetail: {
    label: 'Address',
    placeholder: 'Address',
  },
  zanAddressList: {
    add: 'Add new address',
  },
};
