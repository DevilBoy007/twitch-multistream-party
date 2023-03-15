<svelte:head>
	title="twitch party"
</svelte:head>
<script>
//import {HsvPicker} from 'svelte-color-picker'
import { onMount } from 'svelte';
import TwitchFeed from './TwitchFeed.svelte'
import TwitchInputBar from './TwitchInputBar.svelte'
import PartyButton from './PartyButton.svelte'
import StreamSearch from './StreamSearch.svelte'
import ColorPicker from './ColorPicker.svelte'
import Tooltip from './Tooltip.svelte'
let channels = []
let available_streams = []
let party = false
let partyScreenColors
let partyUIColors
let token = ''
let lastGameSearch = ''
let ttColor = false
let ttParty = true
const data = 
{
	'grant_type':'client_credentials',
	'client_id':'g4jmj1um0k0rs5b57yescjc81zv6oc',
	'client_secret':'m24gzg5ryd7qqk3ytyj8t996a7mdwq'
}
const colors = 
[
	"orange",
	"#cd96cd",
	"deepskyblue",
	"orchid",
	"#58f7cd",
	"#82cd03",
	"#1524ec",
	"aqua",
	"#fdee00",
	"#ff91af",
	"#fe6f5e",
	"#0000ff",
	"#8a2be2",
	"#66ff00",
	"#ff55a3"
]
onMount(async () => {
	await fetch('https://id.twitch.tv/oauth2/token', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(response => {
		return response.json()
	}).then(data => {
		token = data.access_token
		console.log(`Session access token: ${token}`)
	}).catch(e => console.log(e))
})

partyScreenColors = {color1:'#00bfff', color2:'#008000', color3:'#da70d6'}
partyUIColors = {color1: '#da70d6', color2: '#FFA500', color3: '#00bfff'}
</script>
<style>
	::-webkit-scrollbar {
  display: none;
}
	:global(body)
	{
		padding:0
	}
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
		color: var(--text-color,#cd96cd);
		background-color: #2A2A2A;
		top: 1vh;
		right:1vw;
		margin-bottom: 1em;
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
		margin-bottom: 1em;
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
		color: var(--text-color,#cd96cd);
		background-color: #2A2A2A;
		max-width: 9em;
		max-height: 20vh;
		overflow-y: auto;
		padding-right: 0.5em;
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
	ul>p
	{
		color:var(--text-color,#cd96cd);
	}
	iframe
	{
		margin-top: 1em;
		float: right;
	}
</style>
<body style="font:'Gill Sans';font-size: 18px; background-color:#272727;justify-content: space-evenly; overflow: auto; height:100%">
	<div style="display:flex"> <!--this is a flexbox for future button add-ons-->
		<PartyButton bind:party/>
	</div>
	<div class='PanelWrapper'>
		<div class="{party?'InputWrapperParty':'InputWrapper'}" style="--c1:{partyUIColors['color1']}; --c2:{partyUIColors['color2']}; --c3:{partyUIColors['color3']}; --text-color:{colors[Math.floor(Math.random() * colors.length)]}">
			<TwitchInputBar on:add = { (e) => channels = [...channels, e.detail]}/>
			<StreamSearch token={token} on:game = { (e) => lastGameSearch = e.detail } on:search = { (e) => available_streams = e.detail} on:clear={(e)=>available_streams=[]}/>
		</div>
		<div>
		{#if available_streams.length>0}
			<div class="{party?'OutputWrapperParty':'OutputWrapper'}" style="--c1:{partyUIColors['color1']}; --c2:{partyUIColors['color2']}; --c3:{partyUIColors['color3']}; --text-color:{colors[Math.floor(Math.random() * colors.length)]}">
				<ul>
					{#each available_streams as user (user)}
					<p style="--text-color:{colors[Math.floor(Math.random() * colors.length)]}" class='Stream' on:click={()=>{channels=[...channels,user]; available_streams=available_streams.filter(c => c != user)}}>{ user }</p>
					{/each}
				</ul>
			</div>
		{/if}
		{#if party}
			<ColorPicker {...partyUIColors} name={"ui"} text_color={colors[Math.floor(Math.random() * colors.length)]} on:color1={(e) => {partyUIColors['color1']=e.detail; ttColor = true }} on:color2={ (e) => {partyUIColors['color2']=e.detail; ttColor = true }} on:color3={(e) => {partyUIColors['color3']=e.detail; ttColor = true }}/>
			<ColorPicker {...partyScreenColors} name={"screens"} text_color={colors[Math.floor(Math.random() * colors.length)]} on:color1={(e) => {partyScreenColors['color1']=e.detail; ttColor = true} } on:color2={ (e) => {partyScreenColors['color2']=e.detail; ttColor = true} } on:color3={ (e) => {partyScreenColors['color3']=e.detail; ttColor = true} }/>
		{/if}
		</div>
	</div>
	<Tooltip text_color={colors[Math.floor(Math.random() * colors.length)]} bind:state={ttParty} text={"Flip the switch to start the party! 🥳"}/>
	<Tooltip text_color={colors[Math.floor(Math.random() * colors.length)]} bind:state={ttColor} text={"Toggle switch to see your changes!"}/>

	<!--InputBar on:add={ (e) => sites = [...sites, e.detail]}/-->
	<div style="display:flex; flex-flow: row wrap;">
	{#each channels as channel, i (i)}
		<TwitchFeed {lastGameSearch} {channel} {party} order={i} text_color={colors[Math.floor(Math.random() * colors.length)]} bind:color1={partyScreenColors['color1']} bind:color2={partyScreenColors['color2']} bind:color3={partyScreenColors['color3']} on:remove = { (e) => channels = channels.filter(c => c != e.detail) }/>
	{/each}
	</div>
</body>
