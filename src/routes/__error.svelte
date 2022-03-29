<script context="module">
	import { fade } from 'svelte/transition';

	export function load() {
		return {
			props: {
				title: `451 — Tersesat Di Jalan yang Benar`
			}
		};
	}
</script>

<script>
	export let title;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="my-20 w-5/6 sm:w-2/3 mx-auto" transition:fade>
	<h1 class="text-5xl __inter text-orange-500 font-extrabold">
		{title}
	</h1>
	<p class="text-lg my-10 text-left __mono">
		kenapa harus menampilkan halaman 404 secara umum jika gue bisa membuatnya terlihat sedikit
		misterius? lo terlihat seperti sedang mencoba meng-akses halaman yang seharusnya belum (atau
		mungkin tidak) ada, atau kemungkinan lainnya yaitu seseorang memberikan url yang salah? bisa lo
		periksa sekali lagi.
	</p>
	<a
		href="/"
		class="rounded-lg text-left px-10 __mono py-2 text-orange-500 hover:text-white border-2 border-gray-500"
	>
		jalan kebenaran &rarr;
	</a>
</div>
