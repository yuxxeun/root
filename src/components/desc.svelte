<script>
	import { fly } from 'svelte/transition';
</script>

<svelte:head>
	<meta name="description" content="thoughts, stories and ideas i guess" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="krido" />
	<meta name="twitter:description" content="thoughts, stories and ideas i guess" />
	<meta name="twitter:site" content="@yuxxeun" />
	<meta name="twitter:creator" content="@yuxxeun" />
	<meta
		name="twitter:image"
		content="https://raw.githubusercontent.com/yuxxeun/zea/main/image/gradient.jpg"
	/>
	<link href="https://cdn.lineicons.com/3.0/lineicons.css" rel="stylesheet" />
	<title>Krido</title>
</svelte:head>

<div class="row col-sm-12 my-5 py-5">
	<div class="col-md-1" />
	<div class="col-md-4 text-center">
		<img
			transition:fly={{ y: 150, duration: 1000 }}
			src="/profile.jpeg"
			alt="look, krido is so cute, right?"
			class="img-responsive center-block d-block mx-auto my-4 __avatar"
			style="width: 19rem;"
		/>
	</div>
	<div class="col-md-6">
		<h1 class="mt-4 font-extrabold text-5xl __inter">Look mom, @yuxxeun on metaverse.</h1>
		<p class="__mono italic my-3">thoughts, stories and ideas i guess.</p>
		<div class="my-4 space-x-5 text-fuchsia-500">
			<a title="@yuxxeun" href="https://github.com/yuxxeun" target="_blank"
				><i class="hover:text-white lni lni-github lni-32" /></a
			>
			<a title="pixelfed.social/krido" href="https://pixelfed.social/krido" target="_blank"
				><i class="hover:text-white lni lni-gallery lni-32" /></a
			>
			<a title="yuxxeun edgy library" href="/books" target="_blank"
				><i class="hover:text-white lni lni-ticket-alt lni-32" /></a
			>
			<a title="journey" href="https://poly.work/yuxxeun" target="_blank"
				><i class="hover:text-white lni lni-travel lni-32" /></a
			>
			<a title="Labs" href="https://github.com/evangeliztco" target="_blank"
				><i class="hover:text-white lni lni-microscope lni-32" /></a
			>
		</div>
		<p class="__mono">
			you can stop reading in here, but if you want more, I'll give you extra details on my
			<a
				href="https://oxs.now.sh/"
				target="_blank"
				class="text-fuchsia-500 hover:text-white font-bold">story</a
			>
			— its basically a place where I can be Me.
			<br /><br />
			<span class="italic">Thank you for coming to my space!</span>
		</p>
	</div>
</div>
