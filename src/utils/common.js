const iconPath = "/static/res/images/treeIcon/";

// 初始化添加icon方法
export function addIcon(treeNodes) {
  treeNodes.map((treeNode, index) => {
    switch (treeNode.beanType) {
      case "1": //机构
        treeNode.icon = iconPath + "levelorg.png"
        if (treeNode.validFlag == 0) {
          treeNode.icon = iconPath + "levelorg_disabled.png"
        }
        addIcon(treeNode.childList);
        break;
      case "2": //部门
        treeNode.icon = iconPath + "org.png"
        if (treeNode.validFlag == 0) {
          treeNode.icon = iconPath + "org_disabled.png"
        }
        addIcon(treeNode.childList);
        break;
      case "3": //人员
        treeNode.icon = iconPath + "user.png"
        if (treeNode.validFlag == 0) {
          treeNode.icon = iconPath + "user_disabled.png"
        }
        addIcon(treeNode.childList);
        break;
      case "4": //角色目录
        treeNode.icon = iconPath + "foldericon.png"
        if (treeNode.validFlag == 0) {
          treeNode.icon = iconPath + "foldericon_disabled.png"
        }
        addIcon(treeNode.childList);
        break;
      case "51": //功能角色
        treeNode.icon = iconPath + "role.png"
        if (treeNode.validFlag == 0) {
          treeNode.icon = iconPath + "role_disabled.png"
        }
        addIcon(treeNode.childList);
        break
      case "52": //活动角色
        treeNode.icon = iconPath + "role_active.png"
        if (treeNode.validFlag == 0) {
          treeNode.icon = iconPath + "role_active_disabled.png"
        }
        addIcon(treeNode.childList);
        break
      case "8": //流程包根目录
        treeNode.icon = iconPath + "foldericon.png"
        if (treeNode.validFlag == 0) {
          treeNode.icon = iconPath + "foldericon_disabled.png"
        }
        addIcon(treeNode.childList);
        break;
      case "81": //全局包
        treeNode.icon = iconPath + "global_package.png"
        if (treeNode.validFlag == 0) {
          treeNode.icon = iconPath + "global_package_disabled.png"
        }
        addIcon(treeNode.childList);
        break;
      case "82": //私有包
        treeNode.icon = iconPath + "self_package.png"
        if (treeNode.validFlag == 0) {
          treeNode.icon = iconPath + "self_package_disabled.png"
        }
        addIcon(treeNode.childList);
        break;
      case "9": //流程版本模板
        treeNode.icon = iconPath + "foldericon.png"
        if (treeNode.validFlag == 0) {
          treeNode.icon = iconPath + "foldericon_disabled.png"
        }
        addIcon(treeNode.childList);
        break;
      case "10": //流程版本
        treeNode.icon = iconPath + "version.png"
        if (treeNode.publishStatus == 1) {
          treeNode.icon = iconPath + "version_public.png"
        }
        addIcon(treeNode.childList);
        break;
      case "12": //活动模板目录
        treeNode.icon = iconPath + "foldericon.png"
        if (treeNode.validFlag == 0) {
          treeNode.icon = iconPath + "foldericon_disabled.png"
        }
        addIcon(treeNode.childList);
        break;
      case "14": //表单组件目录
        treeNode.icon = iconPath + "foldericon.png"
        if (treeNode.validFlag == 0) {
          treeNode.icon = iconPath + "foldericon_disabled.png"
        }
        addIcon(treeNode.childList);
        break;
      case "141": //表单组件-表单
        treeNode.icon = iconPath + "form.png"
        addIcon(treeNode.childList);
        break;
      case "17": //收件资料目录
        treeNode.icon = iconPath + "foldericon.png"
        if (treeNode.validFlag == 0) {
          treeNode.icon = iconPath + "foldericon_disabled.png"
        }
        addIcon(treeNode.childList);
        break;
      case "19": //意见模板目录
        treeNode.icon = iconPath + "foldericon.png"
        if (treeNode.validFlag == 0) {
          treeNode.icon = iconPath + "foldericon_disabled.png"
        }
        addIcon(treeNode.childList);
        break;
      case "21": //提示模板目录
        treeNode.icon = iconPath + "foldericon.png"
        if (treeNode.validFlag == 0) {
          treeNode.icon = iconPath + "foldericon_disabled.png"
        }
        addIcon(treeNode.childList);
        break;
      case "23": //附记模板目录
        treeNode.icon = iconPath + "foldericon.png"
        if (treeNode.validFlag == 0) {
          treeNode.icon = iconPath + "foldericon_disabled.png"
        }
        addIcon(treeNode.childList);
        break;
      case "25": //短信模板目录
        treeNode.icon = iconPath + "foldericon.png"
        if (treeNode.validFlag == 0) {
          treeNode.icon = iconPath + "foldericon_disabled.png"
        }
        addIcon(treeNode.childList);
        break;
      case "27": //校验规则目录
        treeNode.icon = iconPath + "foldericon.png"
        if (treeNode.validFlag == 0) {
          treeNode.icon = iconPath + "foldericon_disabled.png"
        }
        addIcon(treeNode.childList);
        break;
      case "29": //公式规则目录
        treeNode.icon = iconPath + "foldericon.png"
        if (treeNode.validFlag == 0) {
          treeNode.icon = iconPath + "foldericon_disabled.png"
        }
        addIcon(treeNode.childList);
        break;
      case "31": //参数规则目录
        treeNode.icon = iconPath + "foldericon.png"
        if (treeNode.validFlag == 0) {
          treeNode.icon = iconPath + "foldericon_disabled.png"
        }
        addIcon(treeNode.childList);
        break;
      case "33": //收费项目录
        treeNode.icon = iconPath + "foldericon.png"
        if (treeNode.validFlag == 0) {
          treeNode.icon = iconPath + "foldericon_disabled.png"
        }
        addIcon(treeNode.childList);
        break;
      case "35": //服务注册目录
        treeNode.icon = iconPath + "foldericon.png"
        if (treeNode.validFlag == 0) {
          treeNode.icon = iconPath + "foldericon_disabled.png"
        }
        addIcon(treeNode.childList);
        break;
      case "36": //小区目录
        treeNode.icon = iconPath + "community.png"
        addIcon(treeNode.childList);
        break;
      case "38": //幢目录
        treeNode.icon = iconPath + "building.png"
        if (treeNode.validFlag == 0) {
          treeNode.icon = iconPath + "building_delete.png"
        }
        addIcon(treeNode.childList);
        break;
      case "37": //定时任务目录
        treeNode.icon = iconPath + "foldericon.png"
        addIcon(treeNode.childList);
        break;
      case "60": //办件中（一户一档）
        treeNode.icon = iconPath + "banjianzhong.png"
        addIcon(treeNode.childList);
        break;
      case "61": //已办结（一户一档）
        treeNode.icon = iconPath + "yibanjie.png"
        addIcon(treeNode.childList);
        break;
      case "62": //历史（一户一档）
        treeNode.icon = iconPath + "lishi.png"
        addIcon(treeNode.childList);
        break;
      case "70": //图片
        treeNode.icon = iconPath + "jpg.png"
        addIcon(treeNode.childList);
        break;
      case "71": //pdf
        treeNode.icon = iconPath + "pdf.png"
        addIcon(treeNode.childList);
        break;

      default: //功能模块
        if (treeNode.childList.length == 0) {
          treeNode.icon = iconPath + "file.png"
          if (treeNode.validFlag == 0) {
            treeNode.icon = iconPath + "file_disabled.png"
          }
        } else {
          treeNode.icon = iconPath + "foldericon.png"
          if (treeNode.validFlag == 0) {
            treeNode.icon = iconPath + "foldericon_disabled.png"
          }
          addIcon(treeNode.childList);
        }
    }
  })
}

//删除时改变icon的方法
export function delAddIcon(treeNode) {
  switch (treeNode.beanType) {
    case 4: //角色目录
      break;
    default: //功能模块
      if (treeNode.childNodes.length == 0) {
        treeNode.icon = iconPath + 'file.png';
      }
  }

}

// 新增的节点添加的icon
export function addAddIcon(newNode, currentNode) {
  switch (newNode.beanType) {
    case "1": //机构
      newNode.icon = iconPath + "levelorg.png"
      break;
    case "2": //部门
      newNode.icon = iconPath + "org.png"
      break;
    case "3": //人员
      newNode.icon = iconPath + "user.png"
      break;
    case "5": //角色
      newNode.icon = iconPath + "role.png"
      break;
    case "7": //目录
      newNode.icon = iconPath + "foldericon.png"
      break;
    default: //功能模块
      newNode.icon = iconPath + "file.png";
      if (currentNode.data.icon !== (iconPath + 'foldericon.png')) {
        currentNode.data.icon = (iconPath + 'foldericon.png');
      }
  }
  currentNode.data.childList.push(newNode);

}

//删除树节点(不刷新树)
export function delTree(data, val) {
  for (var i = 0; i < val.length; i++) {
    const index = data.findIndex(d => d.id === val[i].id);
    data.splice(index, 1);
  }
}

//删除树节点(不刷新树)
export function removeTreeNodes(node, data) {
  const parent = node;
  const children = parent.data.childList || parent.data;
  for (var i = 0; i < data.length; i++) {
    const index = children.findIndex(d => d.id === data[i].id);
    children.splice(index, 1);
  }
}

//设值弹框大小
export function setDialogSize(obj, width, height, refItem) {
  if (refItem) {
    refItem.$refs.dialog.style.marginLeft = -(width * 0.5) + "px"
    refItem.$refs.dialog.style.width = width + "px"
    refItem.$refs.dialog.style.marginTop = -(height * 0.5) + "px"
    refItem.$refs.dialog.style.height = height + "px"
    refItem.$refs.dialog.style.overflow = "hidden"
    refItem.$refs.dialog.style.top = "50%"
    refItem.$refs.dialog.style.left = "50%"
  } else {
    obj.$refs.commonDialogBox.$refs.dialog.style.marginLeft = -(width * 0.5) + "px"
    obj.$refs.commonDialogBox.$refs.dialog.style.width = width + "px"
    obj.$refs.commonDialogBox.$refs.dialog.style.marginTop = -(height * 0.5) + "px"
    obj.$refs.commonDialogBox.$refs.dialog.style.height = height + "px"
    obj.$refs.commonDialogBox.$refs.dialog.style.overflow = "hidden"
    obj.$refs.commonDialogBox.$refs.dialog.style.top = "50%"
    obj.$refs.commonDialogBox.$refs.dialog.style.left = "50%"
  }

}


// 自定义el-tree节点过滤，支持5级树，主要解决官网中节点过滤只加载当前节点和其父节点，不会加载对应的子节点的问题。
export function treeFilterNode(value, data, node) {
  if (!value) {
    return true;
  }
  let result_one = false
  let result_two = false
  let result_three = false
  let result_four = false
  let result_five = false
  let result_six = false
  let result_seven = false
  let result_eight = false
  let result_nine = false
  let result_ten = false
  let if_one;
  let if_two;
  let if_three;
  let if_four;
  let if_five;
  let if_six;
  let if_seven;
  let if_eight;
  let if_nine;
  let if_ten;

  if (node.level === 1) {
    if_one = data.name.indexOf(value) !== -1 || data.spell.indexOf(value) !== -1
    result_one = if_one
  } else if (node.level === 2) {
    if_one = data.name.indexOf(value) !== -1 || data.spell.indexOf(value) !== -1
    if_two = node.parent.data.name.indexOf(value) !== -1
    result_two = if_one || if_two
  } else if (node.level === 3) {
    if_one = data.name.indexOf(value) !== -1 || data.spell.indexOf(value) !== -1
    if_two = node.parent.data.name.indexOf(value) !== -1 || node.parent.data.spell.indexOf(value) !== -1
    if_three = node.parent.parent.data.name.indexOf(value) !== -1
    result_three = if_one || if_two || if_three
  } else if (node.level === 4) {
    if_one = data.name.indexOf(value) !== -1 || data.spell.indexOf(value) !== -1
    if_two = node.parent.data.name.indexOf(value) !== -1 || node.parent.data.spell.indexOf(value) !== -1
    if_three = node.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.data.spell.indexOf(value) !== -1
    if_four = node.parent.parent.parent.data.name.indexOf(value) !== -1
    result_four = if_one || if_two || if_three || if_four
  } else if (node.level === 5) {
    if_one = data.name.indexOf(value) !== -1 || data.spell.indexOf(value) !== -1
    if_two = node.parent.data.name.indexOf(value) !== -1 || node.parent.data.spell.indexOf(value) !== -1
    if_three = node.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.data.spell.indexOf(value) !== -1
    if_four = node.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.data.spell.indexOf(value) !== -1
    if_five = node.parent.parent.parent.parent.data.name.indexOf(value) !== -1
    result_five = if_one || if_two || if_three || if_four || if_five
  } else if (node.level === 6) {
    if_one = data.name.indexOf(value) !== -1 || data.spell.indexOf(value) !== -1
    if_two = node.parent.data.name.indexOf(value) !== -1 || node.parent.data.spell.indexOf(value) !== -1
    if_three = node.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.data.spell.indexOf(value) !== -1
    if_four = node.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.data.spell.indexOf(value) !== -1
    if_five = node.parent.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.parent.data.spell.indexOf(value) !== -1
    if_six = node.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1
    result_six = if_one || if_two || if_three || if_four || if_five || if_six
  } else if (node.level === 7) {
    if_one = data.name.indexOf(value) !== -1 || data.spell.indexOf(value) !== -1
    if_two = node.parent.data.name.indexOf(value) !== -1 || node.parent.data.spell.indexOf(value) !== -1
    if_three = node.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.data.spell.indexOf(value) !== -1
    if_four = node.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.data.spell.indexOf(value) !== -1
    if_five = node.parent.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.parent.data.spell.indexOf(value) !== -1
    if_six = node.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.parent.parent.data.spell.indexOf(value) !== -1
    if_seven = node.parent.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1 || data.spell.indexOf(value) !== -1
    result_seven = if_one || if_two || if_three || if_four || if_five || if_six || if_seven
  } else if (node.level === 8) {
    if_one = data.name.indexOf(value) !== -1 || data.spell.indexOf(value) !== -1
    if_two = node.parent.data.name.indexOf(value) !== -1 || node.parent.data.spell.indexOf(value) !== -1
    if_three = node.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.data.spell.indexOf(value) !== -1
    if_four = node.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.data.spell.indexOf(value) !== -1
    if_five = node.parent.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.parent.data.spell.indexOf(value) !== -1
    if_six = node.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.parent.parent.data.spell.indexOf(value) !== -1
    if_seven = node.parent.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.parent.parent.parent.data.spell.indexOf(value) !== -1
    if_eight = node.parent.parent.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1
    result_eight = if_one || if_two || if_three || if_four || if_five || if_six || if_seven || if_eight
  } else if (node.level === 9) {
    if_one = data.name.indexOf(value) !== -1 || data.spell.indexOf(value) !== -1
    if_two = node.parent.data.name.indexOf(value) !== -1 || node.parent.data.spell.indexOf(value) !== -1
    if_three = node.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.data.spell.indexOf(value) !== -1
    if_four = node.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.data.spell.indexOf(value) !== -1
    if_five = node.parent.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.parent.data.spell.indexOf(value) !== -1
    if_six = node.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.parent.parent.data.spell.indexOf(value) !== -1
    if_seven = node.parent.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.parent.parent.parent.data.spell.indexOf(value) !== -1
    if_eight = node.parent.parent.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.parent.parent.parent.parent.data.spell.indexOf(value) !== -1
    if_nine = node.parent.parent.parent.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1
    result_nine = if_one || if_two || if_three || if_four || if_five || if_six || if_seven || if_eight || if_nine
  } else if (node.level === 10) {
    if_one = data.name.indexOf(value) !== -1 || data.spell.indexOf(value) !== -1
    if_two = node.parent.data.name.indexOf(value) !== -1 || node.parent.data.spell.indexOf(value) !== -1
    if_three = node.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.data.spell.indexOf(value) !== -1
    if_four = node.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.data.spell.indexOf(value) !== -1
    if_five = node.parent.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.parent.data.spell.indexOf(value) !== -1
    if_six = node.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.parent.parent.data.spell.indexOf(value) !== -1
    if_seven = node.parent.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.parent.parent.parent.data.spell.indexOf(value) !== -1
    if_eight = node.parent.parent.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.parent.parent.parent.parent.data.spell.indexOf(value) !== -1
    if_nine = node.parent.parent.parent.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1 || node.parent.parent.parent.parent.parent.parent.parent.parent.data.spell.indexOf(value) !== -1
    if_ten = node.parent.parent.parent.parent.parent.parent.parent.parent.parent.data.name.indexOf(value) !== -1
    result_ten = if_one || if_two || if_three || if_four || if_five || if_six || if_seven || if_eight || if_nine || if_ten
  }
  return result_one || result_two || result_three || result_four || result_five || result_six || result_seven || result_eight || result_nine || result_ten
}


    export function showCloseTree() {
       var self=this;
       var allNodes  = this.$refs.tree.store._getAllNodes();
       var context = {};
       if (this.treeSH == false) {
         this.showAllTree = true;
           bigArrayEach(allNodes,context,function(arrayTemp,currentNode,contextTemp){
             currentNode.expanded = true;
           },function(){
             self.treeSH = !self.treeSH
           },500);
       } else {
         bigArrayEach(allNodes,context,function(arrayTemp,currentNode,contextTemp){
           currentNode.expanded = false;
         },function(){
           self.treeSH = !self.treeSH
         },500);
       }
     }
/**
  * JS解决大数组循环，解决 浏览器假死现象。
  * @param eachArray 要环的数据。
  * @param context 上下文对象，用于存放数据引用。delFlag:用于删除当前元素
  * @param handerFunction  循环体内的真实处理逻辑。(回调函数) 如果返回true:1:null:undefine，则循环继续，如果返回其他值，则循环停止。并调用successFunction方法。
  * @param successFunction 循环结束，处理逻辑（回调函数）
  * @para fastModeValue   加速    值   轩默认为20 int 类型
  * */
export function bigArrayEach(eachArray, context, handerFunction, successFunction, fastModeValue) {
   bigArrayEachA(eachArray, context, handerFunction, successFunction, fastModeValue, 1)
 }

 function isNullStrValue(value) {
   return value === null || value === undefined;
 }

 function bigArrayEachA(eachArray, context, handerFunction, successFunction, fastModeValue, timoutValueParam) {
   var timoutValue = timoutValueParam;
   if (timoutValueParam === null) {
     timoutValue = 0;
   }
   var modeValue = 20;
   if (!isNullStrValue(fastModeValue)) {
     modeValue = fastModeValue;
   }
   //处理方法
   var _nextAction = function (EachArray, Context, IndexParam) {

     var handerAction = function () {
       //上下文对象为空，创建一个。
       var Index = IndexParam;
       Context['index'] = IndexParam;
       // } else {
       //   Context['index'] = Index;
       // }
       if (Index >= EachArray.length) {
         //如果数组循环完成，则结束。回调成功执行函数
         successFunction(EachArray, Context);
       } else {
         //调用处理数据内容对象。
         var retVal = handerFunction(EachArray, EachArray[Index], context);
         if (context['delFlag']) {
 //                    array.splice(start,delCount);//从start的位置开始向后删除delCount个元素
           EachArray.splice(Index, 1);
           Index--;
         }
         context["delFlag"] = false;
         if (isNullStrValue(retVal) || retVal==true) {
           Index++;
           _nextAction(EachArray, context, Index);
         } else {
           successFunction(EachArray, Context);
           return false;
         }

       }
     }


     //进行提速。
     if (IndexParam % modeValue == 0) {
       setTimeout(handerAction, timoutValue);
     } else {
       handerAction();
     }
   }
   _nextAction(eachArray, context, 0);
 }
