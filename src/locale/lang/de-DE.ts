export default {
  name: 'Name',
  tel: 'Telefon',
  save: 'Speichern',
  confirm: 'Bestätigen',
  cancel: 'Abbrechen',
  delete: 'Löschen',
  loading: 'Laden...',
  noCoupon: 'Keine Coupons',
  nameEmpty: 'Bitte den Name angeben',
  confirmDelete: 'Bist du sicher, dass du löschen möchtest?',
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
    count: (count: number) => `Du hast ${count} Coupons`,
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
    areaEmpty: 'Bitte deinen Ort angeben',
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
