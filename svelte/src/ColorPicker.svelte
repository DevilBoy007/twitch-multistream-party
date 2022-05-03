<style>
.rounded
{
  background-color: #2a2a2a;
	max-width: max-content;
	padding: 1vw;
	padding-bottom: 0;
	border-radius: 12px;
  margin-top:1vh;
  margin-right: .5em;
  box-shadow: 2px 3px 15px #000;
  float:right;
  position: relative;
}
input
{
  background-color:#2a2a2a;
  border:none;
	height:50px;
	padding:0;
	border-radius:0;
}
</style>
<script>
	let colors = ['#00bfff','#008000','#da70d6']
</script>
<div class=rounded>
	{#each colors as color (color)}
	<input type=color value={color}>
  <br>
	{/each}
</div>
