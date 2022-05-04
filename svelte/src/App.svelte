<svelte:head>
	title="archives"
</svelte:head>
<script>
//import {HsvPicker} from 'svelte-color-picker'
import TwitchFeed from './TwitchFeed.svelte'
import TwitchInputBar from './TwitchInputBar.svelte'
import PartyButton from './PartyButton.svelte'
import StreamSearch from './StreamSearch.svelte'
import ColorPicker from './ColorPicker.svelte'
let channels = []
let available_streams = []
let party = false
let partyScreenColors
let partyUIColors

partyScreenColors = {color1:'#00bfff', color2:'#008000', color3:'#da70d6'}
partyUIColors = {color1: '#da70d6', color2: '#FFA500', color3: '#00bfff'}
</script>
<style>
	.Stream
	{
		padding-left: 0;
	}
	.Stream:hover
	{
		cursor: pointer;
	}
	.PanelWrapper
	{
		display: flex;
		flex-flow: column nowrap;
		/*top: 1vh |this style keeps input wrapper div in view at all time but removes the ability for stream list to slide behind input bar */
		right: 1vw;
		float: right;
		position: sticky
	}
	.InputWrapper
	{
		color: orange;
		background-color: #2A2A2A;
		top: 1vh;
		right:1vw;
		float:right;
		position:sticky;
		max-width: max-content;
		border-radius: 20px;
		box-shadow: 2px 3px 15px #000;
		z-index: 1;
	}
	.InputWrapperParty
	{
		color: whitesmoke;
		top: 1vh;
		right:1vw;
		float:right;
		position:sticky;
		max-width: max-content;
		border-radius: 20px;
		box-shadow: 2px 3px 15px #000;
		z-index: 1;
		animation: fade 3s infinite
	}
	.OutputWrapper
	{
		color: orange;
		background-color: #2A2A2A;
		max-width: 9em;
		max-height: 20vh;
		overflow-y: auto;
		border-radius: 20px;
		box-shadow: 2px 3px 15px #000;
		margin-top: 1vh;
		position:absolute;
	}
	.OutputWrapperParty
	{
		color: whitesmoke;
		max-width: 9em;
		max-height: 20vh;
		overflow-y: auto;
		border-radius: 20px;
		box-shadow: 2px 3px 15px #000;
		margin-top: 1vh;
		padding-left:0;
		position: absolute;
		animation: fade2 3s infinite;
	}
	@keyframes fade {
		0% {background-color: var(--c1,'orchid');}
	  50% {background-color: var(--c2,'orange');}
	  100%{background-color: var(--c3,'deepskyblue');}
	}
	@keyframes fade2 {
		0% {background-color: var(--c3,'deepskyblue');}
	  50% {background-color: var(--c2,'orange');}
	  100%{background-color: var(--c1,'orchid');}
	}
	ul
	{
		padding-left:1em;
	}
</style>
<body style="font:'Gill Sans';font-size: 18px; background-color:#272727;justify-content: space-evenly; overflow: auto; height:100%">
<div style="display:flex"> <!--this is a flexbox for future button add-ons-->
	<PartyButton bind:party/>
</div>
<div class='PanelWrapper'>
	<div class="{party?'InputWrapperParty':'InputWrapper'}" style="--c1:{partyUIColors['color1']}; --c2:{partyUIColors['color2']}; --c3:{partyUIColors['color3']}">
		<TwitchInputBar on:add = { (e) => channels = [...channels, e.detail]}/>
		<StreamSearch on:search = { (e) => available_streams = e.detail} on:clear={(e)=>available_streams=[]}/>
	</div>
	<div>
		{#if available_streams.length>0}
		<div class="{party?'OutputWrapperParty':'OutputWrapper'}" style="--c1:{partyUIColors['color1']}; --c2:{partyUIColors['color2']}; --c3:{partyUIColors['color3']}">
			<ul>
			{#each available_streams as user (user)}
				<p class='Stream' on:click={()=>{channels=[...channels,user]; available_streams=available_streams.filter(c => c!= user)}}>{user}</p>
			{/each}
			</ul>
		</div>
		{/if}
		<ColorPicker {...partyUIColors} on:color1={(e) => {partyUIColors['color1']=e.detail} } on:color2={ (e) => {partyUIColors['color2']=e.detail} } on:color3={ (e) => {partyUIColors['color3']=e.detail} }/>
		<ColorPicker {...partyScreenColors} on:color1={(e) => {partyScreenColors['color1']=e.detail} } on:color2={ (e) => {partyScreenColors['color2']=e.detail} } on:color3={ (e) => {partyScreenColors['color3']=e.detail} }/>
	</div>
</div>
	<!--InputBar on:add={ (e) => sites = [...sites, e.detail]}/-->
	<div style="display:flex; flex-flow: row wrap;">
	{#each channels as channel (channel)}
		<TwitchFeed {channel} {party} bind:color1={partyScreenColors['color1']} bind:color2={partyScreenColors['color2']} bind:color3={partyScreenColors['color3']} on:remove = { (e) => channels = channels.filter(c => c != e.detail) }/>
	{/each}
	</div>
</body>
