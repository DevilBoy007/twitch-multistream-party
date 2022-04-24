<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Bebas-Neue&display=swap" rel="stylesheet">
</svelte:head>
<style>
.rounded
{
	color: orange;
	background-color: #2A2A2A;
	position: absolute;
	right: 1vw;
	max-width: max-content;
	padding: 1vw;
	border-radius: 20px;
	z-index: 1;
	box-shadow: 2px 3px 15px #000
}
</style>
<script>
	import { createEventDispatcher } from 'svelte'
	let channel = ''
	const dispatch = createEventDispatcher()
  function add() {
		dispatch('add', channel)
		channel = ''
	}
</script>
<div class="rounded">
	<p>Enter a channel to stream:</p>
	<input type="text" placeholder='auronplay' bind:value={channel}>
	<button on:click={add}>add</button>
</div>
