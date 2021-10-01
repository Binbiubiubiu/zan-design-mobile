export default {
  name: 'İsim',
  tel: 'Telefon',
  save: 'Kaydet',
  confirm: 'Onayla',
  cancel: 'İptal',
  delete: 'Sil',
  loading: 'Yükleniyor...',
  noCoupon: 'Kupon yok',
  nameEmpty: 'Lütfen isim giriniz',
  confirmDelete: 'Silmek istediğinize emin misiniz?',
  telInvalid: 'Geçersiz tel. numarası',
  zanCalendar: {
    end: 'Son',
    start: 'Başlat',
    title: 'Takvim',
    startEnd: 'Başlat/Son',
    weekdays: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `En fazla ${maxRange} gün seçin`,
  },
  zanCascader: {
    select: 'Seçiniz',
  },
  zanContactCard: {
    addText: 'Kişi bilgisi ekle',
  },
  zanContactList: {
    addText: 'Yeni kişi ekle',
  },
  zanPagination: {
    prev: 'Önceki',
    next: 'Sonraki',
  },
  zanPullRefresh: {
    pulling: 'Yenilemek için çekin...',
    loosing: 'Yenilemek için bırakın...',
  },
  zanSubmitBar: {
    label: 'Toplam:',
  },
  zanCoupon: {
    unlimited: 'Sınırsız',
    discount: (discount: number) => `%${discount * 10} indirim`,
    condition: (condition: number) => `En az ${condition}`,
  },
  zanCouponCell: {
    title: 'Kupon',
    count: (count: number) => `${count} adet teklif var`,
  },
  zanCouponList: {
    exchange: 'Takas',
    close: 'Kapat',
    enable: 'Mevcut',
    disabled: 'Mevcut değil',
    placeholder: 'Kupon kodu',
  },
  zanAddressEdit: {
    area: 'Alan',
    postal: 'Posta',
    areaEmpty: 'Lütfen alıcı alanını seçin',
    addressEmpty: 'Adres boş olamaz!',
    postalEmpty: 'Yanlış posta kodu',
    defaultAddress: 'Varsayılan adres olarak ayarla',
  },
  zanAddressEditDetail: {
    label: 'Adres',
    placeholder: 'Adres',
  },
  zanAddressList: {
    add: 'Yeni adres ekle',
  },
};
