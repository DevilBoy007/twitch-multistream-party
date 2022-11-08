<style>
    div
    {
        font: 'Gill Sans';
    }
    p 
    {
        font-size: .9rem;
        margin-right:-1rem;
        color: orange;
    }
    .chip
    {
        margin-left: 1vw;
        width: 17rem;
        height: 4rem;
        border-radius: 20px;
        box-shadow: 1px 1px 35px #000, 
                    -1px -1px 50px #555;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .icon
    {
        width: 3rem;
        height: 2rem;
        border: 1px solid gainsboro;
        border-radius: 50%;
        margin: 0 1rem 0 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        color: gainsboro;
    }
    .close
    {
        width: 2rem;
        height: 2rem;
        margin: 0 1rem;
        display: flex;
        font-size: 1.6rem;
        color: rgba(220,220,220,0.1);
        cursor: pointer;
    }
</style>
<script>
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()
    export let text = "this should be a helpful tooltip!";
    export let state = true;
</script>
{#if state}
    <div class="chip">
        <div class="close" on:click={()=>{state=false}}>
            x
        </div>
            <p>{text}</p>
        <div class="icon">
            i
        </div>
    </div>
{/if}