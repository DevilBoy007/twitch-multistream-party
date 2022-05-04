<style>
.rounded
{
  display:flex;
  flex-flow: column nowrap;
  background-color: #2a2a2a;
	max-width: max-content;
  max-height: max-content;
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
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
	export let color1, color2, color3
</script>
<div class=rounded>
	<input type=color bind:value={color1} on:change={()=>{dispatch('color1',color1); console.log(color1)}}>
  <br>
  <input type=color bind:value={color2} on:change={()=>{dispatch('color2',color2); console.log(color2)}}>
  <br>
  <input type=color bind:value={color3} on:change={()=>{dispatch('color3',color3); console.log(color3)}}>
  <br>
</div>
