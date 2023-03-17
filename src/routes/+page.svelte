<div class="container mx-auto">
	<h1>Sudokku</h1>
	<div class="h-10" />

	{#each Array(9) as _}
		{#each Array(9) as _}
			<input type="number" class="w-10 h-10 border-2 border-black" />
		{/each}
        <br>
	{/each}
</div>
