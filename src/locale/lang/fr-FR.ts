export default {
  name: 'Nom',
  tel: 'Telephone',
  save: 'Sauvegarder',
  confirm: 'Confirmer',
  cancel: 'Annuler',
  delete: 'Suprimer',
  loading: 'Chargement...',
  noCoupon: 'Pas de coupons',
  nameEmpty: 'Veuillez remplir le nom',
  confirmDelete: 'Êtes-vous sûr de vouloir supprimer?',
  telInvalid: 'Numéro de téléphone incorrect',
  zanCalendar: {
    end: 'Fin',
    start: 'Début',
    title: 'Calendrier',
    startEnd: 'Début/Fin',
    weekdays: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `Choisir pas plus de ${maxRange} jours`,
  },
  zanCascader: {
    select: 'Sélectionner',
  },
  zanContactCard: {
    addText: 'Ajouter des informations de contact',
  },
  zanContactList: {
    addText: 'Ajouter un nouveau contact',
  },
  zanPagination: {
    prev: 'Précédent',
    next: 'Suizant',
  },
  zanPullRefresh: {
    pulling: 'Tirer pour actualiser ...',
    loosing: 'Relâchez pour actualiser...',
  },
  zanSubmitBar: {
    label: 'Total：',
  },
  zanCoupon: {
    unlimited: 'Illimité',
    discount: (discount: number) => `${discount * 10}% de réduction`,
    condition: (condition: number) => `Au moins ${condition}`,
  },
  zanCouponCell: {
    title: 'Coupon',
    count: (count: number) => `Vous avez ${count} coupons`,
  },
  zanCouponList: {
    exchange: 'Exchange',
    close: 'Fermer',
    enable: 'Disponible',
    disabled: 'Indisponible',
    placeholder: 'Code coupon',
  },
  zanAddressEdit: {
    area: 'Zone',
    postal: 'Postal',
    areaEmpty: 'Veuillez sélectionner une zone de réception',
    addressEmpty: "L'adresse ne peut pas être vide",
    postalEmpty: 'Mauvais code postal',
    defaultAddress: 'Définir comme adresse par défaut',
  },
  zanAddressEditDetail: {
    label: 'Adresse',
    placeholder: 'Adresse',
  },
  zanAddressList: {
    add: 'Ajouter une nouvelle adresse',
  },
};
