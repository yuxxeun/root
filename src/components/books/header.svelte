<script>
	import { fade } from 'svelte/transition';
</script>

<section>
	<nav
		class="flex items-center z-10 backdrop-blur-sm rounded-md sticky top-5 my-10 justify-between flex-wrap bg-fuchsia-500/80 p-5"
	>
		<div class="flex items-center flex-shrink-0 text-white mr-6" transition:fade>
			<h1 class="font-extrabold __mono text-3xl tracking-tight">edgy library®</h1>
		</div>
		<div>
			<div>
				<i class="lni lni-ticket-alt mr-2 text-4xl font-extrabold lni-32 text-white" />
			</div>
		</div>
	</nav>

	<div class="text-lg text-white rounded-lg px-10 mb-10">
		<p class="text-left">
			Jadi pada dasarnya gue tipe orang yang suka membaca (dan bercanda), dan halaman ini (yang
			seharusnya) menampilkan apa saja buku yang akan, sedang dan mungkin pernah gue baca.
			<br />
			Alasan gue membuat halaman ini karena akun goodreads gue udah dihapus.
			<br />
			<br />
			<i>Lets make reading less boring...</i>
		</p>
	</div>
</section>
