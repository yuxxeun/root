<script>
	import Desc from '../components/desc.svelte';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<svelte:head>
	<MetaTags
		title="yuxxeun"
		titleTemplate="%s | edgy network"
		description="making cool shit cybernetically."
		canonical="https://www.yuxxeun.now.sh/"
		openGraph={{
			url: 'https://yuxxeun.now.sh',
			title: 'yuxxeun',
			description: 'making cool shit cybernetically.',
			images: [
				{
					url: 'https://raw.githubusercontent.com/yuxxeun/yuxxeun/master/header.png',
					width: 800,
					height: 600,
					alt: 'Og Image Alt'
				},
				{
					url: 'https://raw.githubusercontent.com/yuxxeun/yuxxeun/master/header.png',
					width: 900,
					height: 800,
					alt: 'Og Image Alt Second'
				}
			],
			site_name: 'yuxxeun'
		}}
		twitter={{
			handle: '@yuxxeun',
			site: 'https://yuxxeun.now.sh',
			cardType: 'summary_large_image',
			title: 'yuxxeun',
			description: 'making cool shit cybernetically.',
			image: 'https://raw.githubusercontent.com/yuxxeun/yuxxeun/master/header.png',
			imageAlt: 'yuxxeun coolest image'
		}}
	/>
	<link href="https://cdn.lineicons.com/3.0/lineicons.css" rel="stylesheet" />
	<title>yuxxeun</title>
</svelte:head>

<div class="container">
	<Desc />
</div>
