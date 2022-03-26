<script>
	import { fly } from 'svelte/transition';
	import '../app.css';
</script>

<svelte:head>
	<meta name="description" content="thoughts, stories and ideas i guess" />
	<!-- twitter card things -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="krido" />
	<meta name="twitter:description" content="thoughts, stories and ideas i guess" />
	<meta name="twitter:site" content="@yuxxeun" />
	<meta name="twitter:creator" content="@yuxxeun" />
	<meta
		name="twitter:image"
		content="https://raw.githubusercontent.com/yuxxeun/zea/main/image/gradient.jpg"
	/>
	<title>krido</title>
</svelte:head>

<div class="container">
	<div class="row col-sm-12 my-5 py-5">
		<div class="col-md-1" />
		<div class="col-md-4 text-center">
			<img
				transition:fly={{ y: 150, duration: 1500 }}
				src="/profile.jpeg"
				alt="Avatar"
				class="img-responsive center-block d-block mx-auto my-4 __avatar"
				style="width: 19rem;"
			/>
		</div>
		<div class="col-md-6">
			<h1 class="mt-4 __headline">Look mom, @yuxxeun on metaverse.</h1>
			<p>I explain with words and code (sometimes).</p>
			<div class="my-4">
				<a href="https://github.com/yuxxeun" target="_blank"
					><i class="__icon lni lni-github lni-32" /></a
				>
				<a rel="me" href="https://twitter.com/yuxxeun" target="_blank"
					><i class="__icon lni lni-twitter lni-32" /></a
				>
				<a href="https://pixelfed.social/krido" target="_blank"
					><i class="__icon lni lni-instagram lni-32" /></a
				>
				<a href="https://sasaw.vercel.app/" target="_blank"
					><i class="__icon lni lni-book lni-32" /></a
				>
				<a href="https://poly.work/yuxxeun" target="_blank"
					><i class="__icon lni lni-sprout lni-32" /></a
				>
			</div>
			<p>
				You can stop reading in here, but if you want more, I'll give you extra details on my <a
					href="https://sotory.now.sh/"
					target="_blank"
					class="__story font-bold">story</a
				>
				- its basically a place where i can be me.
				<br /><br />
				<i>Thank you for coming and drink your water now!</i>
			</p>
		</div>
	</div>
</div>
