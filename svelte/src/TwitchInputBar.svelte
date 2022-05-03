<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Bebas-Neue&display=swap" rel="stylesheet">
</svelte:head>
<style>
.rounded
{
	max-width: max-content;
	padding: 1vw;
	padding-bottom: 0;
	border-radius: 12px;
	z-index: 1;
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
	<p>Enter a channel to stream</p>
	<input type="search" placeholder='auronplay' on:keydown={(e) => e.key==='Enter'?add():''} bind:value={channel}>
	<button on:click={add}>add</button>
</div>
