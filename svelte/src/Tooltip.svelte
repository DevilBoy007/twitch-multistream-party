<style>
    div
    {  
        z-index: 1;
        font: 'Gill Sans';
        margin: 1vw;
    }
    p 
    {
        font-size: .9rem;
        margin-right:-1rem;
        color: var(--text-color, #cd96cd)
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
    export let text_color
    export let state = true;
    export let text = "this should be a helpful tooltip!";
    let color = text_color
</script>
{#if state}
    <div class="chip">
        <div class="close" on:click={()=>{state=false}}>
            x
        </div>
            <p style="--text-color:{color}">{text}</p>
        <div class="icon">
            i
        </div>
    </div>
{/if}