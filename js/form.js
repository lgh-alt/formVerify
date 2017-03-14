//声明一个对象，用来命名空间
var eg = {};
//定义一个公共函数获取Id;
eg.$ = function(id) {
	return document.getElementById(id);
}

//用户名验证
eg.checkUserNmae = function() {

		var u_name = eg.$("username");
		var nameLen = u_name.value.length;
		var un = eg.$('UN');

		if (nameLen == 0) {
			un.innerHTML = "用户名不能为空！";
			un.style.color = "red";
			return false;
		} else if (nameLen > 10) {
			un.innerHTML = "用户名长度不能超过10个字符！";
			un.style.color = "red";
			return false;
		} else if (nameLen < 3) {
			un.innerHTML = "用户名长度不能少于3个字符！";
			un.style.color = "red";
			return false;
		} else {
			un.innerHTML = "正确";
			un.style.color = "green";
		}
	}
	//密码验证
eg.checkpassword1 = function() {

		var pw1 = eg.$("password1");
		var pwLen1 = pw1.value.length;
		var c_pw1 = eg.$("PW1");

		if (pwLen1 == 0) {
			c_pw1.innerHTML = "密码不能为空！";
			c_pw1.style.color = "red";
			return false;
		} else if (pwLen1 > 16) {
			c_pw1.innerHTML = "密码长度不能超过16个字符！";
			c_pw1.style.color = "red";
			return false;
		} else if (pwLen1 < 6) {
			c_pw1.innerHTML = "密码长度不能少于6个字符！";
			c_pw1.style.color = "red";
			return false;
		} else {
			c_pw1.innerHTML = "正确";
			c_pw1.style.color = "green";
		}
	}
	//确认密码
eg.checkpassword2 = function() {
		var pw1 = eg.$("password1");
		var pw2 = eg.$("password2");
		var pw2Len = pw2.value.length;
		var c_pw2 = eg.$("PW2");

		if (pw2.value != pw1.value) {
			c_pw2.innerHTML = "密码不一致！";
			c_pw2.style.color = "red";
			return false;
		} else if (pw2Len == 0) {
			c_pw2.innerHTML = "密码不能为空！";
			c_pw2.style.color = "red";
			return false;
		} else {
			c_pw2.innerHTML = "正确";
			c_pw2.style.color = "green";
		}
	}
	//手机号码：
eg.phoneCheck = function() {
		var _phone = eg.$("phone").value;
		var reg = /^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;

		var ph = eg.$("PH");

		if (!(reg.test(_phone))) {
			ph.innerHTML = "手机号码有误！";
			ph.style.color = "red";
			return false
		} else {
			ph.innerHTML = "正确";
			ph.style.color = "green";
		}
	}
	//邮箱验证
eg.emailCheck = function() {

	var e_mail = eg.$("Email").value;
	var e_reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var em = eg.$("EM");

	if (!(e_reg.test(e_mail))) {
		em.innerHTML = "邮箱格式错误！";
		em.style.color = "red";
		return false;
	} else {
		em.innerHTML = "正确";
		em.style.color = "green";
	}
}

//提交验证
eg.verify = function() {

	if (eg.checkUserNmae() == false && eg.checkpassword1() == false && eg.checkpassword2() == false && eg.phoneCheck() == false && eg.emailCheck() == false) {
		alert("注册失败！");
		return false;
	} else {
		alert("注册成功!");
	}
}