<script type="text/javascript">
  var wrap = document.querySelector(".wrap");
  var next = document.querySelector(".arrow_right");
  var prev = document.querySelector("arrow_left");
  function next_pic (){
  	var newLeft = parseInt(wrap.style.left)-600;
  	wrap.style.left = newLeft + "px";
  }
  next.onclick = function (){
  	next_pic()
  }
  prev.onclick = function(){
  	prev_pic()
  }
</script>