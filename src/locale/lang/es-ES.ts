export default {
  name: 'Nombre',
  tel: 'Teléfono',
  save: 'Guardar',
  confirm: 'Confirmar',
  cancel: 'Cancelar',
  delete: 'Eliminar',
  loading: 'Cargando...',
  noCoupon: 'Sin cupones',
  nameEmpty: 'Por favor rellena el nombre',
  confirmDelete: 'Estás seguro de eliminarlo?',
  telInvalid: 'Teléfono inválido',
  zanCalendar: {
    end: 'Fin',
    start: 'Inicio',
    title: 'Calendario',
    startEnd: 'Inicio/Fin',
    weekdays: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `Elija no más de ${maxRange} días`,
  },
  zanCascader: {
    select: 'Seleccione',
  },
  zanContactCard: {
    addText: 'Añadir información de contacto',
  },
  zanContactList: {
    addText: 'Añadir nuevo contacto',
  },
  zanPagination: {
    prev: 'Anterior',
    next: 'Siguiente',
  },
  zanPullRefresh: {
    pulling: 'Tira para recargar...',
    loosing: 'Suelta para recargar...',
  },
  zanSubmitBar: {
    label: 'Total：',
  },
  zanCoupon: {
    unlimited: 'Ilimitado',
    discount: (discount: number) => `${discount * 10}% de descuento`,
    condition: (condition: number) => `Al menos ${condition}`,
  },
  zanCouponCell: {
    title: 'Cupón',
    count: (count: number) => `You have ${count} coupons`,
  },
  zanCouponList: {
    exchange: 'Intercambio',
    close: 'Cerrar',
    enable: 'Disponible',
    disabled: 'No disponible',
    placeholder: 'Código del cupón',
  },
  zanAddressEdit: {
    area: 'Área',
    postal: 'Código Postal',
    areaEmpty: 'Por favor selecciona una área de recogida',
    addressEmpty: 'La dirección no puede estar vacia',
    postalEmpty: 'Código postal inválido',
    defaultAddress: 'Establecer como dirección por defecto',
  },
  zanAddressEditDetail: {
    label: 'Dirección',
    placeholder: 'Dirección',
  },
  zanAddressList: {
    add: 'Anadir dirección',
  },
};
