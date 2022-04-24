<svelte:head>
	title="archives"
</svelte:head>
<script>
// import SiteView from './SiteView.svelte'
import TwitchFeed from './TwitchFeed.svelte'
// import InputBar from './InputBar.svelte'
import TwitchInputBar from './TwitchInputBar.svelte'
import PartyButton from './PartyButton.svelte'
/*
let sites = [{url:'https://www.codespot.org/',
								  title:'codespot '},
								{url:'https://www.merriam-webster.com/word-of-the-day/calendar',
									title: 'word of the day'},
								{url:'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
									title:'css-tricks flexbox'},
								{url:'http://www.nationalgeographic.com', title:'Nat Geo'}]
								*/
let channels = []
let party = false
</script>
<body style="background-color:#272727;justify-content: space-evenly;">
	<div style="display:flexbox">
		<PartyButton bind:party/>
		<TwitchInputBar on:add = { (e) => channels = [...channels, e.detail]}/>
	</div>
	<!--InputBar on:add={ (e) => sites = [...sites, e.detail]}/-->
	<div style="display:flex;overflow-x:auto;">
	{#each channels as channel}
		<TwitchFeed {channel} {party}/>
	{/each}
	</div>
</body>
