var SERVERURL = "http://192.168.23.7:8080/";
function setUrl() {
	SERVERURL = $api.getStorage("urlToken");
}

//var SERVERURL = "http://120.24.84.93:8080/dongqing/";

//var SERVERURL = "http://192.168.1.130:8080/dongqing/";

function convertActiveType(value) {

	if (value == 1) {
		return "[ 群活动 ]";
	} else if (value == 2) {
		return "[ 个人邀约 ]";
	} else if (value == 3) {
		return "[ 群组推荐 ]";
	} else if (value == 4) {
		return "[ 个人推荐 ]";
	}

}

function convertMis(mis) {
	return mis;
}

var by = function(name) {
	return function(o, p) {
		var a, b;
		if ( typeof o === "object" && typeof p === "object" && o && p) {
			a = o[name];
			b = p[name];
			if (a === b) {
				return 0;
			}
			if ( typeof a === typeof b) {
				return a < b ? -1 : 1;
			}
			return typeof a < typeof b ? -1 : 1;
		} else {
			throw ("error");
		}
	}
}
function searchUtil(fun) {

	var obj = api.require('UISearchBar');
	obj.open({
		placeholder : '请输入搜索关键字',
		historyCount : 10,
		showRecordBtn : false,
		texts : {
			cancelText : '取消',
			clearText : '清除搜索记录'
		},
		styles : {
			navBar : {
				bgColor : '#FFFFFF',
				borderColor : '#ccc'
			},
			searchBox : {
				bgImg : '',
				color : '#000',
				height : 44
			},
			cancel : {
				bg : 'rgba(0,0,0,0)',
				color : '#D2691E',
				size : 19
			},
			list : {
				color : '#696969',
				bgColor : '#FFFFFF',
				borderColor : '#eee',
				size : 16
			},
			clear : {
				color : '#000000',
				borderColor : '#ccc',
				size : 16
			}
		}
	}, function(ret) {
		if (ret.eventType == 'record') {

		} else if (ret.eventType == 'search') {
			fun(ret);
		} else if (ret.eventType == 'history') {
			fun(ret);
		} else {
			fun(ret);
		}
	});
}

var convertPlData = function(data) {
	return data;
}
var openWindow = function(name, url, pageParam) {
	api.openWin({
		name : name,
		url : url,
		pageParam : pageParam,
		delay : 200,
		slidBackEnabled : false,
		hScrollBarEnabled : false
	});
}
var convertHy = function(value) {
	if (value == "1") {
		return "已婚";
	} else if (value == "2") {
		return "未婚";
	} else if (value == "3") {
		return "单身";
	} else {
		return "未知";
	}
}
var convertSex = function(value) {
	if (value == "1") {
		return "男";
	} else {
		return "女";
	}
}
var isImgFile = function(fileName) {
	if (fileName.toUpperCase().endWith(".JPG") || fileName.toUpperCase().endWith(".JPEG") || fileName.toUpperCase().endWith(".PNG") || fileName.toUpperCase().endWith(".BMP")) {
		return true;
	} else {
		return false;
	}
}
Date.prototype.Format = function(fmt) {//author: meizz
	var o = {
		"M+" : this.getMonth() + 1, //月份
		"d+" : this.getDate(), //日
		"h+" : this.getHours(), //小时
		"m+" : this.getMinutes(), //分
		"s+" : this.getSeconds(), //秒
		"q+" : Math.floor((this.getMonth() + 3) / 3), //季度
		"S" : this.getMilliseconds() //毫秒
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
	if (new RegExp("(" + k + ")").test(fmt))
		fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}

String.prototype.replaceAll = function(s1, s2) {
	return this.replace(new RegExp(s1, "gm"), s2);
	//g全局
}
/**
 *  网络数据请求
 * @param {Object} url  链接的服务器地址
 * @param {Object} type   传递的是 GET  OR POST
 * @param {Object} params   参数   JSON 参数   values:JSON 参数    files 表示你要上传的文件
 * @param {Object} successFun   成功的执行方法
 * @param {Object} errorFun  失败的执行方法
 */
var doAjax = function(url, type, params, successFun, errorFun, flag) {
	if (flag != null && flag == 1) {

		api.showProgress({
			title : '加载中...',
			modal : false
		});

	}
	var uuid = "";
	api.ajax({
		url : url,
		timeout : 30,
		dataType : 'json',
		method : type,
		returnAll : false,
		data : params
	}, function(ret, err) {
		if (ret) {
			successFun(ret);
		} else {
		}
		if (flag != null && flag == 1) {
			api.hideProgress();
		}
	});
}
var dz = SERVERURL + "activesController/dz";
var listGr = SERVERURL + "activesController/listGr";

var listMyList = SERVERURL + "activesController/listMyList";

var ACTIVELIST = SERVERURL + "activesController";

var ACTIVELISTFilter = SERVERURL + "activesController/filter";

var ACTIVELISTById = SERVERURL + "activesController/listById";

var LOGIN = SERVERURL + "tabusersController/login";

var SENDCODE = SERVERURL + "tabusersController/sendCode";

var REGISTERUSER = SERVERURL + "tabusersController/registerUser";

var JOINACTIVE = SERVERURL + "activesController/joinActive";

var JOINACTIVE = SERVERURL + "activesController/joinActive";

var listUser = SERVERURL + "tabusersController/listUser";

var uploadImg = SERVERURL + "tabusersController/uploadImg";

var USERLISTID = SERVERURL + "tabusersController/listById";

var upUserInfo = SERVERURL + "tabusersController/upUserInfo";

var addPersonActive = SERVERURL + "activesController/addPersonActive";

var addGroup = SERVERURL + "usergroupsController/addGroup";

var listFirendAndQroup = SERVERURL + "usergroupsController/listFirendAndQroup";

var getUserInfoById = SERVERURL + "tabusersController/getUserInfoById";

var addFirends = SERVERURL + "firendslistController/addFired";

var isFirends = SERVERURL + "firendslistController/isFirends";

var isGroupUsers = SERVERURL + "usergroupsController/isGroupUsers";

var JOINGROUP = SERVERURL + "usergroupsController/joinGroup";

var GroupUserList = SERVERURL + "usergroupsController/groupUserList";

var GroupUserDelete = SERVERURL + "usergroupsController/groupUserDelete";

var GROUPINFO = SERVERURL + "usergroupsController/groupInfo";

var ACTIVEDELETE = SERVERURL + "activesController/activeDelete";

var ACTIVEQUIT = SERVERURL + "activesController/activeQuit";

var FIRENDDELETE = SERVERURL + "firendslistController/firendDelete";

var forgetPassord = SERVERURL + "tabusersController/forgetPassord";

var checkCode = SERVERURL + "tabusersController/checkCode";

var deleteGroup = SERVERURL + "usergroupsController/deleteGroup";

var listMyUsers = SERVERURL + "tabusersController/listMyUsers";

var activePL = SERVERURL + "activesController/activePL";

var listMyActive = SERVERURL + "activesController/listMyActive";

var yjfk = SERVERURL + "activesController/yjfk";

var searchUsers = SERVERURL + "activesController/searchUsers";

var exitGroup = SERVERURL + "usergroupsController/exitGroup";

var upDataBlackUser = SERVERURL + "tabusersController/upDataBlackUser";

var listBlackUser = SERVERURL + "tabusersController/listBlackUser";

var activeid = SERVERURL + "activesController/activeid";

var activeUsers = SERVERURL + "activesController/activeUsers";

var deleteActiveUsers = SERVERURL + "activesController/deleteActiveUsers";

var firendByRowid = SERVERURL + "firendslistController/getFirends";

var submitOrder = SERVERURL + "firendslistController/submitOrder";

var getGroupByFirend = SERVERURL + "usergroupsController/getGroupByFirend";

var submitOrder1 = SERVERURL + "usergroupsController/submitOrder1";

var actionSheet = function(title, buttons, fun) {
	api.actionSheet({
		title : title,
		cancelTitle : '取消',
		buttons : buttons
	}, function(ret, err) {
		fun(ret);
	});
}
String.prototype.endWith = function(str) {
	var reg = new RegExp(str + "$");
	return reg.test(this);
}
var getDownLoadFile = function(fileName, dom) {
	var downFlag = true;
	var manager = api.require('downloadManager');
	api.showProgress({
		style : 'default',
		animationType : 'zoom',
		title : '开始加载文件...',
		modal : false
	});
	var url = SERVERURL + fileName;
	Value = api.download({
		url : url,
		savePath : 'fs://' + fileName,
		report : true,
		cache : true,
		allowResume : true
	}, function(ret, err) {
		if (ret.state != "1") {
			api.showProgress({
				style : 'default',
				animationType : 'zoom',
				title : '已经加载进度' + ret.percent,
				modal : false
			});
		} else {
			saveFilePath = ret.savePath;
			api.hideProgress();
			api.hideProgress();
			var html = $(dom).html();
			$(dom).html("正在播放")
			$(dom).attr("isPlay", "1");
			api.startPlay({
				path : "fs://" + fileName
			}, function() {
				$(dom).html(html);
				$(dom).removeAttr("isPlay");
				api.alert({
					msg : '播放完成'
				});
			});
		}
	});

}
var setPrefs = function(key, value) {
	api.setPrefs({
		key : key,
		value : value
	});
}
//加载融云信息

function initRongYun() {
	api.getPrefs({
		key : 'rongtoken'
	}, function(ret, err) {
		var value = ret.value;
		var rong = api.require('rongCloud');
		var frame = api.frameName;

		if (value == null || value.length == 0) {
			return;
		}
		rong.init(function(ret, err) {
			if (ret.status != 'error') {

				rong.setOnReceiveMessageListener(function(ret, err) {
					saveMessage(ret.result.message);
					rong.setMessageReceivedStatus({
						messageId : ret.result.message.messageId,
						receivedStatus : 2
					}, function(ret, err) {
					})
					rong.clearConversations({
						conversationTypes : ['PRIVATE', 'GROUP', 'SYSTEM']
					}, function(ret, err) {
					})
				})

				rong.connect({
					token : value
				}, function(ret, err) {
					if (ret.status == 'success') {
						api.toast({
							msg : "连接消息服务器成功"
						});

					} else {
						api.toast({
							msg : err.msg
						});
					}
				});

				rong.setConnectionStatusListener(function(ret, err) {
					if (ret.result.code == "6") {
						api.alert({
							msg : "您的账号在其他设备登陆，如不是本人，请更改密码"
						}, function(ret, err) {

							var sql = "DELETE FROM message ";
							upDataSql(sql, function() {
								removePrefs("token");
								removePrefs("rongtoken");
								$api.rmStorage("token");
								$api.rmStorage("rongtoken");
								api.closeToWin({
									name : 'root'
								});
							});
						});
					}

				});

			}
		});
	});
}

var saveMessage = function(message) {
	var token = "";
	token = $api.getStorage("token");

	var msg = {};
	if (message.objectName == "RC:TxtMsg") {
		msg = {
			"content" : message.content.text,
			"conversationType" : message.conversationType,
			"targetId" : message.targetId,
			"objectName" : message.objectName,
			"messageId" : message.messageId,
			"sentTime" : message.sentTime,
			"objectName" : "RC:TxtMsg",
			"senderUserId" : message.senderUserId
		}
	} else if (message.objectName == "RC:ImgMsg") {
		msg = {
			"content" : message.content.imageUrl,
			"conversationType" : message.conversationType,
			"targetId" : message.targetId,
			"objectName" : message.objectName,
			"messageId" : message.messageId,
			"sentTime" : message.sentTime,
			"objectName" : "RC:ImgMsg",
			"senderUserId" : message.senderUserId
		}
	} else if (message.objectName == "RC:VcMsg") {
		msg = {
			"content" : message.content.voicePath,
			"conversationType" : message.conversationType,
			"targetId" : message.targetId,
			"objectName" : message.objectName,
			"messageId" : message.messageId,
			"sentTime" : message.sentTime,
			"duration" : message.content.duration,
			"objectName" : "RC:VcMsg",
			"senderUserId" : message.senderUserId
		}
	} else if (message.objectName == "RC:CmdNtf") {
		msg = {
			"content" : JSON.stringify(message.content),
			"conversationType" : message.conversationType,
			"targetId" : message.targetId,
			"objectName" : message.objectName,
			"messageId" : message.messageId,
			"sentTime" : message.sentTime
		}
	}

	var sql = "SELECT *  from contents where targetId='" + message.targetId + "'";

	readSQL(sql, function(data) {
		if ((data.length > 0 && data[0].flag == "2" ) || data.length == 0) {
			api.notification({
			}, function(ret, err) {
			});
		}
	})
	var sql = "INSERT INTO message(content,conversationType,targetId,messageId,sentTime,duration,status,objectName,userId,senderUserId,extra) VALUES('" + msg.content + "','" + msg.conversationType + "','" + msg.targetId + "','" + msg.messageId + "','" + msg.sentTime + "','" + msg.duration + "','" + 1 + "','" + msg.objectName + "','','" + msg.senderUserId + "','" + message.content.extra + "')";
	var db = api.require('db');

	db.executeSql({
		name : 'msg',
		sql : sql
	}, function(ret, err) {
		api.execScript({
			script : 'changeTip();',
			name : "root",
		});

		api.execScript({
			script : 'changeTip();',
			name : "root",
		});

		api.execScript({
			script : 'init();',
			"name" : "root",
			frameName : "firendList"
		});
		api.execScript({
			script : 'initData();',
			"name" : "root",
			frameName : "messageList"
		});

		if (message.conversationType == "SYSTEM") {
			var extra = message.content.extra;
			try {
				extra = JSON.parse(extra);
			} catch(e) {
			}
			if (extra.parame2 == "GROUPDELETE") {
				api.alert({
					msg : message.content.text
				}, function(ret, err) {
					if (message.targetId == $api.getStorage("targetIds")) {

						var sql = "DELETE FROM message where targetId='" + message.targetId + "'";
						upDataSql(sql, function(data) {
							api.execScript({
								script : 'changeTip();',
								name : "root",
							});

							api.execScript({
								script : 'init();',
								"name" : "root",
								frameName : "firendList"
							});
							api.execScript({
								script : 'initData();',
								"name" : "root",
								frameName : "messageList"
							});

							api.closeWin({
							});
						});
					}
				});

			} else {

			}

		}

	});

}
var dateDiff = function(hisTime, nowTime) {
	var now = nowTime ? nowTime : new Date().getTime(), diffValue = now - hisTime, result = '', minute = 1000 * 60, hour = minute * 60, day = hour * 24, halfamonth = day * 15, month = day * 30, year = month * 12, _year = diffValue / year, _month = diffValue / month, _week = diffValue / (7 * day), _day = diffValue / day, _hour = diffValue / hour, _min = diffValue / minute;

	if (_year >= 1)
		result = parseInt(_year) + "年前";
	else if (_month >= 1)
		result = parseInt(_month) + "个月前";
	else if (_week >= 1)
		result = parseInt(_week) + "周前";
	else if (_day >= 1)
		result = parseInt(_day) + "天前";
	else if (_hour >= 1)
		result = parseInt(_hour) + "个小时前";
	else if (_min >= 1)
		result = parseInt(_min) + "分钟前";
	else
		result = "刚刚";
	return result;

}
var convertDate = function(longTime) {
	var date = new Date();

	date.setTime(longTime);

	var da = date.getDate();
	if (da <= 9) {
		da = "0" + da;
	}
	var hour = date.getHours();
	if (hour <= 9) {
		hour = "0" + hour;
	}

	var micus = date.getMinutes();

	if (micus <= 9) {
		micus = "0" + micus;
	}
	var mm = (date.getMonth() + 1);
	if (mm <= 9) {
		mm = "0" + mm;
	}

	var value = date.getFullYear() + "-" + mm + "-" + da + " &nbsp;&nbsp;" + hour + ":" + micus

	return value;
}
var convertDate1 = function(longTime) {
	var date = new Date();

	date.setTime(longTime);
	var hour = date.getHours();
	if (hour < 10) {
		hour = "0" + hour;
	}

	var min = date.getMinutes();
	if (min < 10) {
		min = "0" + min;
	}
	var value = hour + ":" + min;

	return value;
}
var removePrefs = function(key) {
	api.removePrefs({
		key : key
	});
}
function openDataBase(type) {

	var db = api.require('db');
	db.openDatabase({
		name : 'msg'
	}, function(ret, err) {
		if (type == "first") {
			api.execScript({
				script : 'changeTip();',
				name : "root",
			});
		}
	});
}

function isFirst() {

	api.getPrefs({
		key : 'first'
	}, function(ret, err) {
		var value = ret.value;
		setPrefs("first", "1");
		if (value == null || value == "") {
			//创建数据库
			var db = api.require('db');
			db.openDatabase({
				name : 'msg'
			}, function(ret, err) {
				if (ret.status) {
					var sql = 'CREATE TABLE message(rowid INTEGER ,content varchar(500),conversationType varchar(255),targetId varchar(255),messageId varchar(255),sentTime varchar(255),duration varchar(255),status varchar(255),objectName varchar(255),userId varchar(255),senderUserId varchar(255),extra varchar(1000))'
					db.executeSql({
						name : 'msg',
						sql : sql
					}, function(ret, err) {
						if (ret.status) {
							api.toast({
								msg : '初始化成功'
							});
						} else {
							api.alert({
								msg : err.msg
							});
						}
					});

					/**
					 *1 表示 已过滤
					 * 2  表示 取消过滤
					 */
					var sql = 'CREATE TABLE contents(targetId varchar(255),flag varchar(255))'
					db.executeSql({
						name : 'msg',
						sql : sql
					}, function(ret, err) {
						if (ret.status) {
							api.toast({
								msg : '初始化成功'
							});
						} else {
							api.alert({
								msg : err.msg
							});
						}
					});

				} else {
					api.toast({
						msg : '初始化数据失败',
						location : "middle"
					});
				}

			});
		} else {
			openDataBase("first");
			//已经有数据 就直接打开
		}
	});
}

function readSQL(sql, fun) {
	var db = api.require('db');
	db.selectSql({
		name : 'msg',
		sql : sql
	}, function(ret, err) {
		if (ret.status) {
			var data = ret.data;
			fun(data);
		} else {
			api.alert({
				"title" : "提示",
				"msg" : "数据查询失败"
			}, function(ret, err) {
			});
		}
	});
}

//执行SQL
function upDataSql(sql, fun) {
	var db = api.require('db');
	db.executeSql({
		name : 'msg',
		sql : sql
	}, function(ret, err) {
		if (ret.status) {
			fun();
		} else {
			api.alert({
				msg : err.msg
			});
		}
	});
}

/**
 *
 * @param {Object} arrayString
 * @param {Object} object
 */
var removeArrayByObject = function(arrayString, value) {
	var array = arrayString.split(",");

	for (var i = 0; i < array.length; i++) {
		if (array[i] == value) {
			for (var j = 0; j < array.length - 1; j++) {
				array[j] = array[j + 1];
			}
			array.pop()
		}
	}
	return array.join(",")
}
function readSQL(sql, fun) {
	var db = api.require('db');

	db.selectSql({
		name : 'msg',
		sql : sql
	}, function(ret, err) {
		if (ret.status) {
			var data = ret.data;
			fun(data);
		} else {
			api.alert({
				"title" : "提示",
				"msg" : "数据查询失败"
			}, function(ret, err) {
			});
		}
	});
}

var getId = function() {
}
function upDataSql(sql, fun) {
	var db = api.require('db');
	db.executeSql({
		name : 'msg',
		sql : sql
	}, function(ret, err) {
		if (ret.status) {
			fun();
		} else {
			api.alert({
				msg : err.msg
			});
		}
	});
}

//更新红点数据

var updateFootValue = function() {
}

