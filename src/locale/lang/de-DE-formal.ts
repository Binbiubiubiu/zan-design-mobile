export default {
  name: 'Name',
  tel: 'Telefon',
  save: 'Speichern',
  confirm: 'Bestätigen',
  cancel: 'Abbrechen',
  delete: 'Löschen',
  loading: 'Laden...',
  noCoupon: 'Keine Coupons',
  nameEmpty: 'Bitte geben Sie den Name an',
  confirmDelete: 'Sind Sie sicher, dass Sie löschen möchten?',
  telInvalid: 'Ungültige Telefonnummer',
  zanCalendar: {
    end: 'Ende',
    start: 'Start',
    title: 'Kalender',
    startEnd: 'Start/Ende',
    weekdays: ['So', 'Mo', 'Di', 'Mo', 'Do', 'Fr', 'Sa'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `Wähle nicht mehr als ${maxRange} Tage`,
  },
  zanCascader: {
    select: 'Wählen',
  },
  zanContactCard: {
    addText: 'Kontaktinformationen hinzufügen',
  },
  zanContactList: {
    addText: 'Neuen Kontakt hinzufügen',
  },
  zanPagination: {
    prev: 'Vorherige',
    next: 'Nächste',
  },
  zanPullRefresh: {
    pulling: 'Zum Aktualisieren herunterziehen...',
    loosing: 'Loslassen zum Aktualisieren...',
  },
  zanSubmitBar: {
    label: 'Total：',
  },
  zanCoupon: {
    unlimited: 'Unbegrenzt',
    discount: (discount: number) => `${discount * 10}% Rabatt`,
    condition: (condition: number) => `Mindestens ${condition}`,
  },
  zanCouponCell: {
    title: 'Coupon',
    count: (count: number) => `Sie haben ${count} Coupons`,
  },
  zanCouponList: {
    exchange: 'Austauschen',
    close: 'Schließen',
    enable: 'Verfügbar',
    disabled: 'Nicht verfügbar',
    placeholder: 'Couponcode',
  },
  zanAddressEdit: {
    area: 'Standort',
    postal: 'PLZ',
    areaEmpty: 'Bitte geben Sie Ihren Standort an',
    addressEmpty: 'Adresse darf nicht leer sein',
    postalEmpty: 'Falsche Postleitzahl',
    defaultAddress: 'Als Standardadresse festgelegen',
  },
  zanAddressEditDetail: {
    label: 'Adresse',
    placeholder: 'Adresse',
  },
  zanAddressList: {
    add: 'Neue Adresse hinzufügen',
  },
};
