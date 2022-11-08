<style>
  .rounded
  {
  	max-width: max-content;
  	padding: 1vw;
    padding-top:0;
  	border-radius: 12px;
  	z-index: 1;
  }
</style>
<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  let input = ''
  let channels
  let url
  let params
  export let token = ''
  async	function getGameID(game) {
		console.log(`attempting to get game ID for ${game} using access token: ${token}`)
		params = new URLSearchParams({ name:game })
		url = 'https://api.twitch.tv/helix/games?' + params
		const response = await fetch(url,
				 {
					method: 'GET',
					headers: {
						'Authorization': `Bearer ${token}`,
						'Client-Id':'g4jmj1um0k0rs5b57yescjc81zv6oc'
					}
		})
		.then( response => { return response.json() })
		.catch( e => console.log(e))
		console.log('RESPONSE', response)
		console.log(response.data[0].id)
		return response.data[0].id
	}
  async	function getStreams(game) {
		let gameID = await getGameID(game)
		params = new URLSearchParams({game_id:gameID})
		url = 'https://api.twitch.tv/helix/streams?'+params
		const response = await fetch(url,
			{
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${token}`,
				'Client-Id':'g4jmj1um0k0rs5b57yescjc81zv6oc'
			}
		})
		.then( response => { return response.json() })
		.catch( e => console.log(e))
		channels = []
    for(let item of response.data){
      channels = [...channels, item.user_login]
    }
  }
  async function search(game){
    await getStreams(game)
    dispatch('search',channels)
    channels = null // reset local list for next dispatch
  }
</script>
<div class='rounded'>
  <p>Search live game streams</p>
  <input id='game' type='search' placeholder='Apex Legends' bind:value={input} on:search={ () => dispatch('clear')} on:keydown={(e) => e.key==='Enter'?search(input):''}/>
  <button on:click = {search(input)}>search</button>
</div>
