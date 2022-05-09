<script>
	import '../app.css';
	import Navbar from '$lib/comp/Navbar.svelte';
</script>

<Navbar />

<div class="h-screen bg-slate-800">
	<slot />
</div>
