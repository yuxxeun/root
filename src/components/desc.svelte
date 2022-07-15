<script>
	import { fly } from 'svelte/transition';
</script>

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
		<h1 class="mt-4 font-extrabold text-5xl __inter">Look mom, @yuxxeun on edgy network.</h1>
		<p class="__mono italic my-3">thoughts, stories and very ideas.</p>
		<div class="my-4 space-x-5 text-orange">
			<a title="@yuxxeun" href="https://github.com/yuxxeun" target="_blank"
				><i class="hover:text-white lni lni-github lni-32" /></a
			>
			<a title="yuxxeun edgy library" href="https://sasaw.now.sh" target="_blank"
				><i class="hover:text-white lni lni-ticket-alt lni-32" /></a
			>
			<a title="journey" href="https://poly.work/yuxxeun" target="_blank"
				><i class="hover:text-white lni lni-travel lni-32" /></a
			>
			<a title="Labs" href="https://github.com/yuxxeun/secreto" target="_blank"
				><i class="hover:text-white lni lni-microscope lni-32" /></a
			>
		</div>
		<p class="__mono italic">
			you can stop reading in here, but if you want more, I'll give you extra details on my
			<a href="https://edgy.now.sh/" target="_blank" class="text-orange font-bold"
				>edgy digital garden</a
			>
			— its basically a place where I can be Me.
			<br /><br />
			Send random message to me on
			<a
				href="https://secreto.now.sh/"
				target="_blank"
				class="text-orange font-bold">secreto</a
			>!
			<br /><br />
			<span class="italic">Thank you for coming to my space!</span>
		</p>
	</div>
</div>
