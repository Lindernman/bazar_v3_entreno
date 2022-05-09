<script context="module">
	export async function load({ params, fetch, session, stuff }) {
		const response = await fetch('/api/test');
		const data = await response.json();

		return {
			props: {
				products: data.rows
			}
		};
	}
</script>

<script>
	export let products;
	console.log(products);
</script>

<div class="space-y-2 p-4 flex flex-col">
	{#each products as product}
		<div class="flex  items-center justify-start space-x-4">
			<button class="btn btn-accent">
				{product.name}
			</button>
			<div class="text-red-500">
				- {product.description}
			</div>
		</div>
	{/each}
</div>
