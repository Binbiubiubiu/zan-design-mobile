export default {
  name: 'Имя',
  tel: 'Телефон',
  save: 'Сохранить',
  confirm: 'Подтвердить',
  cancel: 'Отмена',
  delete: 'Удалить',
  loading: 'Загрузка...',
  noCoupon: 'Нет купонов',
  nameEmpty: 'Пожалуйста укажите имя',
  confirmDelete: 'Вы уверены, что хотите удалить?',
  telInvalid: 'Некорректный номер телефона',
  zanCalendar: {
    end: 'Конец',
    start: 'Начало',
    title: 'Каленарь',
    startEnd: 'Начало/Конец',
    weekdays: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `Укажите более ${maxRange} дней`,
  },
  zanCascader: {
    select: 'Выбрать',
  },
  zanContactCard: {
    addText: 'Добавить информацию',
  },
  zanContactList: {
    addText: 'Создать контакт',
  },
  zanPagination: {
    prev: 'Назад',
    next: 'Вперед',
  },
  zanPullRefresh: {
    pulling: 'Потяните для обновления...',
    loosing: 'Отпустите для обновления...',
  },
  zanSubmitBar: {
    label: 'Всего：',
  },
  zanCoupon: {
    unlimited: 'Безлимитный',
    discount: (discount: number) => `${discount * 10}% скидка`,
    condition: (condition: number) => `Как минимум ${condition}`,
  },
  zanCouponCell: {
    title: 'Купон',
    count: (count: number) => `У вас есть ${count} купонов`,
  },
  zanCouponList: {
    exchange: 'Обмен',
    close: 'Закрыть',
    enable: 'Доступно',
    disabled: 'Недоступно',
    placeholder: 'Код купона',
  },
  zanAddressEdit: {
    area: 'Область',
    postal: 'Индекс',
    areaEmpty: 'Укажите зону доставки',
    addressEmpty: 'Адрес не может быть пустым',
    postalEmpty: 'Некорректный индекс',
    defaultAddress: 'Сделать адресом по умолчанию',
  },
  zanAddressEditDetail: {
    label: 'Адрес',
    placeholder: 'Адрес',
  },
  zanAddressList: {
    add: 'Новый адрес',
  },
};
