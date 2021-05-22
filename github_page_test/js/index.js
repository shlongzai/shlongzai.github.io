<script>
		Bmob.initializa("42703225079892d4", "786886");
		Bmob.debug(true);
		function register(){
			let name = document.getElementById("username").value;
			let pwd = document.getElementById("pwd").value;
			if(name!=""&&pwd!=""){
				let params = {
				    username:name ,
				    password:pwd
				}
				Bmob.User.register(params).then(res => {
				  location.href = "login.html";
				}).catch(err => {
					alert(err.error);
				});
			}else{
				alert("用户名或密码不能为空")
			}
			
		}
	</script>