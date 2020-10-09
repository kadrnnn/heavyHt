var mobile = function (val) {
  var reg = /^1[3|4|5|6|7|8|9][0-9]\d{4,8}$/;
  if (val.length != 11) {
    return false;
  }
  else if (!reg.test(val.trim())) {
    return false;
  }
  return true;
}

//校验qq
var qq = function (val) {
  var reg = /^[1-9]\d{4,9}$/;
  return reg.test(val);
}
//校验身份证
var idCode = function (val) {
  var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(val);
}
//正整数
var integer = function (val) {
  var reg = /^[0-9]+$/;
  return reg.test(val)
}
//非法字符
var regexn = function (val) {
  // var reg = /[@#$%^&*':;{}!]+/g ;
  var reg = /^[\u4E00-\u9FA5A-Za-z]+$/g;//不支持生僻字
  return reg.test(val)
}

//请输入数字
var onlyNumberSp = function (val) {
  var reg = /^[0-9]+$/;
  return reg.test(val)
}
//请输入字母
var onlyLetterSp = function (val) {
  var reg = /^[a-zA-Z']+$/;
  return reg.test(val)
}
//输入邮箱
var email = function (val) {
  var reg = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/;
  return reg.test(val)
}
//输入邮编
var postalCode = function (val) {
  var reg = /^[1-9]\d{5}(?!\d)$/;
  return reg.test(val)
}

//两位小数
var validateMoneyNumber = function (val) {
  var reg = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2}))|0)$/;
  return reg.test(val)
}

//百分比
var validateBfb = function (val) {
  var reg = /(^[0-9]{1,2}(\.[0-9]{1,2})?$)|(^100(\.0{1,2})?$)/;
  return reg.test(val)
}

//工龄
var validateGl = function (val) {
  var reg = /^(([1-9][0-9]*)|(([0]\.\d{1}|[1-9][0-9]*\.\d{1}))|0)$/;
  return reg.test(val)
}

//容积率
var validateRjl = function (val) {
  var reg = /(^[0-9](\.[0-9]{1,2})?$)|(^[0-9](\.[0-9]{1,2})?-[0-9](\.[0-9]{1,2})?$)/;
  if (reg.test(val)) {
    let nums = val.split("-");
    if (nums.length > 1 && Number(nums[0]) > Number(nums[1])) {
      return false;
    }
  }
  return reg.test(val)
}

//校验密码
var validatePassword = function (val) {
  var reg = /^[a-zA-Z]\w{5,17}$/;
  return reg.test(val)
}
//校验固定电话号码
var validateTel = function (val) {
  var reg = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
  return reg.test(val)
}
//校验固定电话号码 和 手机号
var validateAllTel = function (val) {
  var reg = /^((0[0-9]{2,3}\\-)?([2-9][0-9]{6,7})+(\\-[0-9]{1,4})?)$|^(0?[1][3578][0-9]{9})$|^(400[0-9]{7})$/;
  return reg.test(val)
}

/**
 * 判断是否为空
 */
var validatenull = function (val) {
  if (typeof val === 'boolean') {
    return false
  }
  if (val instanceof Array) {
    if (val.length === 0) {
      return true
    }
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === '{}') {
      return true
  }
  } else {
    if (val === 'null' || val === null || val === 'undefined' || val === undefined || val === '') {
      return true
    }
    return false
  }
  return false
}

var bankCard = function (val) {
  let newVal;
  newVal = val.replace(/\s+/g, "");
  var reg = /^\d(\d|-){10,19}\d$/
  return reg.test(newVal);
}

// 新的校验身份证
var newValidateIdCard = function (obj) {
  let aCity = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
    91: "国外"
  };
  let iSum = 0;
  //var info = "";
  let strIDno = obj;
  let idCardLength = strIDno.length;
  if (!/^\d{17}(\d|x)$/i.test(strIDno) && !/^\d{15}$/i.test(strIDno)) {
    return 1; //非法身份证号
  }

  if (aCity[parseInt(strIDno.substr(0, 2), 10)] === null) {
    return 2;// 非法地区
  }

  // 15位身份证转换为18位
  if (idCardLength == 15) {
    let sBirthday = "19" + strIDno.substr(6, 2) + "-" + Number(strIDno.substr(8, 2)) + "-" + Number(strIDno.substr(10, 2));
    let d = new Date(sBirthday.replace(/-/g, "/"))
    let dd = d.getFullYear().toString() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    if (sBirthday != dd) {
      return 3; //非法生日
    }

    strIDno = strIDno.substring(0, 6) + "19" + strIDno.substring(6, 15);
    strIDno = addLastnum(strIDno);
  }

  // 判断是否大于2078年，小于1900年
  let year = strIDno.substring(6, 10);
  if (year < 1900 || year > 2078) {
    return 3;
  }

  //18位身份证处理
  //在后面的运算中x相当于数字10,所以转换成a
  strIDno = strIDno.replace(/x$/i, "a");

  let sBirthday = strIDno.substr(6, 4) + "-" + Number(strIDno.substr(10, 2)) + "-" + Number(strIDno.substr(12, 2));
  let d = new Date(sBirthday.replace(/-/g, "/"))
  if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) {
    return 3; //非法生日
  }
  // 身份证编码规范验证
  for (var i = 17; i >= 0; i--) {
    iSum += (Math.pow(2, i) % 11) * parseInt(strIDno.charAt(17 - i), 11);
  }
  if (iSum % 11 != 1) {
    return 1;// 非法身份证号
  }
  return 0;
}

var addLastnum= function (id) {
  var getNum = eval(id.charAt(0) * 7 + id.charAt(1) * 9 + id.charAt(2) * 10 + id.charAt(3) * 5 + id.charAt(4) * 8 + id.charAt(5) * 4 + id.charAt(6) * 2 + id.charAt(7) * 1 + id.charAt(8) * 6 + id.charAt(9) * 3 + id.charAt(10) * 7 + id.charAt(11) * 9 + id.charAt(12) * 10 + id.charAt(13) * 5 + id.charAt(14) * 8 + id.charAt(15) * 4 + id.charAt(16) * 2);
  var lastNumber = '';
  getNum = getNum % 11;
  switch (getNum) {
    case 0 :
      lastNumber = "1";
      break;
    case 1 :
      lastNumber = "0";
      break;
    case 2 :
      lastNumber = "X";
      break;
    case 3 :
      lastNumber = "9";
      break;
    case 4 :
      lastNumber = "8";
      break;
    case 5 :
      lastNumber = "7";
      break;
    case 6 :
      lastNumber = "6";
      break;
    case 7 :
      lastNumber = "5";
      break;
    case 8 :
      lastNumber = "4";
      break;
    case 9 :
      lastNumber = "3";
      break;
    case 10 :
      lastNumber = "2";
      break;
  }
  return id + lastNumber;
};

var newValidateHuZhao = function (val) {
  var regHuZhao = /^1[45][0-9]{7}$|([P|p|S|s]\d{7}$)|([S|s|G|g]\d{8}$)|([Gg|Tt|Ss|Ll|Qq|Dd|Aa|Ff]\d{8}$)|([H|h|M|m]\d{8,10})$/;
  return regHuZhao.test(val);
}

export {
  mobile,
  idCode,
  integer,
  regexn,
  email,
  postalCode,
  validatenull,
  qq,
  validateMoneyNumber,
  validateBfb,
  validateGl,
  validateRjl,
  validatePassword,
  validateTel,
  validateAllTel,
  bankCard,
  newValidateIdCard,
  newValidateHuZhao
}
