<head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue" rel="stylesheet">
</head>
<style>
.component-wrapper
{
  display: flex;
  flex-shrink: 2;
  flex-direction: column;
  padding: 2vw;
}
.twitch-wrapper-blue
{
  border-radius: 12px;
  box-shadow: -4px 4px 12px;
  color: #FFF;
  animation: bluePulse 2s infinite;
}
@keyframes bluePulse
{
  0% {box-shadow: -8px 8px 18px;color:var(--c1, 'blue');}
  50% {box-shadow: -8px 8px 18px;color:var(--c2,'green');}
  100%{box-shadow: -8px 8px 18px;color:var(--c3, 'red');}
}
h1
{
  padding-left: 2vw;
  color: deepskyblue;
  text-shadow: -1px 1px 4px #0074ff;
  font-family: 'Bebas Neue'
}
h1:hover
{
  cursor: not-allowed;
}
iframe
{
  border-radius: 12px;
  box-shadow: -4px 4px 15px #000;
}
</style>
<script>
export let channel
export let party
export let color1
export let color2
export let color3
import { createEventDispatcher } from 'svelte'
const dispatch = createEventDispatcher()
function remove() { dispatch('remove', channel)}
</script>
<div class="component-wrapper">
	<h1 on:click={remove}>{channel}</h1>
	<div class:twitch-wrapper-blue="{ party == true }" style="--c1:{color1};--c2:{color2};--c3:{color3};">
		<iframe src='https://player.twitch.tv/?channel={channel}&parent=localhost' title = 'stream' frameborder="0" allowfullscreen="true" scrolling="no" height="366" width="600"></iframe>
	</div>
</div>
