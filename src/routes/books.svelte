<script>
	import Header from '../components/books/header.svelte';
	import { fly } from 'svelte/transition';

	async function getBooks() {
		let response = await fetch(
			'https://raw.githubusercontent.com/yuxxeun/zea/main/server/library.json'
		);
		let books = await response.json();
		return books;
	}
	const promise = getBooks();
</script>

<svelte:head>
	<meta name="description" content="yuxxeun edgy library" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="krido" />
	<meta name="twitter:description" content="yuxxeun edgy library" />
	<meta name="twitter:site" content="@yuxxeun" />
	<meta name="twitter:creator" content="@yuxxeun" />
	<meta
		name="twitter:image"
		content="https://raw.githubusercontent.com/yuxxeun/zea/main/image/gradient.jpg"
	/>
	<link href="https://cdn.lineicons.com/3.0/lineicons.css" rel="stylesheet" />
	<title>books</title>
</svelte:head>

<section class="mx-auto my-10 px-5 text-center items-center justify-center sm:w-2/3 w-5/6">
	<Header />
	<div class="text-center justify-center items-center mx-auto ">
		{#await promise}
			<div class="my-3">
				<img
					src="/loading.svg"
					class="animate-spin-slow mx-auto my-10"
					alt="loading...."
					width="200"
				/>
			</div>
		{:then book}
			{#each book as book}
				<ul
					class="my-4 py-4 backdrop-blur-md bg-white rounded-lg"
					transition:fly={{ y: 150, duration: 1500 }}
				>
					<li class="text-1xl text-black space-x-2 __mono px-5">
						<span class="font-extrabold text-fuchsia-500">{book.nama}</span>
						— {book.penulis}
						<span class="text-center font-semibold bg-fuchsia-500 text-white px-2 rounded-md"
							>{book.status}</span
						>
						<span class="text-fuchsia-500 bg-white font-bold px-2 rounded-md">{book.tahun}</span>
					</li>
				</ul>
			{/each}
		{:catch error}
			<div class="my-10">
				<img
					src="/loading.svg"
					class="animate-spin-slow mx-auto my-10"
					alt="loading..."
					width="200"
				/>
				<p class="text-gray-500 __mono text-lg">
					look like there's something wrong with you. <br /> emmm wait... its not with you, its my server
					i guess.
				</p>
			</div>
		{/await}
	</div>
</section>
