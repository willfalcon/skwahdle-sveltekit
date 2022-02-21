<script>
  import KeyboardBackspace from "svelte-material-icons/KeyboardBackspace.svelte";

  import { letters, workingRow, workingBox } from '../stores';
  
  const handleBackspace = () => {
    if ($workingBox !== 0) {
      letters.update(arr => { 
        arr[$workingRow][$workingBox - 1] = '';
        return arr;
      });
      workingBox.update(i => i - 1);
    }
      
  }
</script>

<button class="key" on:click={handleBackspace}>
  <KeyboardBackspace />
</button>