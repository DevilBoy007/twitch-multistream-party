<svelte:head>
<script src="https://cdn.jsdelivr.net/npm/tsparticles@1.42.4/tsparticles.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/tsparticles-preset-confetti@1.42.4/tsparticles.preset.confetti.min.js"></script>
</svelte:head>
<style>
.switch-toggle {
    height: 40px;
}

.switch-toggle input[type="checkbox"] {
    position: absolute;
    left: 100%;
    opacity: 0;
    z-index: -2;
}

.switch-toggle input[type="checkbox"] + label {
    position: relative;
    display: inline-block;
    width: 100px;
    height: 40px;
    border-radius: 20px;
    margin: 0;
    cursor: pointer;
    box-shadow: inset -8px -8px 15px rgba(0,0,0,.6),
                inset 10px 10px 10px rgba(255,255,255, .25);
}

.switch-toggle input[type="checkbox"] + label::before {
    position: absolute;
    content: 'OFF';
    font-size: 13px;
    text-align: center;
    line-height: 25px;
    top: 8px;
    left: 8px;
    width: 45px;
    height: 25px;
    border-radius: 20px;
    background-color: #d1dad3;
    box-shadow: -3px -3px 5px rgba(0,0,0,.5),
                3px 3px 5px rgba(255,255,255, .25);
    transition: .3s ease-in-out;
}

.switch-toggle input[type="checkbox"]:checked + label::before {
    left: 50%;
    content: 'ON';
    color: orange;
    background-color: #00b33c;
    box-shadow: -3px -3px 5px rgba(0,0,0,.5),
                1px 3px 5px #00b33c;
}
</style>
<script>
  export let party
  function theparty()
  {
    confetti("tsparticles", {
    angle: 330,
    count: 99,
    position: { x: 10, y: 10 },
    spread: 120,
    startVelocity: 60,
    decay: 1.1,
    gravity: 1,
    drift: 0,
    ticks: 300,
    colors: ["#66ff33", "#ffa500","#da70d6"],
    shapes: ["square", "circle"],
    scalar: 1,
    zIndex: 100,
    disableForReducedMotion: true
  });
  }
</script>
<div class='switch-toggle'>
  <input id='party' type='checkbox' bind:checked={party} on:click={party?'':theparty()}>
  <label for='party'></label>
</div>
<div id='tsparticles'></div>
