export default {
  name: 'Nume',
  tel: 'Telefon',
  save: 'Salvează',
  confirm: 'Confirmă',
  cancel: 'Anulează',
  delete: 'Șterge',
  loading: 'Încărcare...',
  noCoupon: 'Fără cupoane',
  nameEmpty: 'Te rugăm să completezi numele',
  confirmDelete: 'Ești sigur ca vrei sa stergi?',
  telInvalid: 'Număr de telefon invalid',
  zanCalendar: {
    end: 'Sfârșit',
    start: 'Început',
    title: 'Calendar',
    startEnd: 'Început/Sfârsit',
    weekdays: ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sâm'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `Alege maxim ${maxRange} zile`,
  },
  zanCascader: {
    select: 'Selectați',
  },
  zanContactCard: {
    addText: 'Adaugă informațiile de contact',
  },
  zanContactList: {
    addText: 'Adaugă contact nou',
  },
  zanPagination: {
    prev: 'Precedenta',
    next: 'Urmatoarea',
  },
  zanPullRefresh: {
    pulling: 'Trage pentru a da împrospăta...',
    loosing: 'Eliberează pentru a împrospăta...',
  },
  zanSubmitBar: {
    label: 'Total：',
  },
  zanCoupon: {
    unlimited: 'Nelimitat',
    discount: (discount: number) => `${discount * 10}% discount`,
    condition: (condition: number) => `Cel puțin ${condition}`,
  },
  zanCouponCell: {
    title: 'Cupon',
    count: (count: number) => `Ai ${count} cupoane`,
  },
  zanCouponList: {
    exchange: 'Schimbă',
    close: 'Închide',
    enable: 'Disponibil',
    disabled: 'Indisponibil',
    placeholder: 'Cod cupon',
  },
  zanAddressEdit: {
    area: 'Zonă',
    postal: 'Cod postal',
    areaEmpty: 'Te rugăm sa selectezi o zona de primire',
    addressEmpty: 'Adresa nu poate fi goală',
    postalEmpty: 'Cod postal invalid',
    defaultAddress: 'Setează ca adresă de pornire',
  },
  zanAddressEditDetail: {
    label: 'Adresă',
    placeholder: 'Adresă',
  },
  zanAddressList: {
    add: 'Adaugă adresă nouă',
  },
};
