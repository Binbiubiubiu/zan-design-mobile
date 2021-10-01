export default {
  name: 'Navn',
  tel: 'Telefon',
  save: 'Lagre',
  confirm: 'Bekreft',
  cancel: 'Avbryt',
  delete: 'Slett',
  loading: 'Laster...',
  noCoupon: 'Ingen kuponger',
  nameEmpty: 'Vennligst fyll inn navn',
  confirmDelete: 'Er du sikker på at du vil slette?',
  telInvalid: 'Ugyldig telefonnummer',
  zanCalendar: {
    end: 'Slutt',
    start: 'Start',
    title: 'Kalendar',
    startEnd: 'Start/Slutt',
    weekdays: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `Maks. ${maxRange} dager`,
  },
  zanCascader: {
    select: 'Plukke ut',
  },
  zanContactCard: {
    addText: 'Legg til kontakt info',
  },
  zanContactList: {
    addText: 'Legg til ny kontakt',
  },
  zanPagination: {
    prev: 'Forrige',
    next: 'Neste',
  },
  zanPullRefresh: {
    pulling: 'Dra for oppdatering...',
    loosing: 'Mist for oppdatering...',
  },
  zanSubmitBar: {
    label: 'Totalt：',
  },
  zanCoupon: {
    unlimited: 'Uendelig',
    discount: (discount: number) => `${discount * 10}% avslag`,
    condition: (condition: number) => `Minst ${condition}`,
  },
  zanCouponCell: {
    title: 'Kupong',
    count: (count: number) => `Du har ${count} kuponger`,
  },
  zanCouponList: {
    exchange: 'Bytte',
    close: 'Lukk',
    enable: 'Tilgjengelig',
    disabled: 'Utilgjengelig',
    placeholder: 'Kupong kode',
  },
  zanAddressEdit: {
    area: 'Område',
    postal: 'Postkode',
    areaEmpty: 'Vennligst fyll inn område',
    addressEmpty: 'Addresse kan ikke være tomt',
    postalEmpty: 'Feil postkode',
    defaultAddress: 'Sett som standard adresse',
  },
  zanAddressEditDetail: {
    label: 'Adresse',
    placeholder: 'Adresse',
  },
  zanAddressList: {
    add: 'Legg til ny adresse',
  },
};
