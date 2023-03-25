<script lang="ts">
	let sudokuGrid = Array(9)
		.fill(0)
		.map(() => Array(9).fill(null));
	let selectedNumber = 1;

	let row = 0,
		col = 0;

	function selectNumber(number: number) {
		selectedNumber = number;

		sudokuGrid[row][col] = selectedNumber;
	}

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

	function setColumn(selectedRow: number, selectedCol: number) {
		row = selectedRow;
		col = selectedCol;
	}
</script>

<div class="container mx-auto py-10 px-5 font-mono">
	<div class="text-center">
		<h1 class="text-4xl mb-5">Sudoku App</h1>
	</div>

	<div class="flex justify-center">
		<div class="grid grid-cols-9">
			{#each sudokuGrid as row, i}
				{#each row as _, j}
					<input
						type="text"
						inputmode="numeric"
						pattern="[1-9]"
						maxlength="1"
						bind:value={sudokuGrid[i][j]}
						on:input={(e) => setInput(i, j, e)}
						on:click={(_) => setColumn(i, j)}
						class="w-8 h-8 md:w-12 md:h-12 text-center border border-gray-300"
					/>
				{/each}
			{/each}
		</div>
	</div>
</div>
