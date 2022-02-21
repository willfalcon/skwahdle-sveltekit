<script>
  import LetterBox from './LetterBox.svelte';
  export let row;
</script>

<div class="row">
  <LetterBox row={row} box={0} />
  <LetterBox row={row} box={1} />
  <LetterBox row={row} box={2} />
  <LetterBox row={row} box={3} />
  <LetterBox row={row} box={4} />
</div>

<style>
  .row {
    display: flex;
    justify-content: center;
    gap: 0.8rem;
    margin-bottom: 0.8rem;
    animation: wiggle;
  }

  @keyframes wiggle {
    0% {
    transform: translateX(0px);
    }
    15% {
      transform: translateX(8px);
    }
    36% {
      transform: translateX(-6px);
    }
    64% {
      transform: translateX(6px);
    }
    86% {
      transform: translateX(-5px);
    }
    100% {
      transform: translateX(0px);
    }
  }
</style>