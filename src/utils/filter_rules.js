import {mobile, idCode, integer, regexn, email,postalCode,qq,validateMoneyNumber,validateBfb,validateGl,validateRjl,validatePassword,validateTel,validateAllTel, bankCard, newValidateIdCard,newValidateHuZhao} from './validate'

const install = function (Vue, options) {
  /**
   * 注意:  定义type 规则时 不用做非空验证
   *        只需要传入 required:true 即可
   * */
  /*保留两位小数*/
  const isvalidateMoney = (rule, value, callback) => {
    if (value !== null && value != "" && value !== undefined) {
      if (!validateMoneyNumber(value)) {
        callback(new Error('输入数字,最多两位小数'))
      } else {
        callback()
      }
    }
    else {
      callback();
    }
  }
  /*百分比*/
  const isvalidateBfb = (rule, value, callback) => {
    if (value !== null && value != "") {
      if (!validateBfb(value)) {
        callback(new Error('输入正确百分比'))
      } else {
        callback()
      }
    }
    else {
      callback();
    }
  }
  /*百分比*/
  const isvalidateGl = (rule, value, callback) => {
    if (value !== null && value != "") {
      if (!validateGl(value)) {
        callback(new Error('输入正确工龄'))
      } else {
        callback()
      }
    }
    else {
      callback();
    }
  }
  /*容积率*/
  const isvalidateRjl = (rule, value, callback) => {
    if (value !== null && value != "") {
      if (!validateRjl(value)) {
        callback(new Error('请输入正确的容积率（范围），不能超过10'))
      } else {
        callback()
      }
    }
    else {
      callback();
    }
  }
  /*验证QQ号码*/
  const isvalidateQQ = (rule, value, callback) => {
    if (value !== null && value != "") {
      if (!qq(value)) {
        callback(new Error('格式有误'))
      } else {
        callback()
      }
    }
    else {
      callback();
    }
  }
  /*验证手机号*/
  const isvalidateMobile = (rule, value, callback) => {
    if (value != undefined && value != "") {
      if (!mobile(value)) {
        callback(new Error('格式有误'))
      } else {
        callback()
      }
    }
    else {
      callback();
    }
  }
  /*验证手机号和固话*/
  const validateAllTel = (rule, value, callback) => {
    if (value != undefined && value != "") {
      if (!mobile(value)) {
        callback(new Error('格式有误'))
      } else {
        callback()
      }
    }
    else {
      callback();
    }
  }
  /*验证邮箱*/
  const isEmail = (rule, value, callback) => {
    if (value != undefined && value != "") {
      if (!email(value)) {
        callback(new Error('邮箱格式不正确'))
      } else {
        callback()
      }
    }
    else {
      callback();
    }
  }
  /*邮编*/
  const isPostalCode = (rule, value, callback) => {
    if (value != undefined && value != "") {
      if (!postalCode(value)) {
        callback(new Error('邮箱格式不正确'))
      } else {
        callback()
      }
    }
    else {
      callback();
    }
  }
  /*验证2位小数*/
  const isvalidateDecimal = (rule, value, callback) => {
    if (value !== null && value != "") {
      if (!decimal(value)) {
        callback(new Error('请输入两位小数的正实数'))
      } else {
        callback()
      }
    }
    else {
      callback();
    }
  }
  /*含有非法字符(只能输入字母、汉字)*/
  const isvalidateRegexn = (rule, value, callback) => {
    if (value !== null && value != "") {
      if (!regexn(value)) {
        callback(new Error('请输入字母、汉字'))
      } else {
        callback()
      }
    }
    else {
      callback();
    }
  }
  /*请输入正整数*/
  const isvalidateInteger = (rule, value, callback) => {
    if (value !== null && value != "") {
      if (!integer(value)) {
        callback(new Error('输入正整数'))
      } else {
        callback()
      }
    }
    else {
      callback();
    }
  }
  /*电话号码校验 不允许输入汉字、字母、除-的其他字符*/
  const isvalidateTel = (rule, value, callback) => {
    if (value !== null && value != "") {
      if (!validateTel(value)) {
        callback(new Error('格式有误'))
      } else {
        callback()
      }
    }
    else {
      callback();
    }
  }
  /* 校验账号、密码以字母开头，长度在6-18之间，只能包含字符、数字和下划线 */
  const isvalidatePassword  = (rule, value, callback) => {
    if (value != undefined && value != "") {
      if (!validatePassword(value)) {
        callback(new Error('以字母开头，长度在6-18之间，只能包含字符、数字和下划线'))
      } else {
        callback()
      }
    }
    else {
      callback();
    }
  }
  /*身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X  */
  const isIdCode = (rule, value, callback) => {
    if (value != undefined && value != "") {
      if (!idCode(value)) {
        callback(new Error('格式有误'))
      } else {
        callback()
      }
    }
    else {
      callback();
    }
  }
  const newIsIdCode = (rule, value, callback) => {
    if (value != undefined && value != "") {
      if (newValidateIdCard(value) != 0) {
        callback(new Error('格式有误'))
      } else {
        callback()
      }
    }
    else {
      callback();
    }
  }
  // 护照校验
  const validateHuZhao = (rule, value, callback) => {
    if (value != undefined && value != "") {
      if (newValidateHuZhao(value) != 0) {
        callback(new Error('格式有误'))
      } else {
        callback()
      }
    }
    else {
      callback();
    }
  }

  const isBankCard = (rule, value, callback) => {
    if (value != undefined && value != "") {
      if (!bankCard(value)) {
        callback(new Error('银行卡号不正确'))
      } else {
        callback()
      }
    }
    else {
      callback();
    }
  }

  Vue.prototype.$filter_rules = function (item) {
    let rules = [];
    if (item.required) {
      rules.push({required: true, message: '必填项', trigger: ['blur','change']});
    }
    if (item.maxLength) {
      rules.push({min: 1, max: item.maxLength, message: '最多' + item.maxLength + '个字符', trigger: ['blur','change']})
    }
    if (item.min && item.max) {
      rules.push({min: item.min, max: item.max, message: '长度' + item.min + '至' + item.max + '之间', trigger: ['blur','change']})
    }
    if (item.isChar) {
         rules.push({validator: isvalidateRegexn, trigger: ['blur','change']});
    }
    if (item.type) {
      let type = item.type;
      switch (type) {
        case 'mobile':
          rules.push({validator: isvalidateMobile, trigger: ['blur']});
          break;
        case 'idCode':
          rules.push({validator: isIdCode, trigger: ['blur','change']});
          break;
        case 'age':
          rules.push({validator: isvalidateInteger, trigger: ['blur','change']});
          break;
        case 'gl':
          rules.push({validator: isvalidateGl, trigger: ['blur','change']});
          break;
        case 'email':
          rules.push({validator: isEmail, trigger: ['blur','change']});
          break;
        case 'postalCode':
          rules.push({validator: isPostalCode, trigger: ['blur','change']});
          break;
        case 'QQ':
          rules.push({validator: isvalidateQQ, trigger: ['blur','change']});
          break;
        case 'money':
          rules.push({validator: isvalidateMoney, trigger: ['blur','change']});
          break;
        case 'bfb':
          rules.push({validator: isvalidateBfb, trigger: ['blur','change']});
          break;
        case 'rjl':
          rules.push({validator: isvalidateRjl, trigger: ['blur','change']});
          break;
        case 'password':
          rules.push({validator: isvalidatePassword, trigger: ['blur','change']});
          break;
        case 'tel':
          rules.push({validator: isvalidateTel, trigger: ['blur','change']});
          break;
        case 'bankCard':
          rules.push({validator: isBankCard, trigger: ['blur','change']});
          break;
        case 'newIsIdCode':
          rules.push({validator: newIsIdCode, trigger: 'blur'});
          break;
        case 'validateAllTel':
          rules.push({validator: validateAllTel, trigger: ['blur','change']});
          break;
        case 'huzhao':
          rules.push({validator: validateHuZhao, trigger: ['blur','change']});
          break;
        default:
          rules.push({});
          break;
      }
    }
    return rules;
  };
};
export default {install}
