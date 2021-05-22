<script>
		Bmob.initializa("42703225079892d4", "786886");
		Bmob.debug(true);
		function login(){
			 Bmob.User.login(document.getElementById("username").value,document.getElementById("pwd").value).then(res => {
			   location.href = "userinfo.html";
			 }).catch(err => {
			  alert(err.error)
			});
		}
		function regist(){
			location.href = "index.html"
		}
	</script>