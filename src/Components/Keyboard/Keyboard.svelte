<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  import Key from './Key.svelte';
  import Enter from './Enter.svelte';
  import Backspace from './Backspace.svelte';
  
  import { letters, workingRow, workingBox } from '../stores';
  import lettersList from '../lettersList';

  const specialKey = writable(false);
  const disabled = false;

  function specialKeyUpHandler(e) {
    if (!disabled) {
      if (e.key === 'Meta' || e.key === 'Alt' || e.key === 'Control') {
        specialKey.set(false);
        window.removeEventListener('keyup', specialKeyUpHandler);
      }
    }
  };

  function keypressHandler(e) {
    
    if (!disabled) {
      if (e.key === 'Meta' || e.key === 'Alt' || e.key === 'Control') {

        specialKey.set(true);
        window.addEventListener('keyup', specialKeyUpHandler);

      } else if (e.key === 'Backspace') {

        if ($workingBox !== 0) {
          letters.update(arr => { 
            arr[$workingRow][$workingBox - 1] = '';
            return arr;
          });
          workingBox.update(i => i - 1);
      }
        
      } else if ($specialKey) {

        return;

      } else if (lettersList.includes(e.key)) {

        if ($workingBox !== 5) {
          letters.update(arr => {
            arr[$workingRow][$workingBox] = e.key;
            return arr;
          });
          workingBox.update(i => i === 5 ? 5 : i + 1);
        }

      } else if (e.key === 'Enter') {

        console.log('enter');

      }
    }
  }

  onMount(() => {
    window.addEventListener('keydown', keypressHandler);
  });
</script>

<div class="keyboard">
  <div class="key-row">
    <Key letter='q' />
    <Key letter='w' />
    <Key letter='e' />
    <Key letter='r' />
    <Key letter='t' />
    <Key letter='y' />
    <Key letter='u' />
    <Key letter='i' />
    <Key letter='o' />
    <Key letter='p' />
  </div>
  <div class="key-row">
    <Key letter='a' />
    <Key letter='s' />
    <Key letter='d' />
    <Key letter='f' />
    <Key letter='g' />
    <Key letter='h' />
    <Key letter='j' />
    <Key letter='k' />
    <Key letter='l' />
  </div>
  <div class="key-row">
    <Enter />
    <Key letter='z' />
    <Key letter='x' />
    <Key letter='c' />
    <Key letter='v' />
    <Key letter='b' />
    <Key letter='n' />
    <Key letter='m' />
    <Backspace />
  </div>
</div>

<style>
  .keyboard {
    padding-top: 8px;
  }
  .key-row {
    margin-bottom: 8px;
    display: flex;
    justify-content: center;
  }
  :global(.key) {
    width: 10%;
    width: calc(10% - 6px);
    height: 53px;
    font-weight: bold;
    margin-right: 6px;
    border-radius: 4px;
    /* background: ${({ theme }) => theme.light}; */
    background: var(--light);
    /* opacity: ${({ disabled }) => (disabled ? 0.75 : 1)}; */
    color: var(--dark);
    border-width: 0;
    text-transform: uppercase;
    font-size: 1.1rem;
    width: 22px;
    padding: 0.5rem;
    cursor: pointer;
  }
  :global(.key:last-child) {
    margin-right: 0;
  }

  @media (min-width: 360px) {
    :global(.key) {
      padding: 1rem;
      font-size: 1.4rem;
      width: 35px;
    }
    @media (min-width: 768px) {
      :global(.key) {
        padding: 2rem;
        font-size: 1.8rem;
        height: 58px;
        width: calc(10% - 6px);
      }
    }
  }
</style>