<script>
  export let letter;

  import { letters, workingRow, workingBox } from '../stores';

  const handleKeyPress = () => {
    if ($workingBox !== 5) {
      letters.update(arr => {
        arr[$workingRow][$workingBox] = letter;
        return arr;
      });
      workingBox.update(i => i === 5 ? 5 : i + 1);
    }
  }

</script>

<button class="key" on:click={handleKeyPress} value={letter}>
  {letter}
</button>

<style>

</style>