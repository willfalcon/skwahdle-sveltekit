<script>
  import { derived } from 'svelte/store';
  import { letters } from '../stores';

  let example = null;

  export let box;
  export let row;

  // $:letter = $letters[row][box];
  const letter = derived(letters, $letters => $letters[row][box]);
  // console.log($letter);
</script>

<div class="box-wrapper">
  <div class="box">
    <div class="front">{example || $letter}</div>
    <div class="back">{example || $letter}</div>
  </div>
</div>

<style>
  .box-wrapper {
    perspective: 1000px;
    width: 16vw;
    height: 16vw;
    /* border: 2px solid ${({ theme }) => theme.light}; */
    border: 2px solid var(--light);
    display: block;

  }
  .box {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 3.2rem;

    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .front {
    /* background: ${({ theme }) => theme.background}; */
    background: var(--background);
  }
  .back {
    border: 2px solid;
    /* border-color: ${({ status, theme }) =>
      status === 'correct' ? theme.green : status === 'kinda' ? theme.yellow : status === 'wrong' ? theme.wrong : theme.light}; */
    border-color: var(--light);
    /* color: ${({ status, theme }) => (status ? theme.white : theme.dark)}; */
    color: var(--white);
    /* background-color: ${({ status, theme }) =>
      status === 'correct' ? theme.green : status === 'kinda' ? theme.yellow : status === 'wrong' ? theme.wrong : 'transparent'}; */
    background-color: transparent;
    transform: rotateX(180deg);
  }
  @media (min-width: 375px) {
    .box-wrapper {
      width: 14vw;
      height: 14vw;
    }
  }
  @media (min-width: 768px) {
    .box-wrapper {
      width: 62px;
      height: 62px;
    }
  }
</style>