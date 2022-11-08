<head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue" rel="stylesheet">
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"></script>
</head>
<style>
.component-wrapper
{
  display: flex;
  flex-shrink: 2;
  flex-direction: column;
  margin: 2vw;
  order: var(--o,0)
}
.component-wrapper:hover
{
  cursor:grab
}
.component-wrapper:active
{
  cursor: grabbing
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
  cursor:grab
}
</style>
<script>
export let channel
export let party
export let order
export let color1
export let color2
export let color3
import { createEventDispatcher } from 'svelte'
import { draggable } from '@neodrag/svelte'
const dispatch = createEventDispatcher()
function remove() { dispatch('remove', channel)}
</script>
<div class="component-wrapper" style="--o:{order}" use:draggable={{}}>
	<h1 on:click={remove}>{"game"}: {channel}</h1>
	<div class:twitch-wrapper-blue="{ party == true }" style="--c1:{color1};--c2:{color2};--c3:{color3};" >
		<iframe src='https://player.twitch.tv/?channel={channel}&parent=localhost' title = 'stream' frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
	</div>
</div>
