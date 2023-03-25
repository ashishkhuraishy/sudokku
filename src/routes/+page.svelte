<script lang="ts">
	let sudokuGrid = Array(9)
		.fill(0)
		.map(() => Array(9).fill(null));

	function setInput(row: number, col: number, event: any) {
		try {
			let val = parseInt(event?.target?.value ?? 0);

			if (val == 0 || isNaN(val)) {
				sudokuGrid[row][col] = null;
				return;
			}

			sudokuGrid[row][col] = val;
		} catch (error) {
			sudokuGrid[row][col] = null;
		}
	}
</script>

<div class="container mx-auto py-10 px-5 font-mono">
	<div class="text-center">
		<h1 class="text-4xl mb-5">Sudoku App</h1>
	</div>

	<div class="flex justify-center">
		<div class="grid grid-cols-9 border-gray-400 border-2">
			{#each sudokuGrid as row, i}
				{#each row as _, j}
					<input
						type="text"
						inputmode="numeric"
						pattern="[1-9]"
						maxlength="1"
						bind:value={sudokuGrid[i][j]}
						on:input={(e) => setInput(i, j, e)}
						class="w-8 h-8 md:w-12 md:h-12 text-center border border-gray-300 
            {j % 3 == 0 ? 'border-l-2 border-l-gray-400' : ''}
            {i % 3 == 0 ? 'border-t-2 border-t-gray-400' : ''}"
					/>
				{/each}
			{/each}
		</div>
	</div>

	<!-- <button on:click={}></button> -->
</div>
