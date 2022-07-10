<script>
	import Desc from '../components/desc.svelte';
	import { MetaTags } from 'svelte-meta-tags'
</script>

<svelte:head>
	<MetaTags
		title="yuxxeun"
		description="thoughts, stories and very ideas"
		canonical="https://www.yuxxeun.vercel.app/"
		openGraph={{
			url: 'https://www.yuxxeun.vercel.app',
			title: 'yuxxeun',
			description: 'thoughts, stories and very ideas',
			images: [
				{
					url: 'https://raw.githubusercontent.com/yuxxeun/yuxxeun/main/header.png',
					width: 800,
					height: 600,
					alt: 'Og Image Alt'
				},
				{
					url: 'https://raw.githubusercontent.com/yuxxeun/yuxxeun/main/header.png',
					width: 900,
					height: 800,
					alt: 'Og Image Alt Second'
				},
				{ url: 'https://raw.githubusercontent.com/yuxxeun/yuxxeun/main/header.png' },
				{ url: 'https://raw.githubusercontent.com/yuxxeun/yuxxeun/main/header.png' }
			],
			site_name: 'yuxxeun'
		}}
		twitter={{
			handle: '@yuxxeun',
			site: 'https://yuxxeun.vercel.app',
			cardType: 'summary_large_image',
			title: 'yuxxeun',
			description: 'thoughts, stories and very ideas',
			image: 'https://raw.githubusercontent.com/yuxxeun/yuxxeun/main/header.png',
			imageAlt: 'very cool image alt'
		}}
		facebook={{
			appId: '666'
		}}
	/>
	<link href="https://cdn.lineicons.com/3.0/lineicons.css" rel="stylesheet" />
	<title>yuxxeun</title>
</svelte:head>

<div class="container">
	<Desc />
</div>
