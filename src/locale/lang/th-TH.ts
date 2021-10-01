export default {
  name: 'ชื่อ',
  tel: 'โทรศัพท์',
  save: 'บันทึก',
  confirm: 'ยืนยัน',
  cancel: 'ยกเลิก',
  delete: 'ลบ',
  loading: 'กำลังโหลด...',
  noCoupon: 'ไม่มีคูปอง',
  nameEmpty: 'กรุณากรอกชื่อของคุณ',
  confirmDelete: 'คุณแน่ใจว่าต้องการลบ',
  telInvalid: 'กรุณากรอกหมายเลขโทรศัพท์ที่ถูกต้อง',
  zanCalendar: {
    end: 'จบ',
    start: 'เริ่ม',
    title: 'การเลือกวันที่',
    confirm: 'ตกลง',
    startEnd: 'เริ่ม/เริ่ม',
    weekdays: ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'],
    monthTitle: (year: number, month: number) => `${year}ปี${month}เดือน`,
    rangePrompt: (maxRange: number) =>
      `จำนวนวันที่เลือกต้องไม่เกิน ${maxRange} วัน`,
  },
  zanCascader: {
    select: 'โปรดเลือก',
  },
  zanContactCard: {
    addText: 'เพิ่มผู้ติดต่อ',
  },
  zanContactList: {
    addText: 'รายชื่อติดต่อใหม่',
  },
  zanPagination: {
    prev: 'หน้าที่แล้ว',
    next: 'หน้าต่อไป',
  },
  zanPullRefresh: {
    pulling: 'ดึงลงเพื่อรีเฟรช...',
    loosing: 'ปล่อยเพื่อรีเฟรช...',
  },
  zanSubmitBar: {
    label: 'รวม：',
  },
  zanCoupon: {
    unlimited: 'ไม่มีเกณฑ์การใช้งาน',
    discount: (discount: number) => `ลด${discount}`,
    condition: (condition: number) => `มีจำหน่ายในราคา ${condition} กว่าหยวน`,
  },
  zanCouponCell: {
    title: 'คูปอง',
    count: (count: number) => `มีรูปภาพ ${count} รูป`,
  },
  zanCouponList: {
    exchange: 'แลกเปลี่ยน',
    close: 'ห้ามใช้คูปอง',
    enable: 'พร้อมใช้งาน',
    disabled: 'ไม่พร้อมใช้งาน',
    placeholder: 'กรุณากรอกรหัสคูปอง',
  },
  zanAddressEdit: {
    area: 'พื้นที่',
    postal: 'รหัสไปรษณีย์',
    areaEmpty: 'โปรดเลือกภูมิภาค',
    addressEmpty: 'กรุณากรอกที่อยู่โดยละเอียด',
    postalEmpty: 'รูปแบบรหัสไปรษณีย์ไม่ถูกต้อง',
    defaultAddress: 'ตั้งเป็นที่อยู่จัดส่งเริ่มต้น',
  },
  zanAddressEditDetail: {
    label: 'ที่อยู่',
    placeholder: 'เลขที่บ้านเลขที่ห้องชั้นและข้อมูลอื่น ๆ',
  },
  zanAddressList: {
    add: 'เพิ่มที่อยู่',
  },
};
