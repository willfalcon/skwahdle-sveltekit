<script>
	import Board from '../Components/Board/Board.svelte';
	import Keyboard from '../Components/Keyboard/Keyboard.svelte';
</script>

	<Board />
	<Keyboard />

<style>
	:global(main) {
		width: 600px;
		margin-left: auto;
		margin-right: auto;
		max-width: 100%;
		height: 100vh;
		display: grid;
		grid-template-rows: auto 1fr auto;
		align-items: center;

		position: relative;
	}

	:global(:root) {
		--dark: #000F08;
		--yellow: #FFC857;
		--green: #00916E;
		--light: #E1DEE3;
		--blue: #B4CDED;
		--maroon: #5D1725;
		--background: white;
    --white: white;
		--bs: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
	}

	:global(html) {
    box-sizing: border-box;
    font-size: 10px;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    scroll-behavior: smooth;

  }

	:global(*, *:before, *:after) {
    box-sizing: inherit;
  }
  :global(body) {
    font-family: sans-serif;
    font-size: 1.6rem;
    /* color: ${({ theme }) => theme.dark};
    background: ${({ theme }) => theme.background}; */
		color: var(--dark);
		background: var(--background);
  }

  :global(button) {
    /* color: ${({ theme }) => theme.dark}; */
		color: var(--dark);
  }

  :global(img) {
    max-width: 100%;
    height: auto;
  }

	:global(.underline) {
		text-decoration: underline;
	}

	
</style>