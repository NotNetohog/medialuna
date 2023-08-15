<script>
	import { formatDate } from '$lib/utils'
	export let data
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>publicado en {formatDate(data.meta.date)}</p>
	</hgroup>

	<div class="tags">
		{#each data.meta.categories as category}
			<span>&num;{category} </span>
		{/each}
	</div>

	<div class="prose">
		<svelte:component this={data.content} />
	</div>
	<div class="cafecito">
		<a href="https://cafecito.app/netohog" rel="noopener" target="_blank"
			><img
				srcset="https://cdn.cafecito.app/imgs/buttons/button_6.png 1x, https://cdn.cafecito.app/imgs/buttons/button_6_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_6_3.75x.png 3.75x"
				src="https://cdn.cafecito.app/imgs/buttons/button_6.png"
				alt="Invitame un café en cafecito.app"
			/></a
		>
	</div>
</article>

<style>
	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;
		inline-size: fit-content;
	}

	hgroup {
		& h1 {
			font-size: var(--font-size-fluid-3);
		}
		& p {
			color: var(--text-2);
		}
	}

	.tags {
		display: flex;
		gap: var(--size-2);
		margin-block-start: var(--size-3);

		& * {
			padding: var(--size-2) var(--size-2);
			border-radius: var(--radius-2);
			background-color: var(--brand);
			color: var(--text-1);
		}
	}

	.cafecito {
		margin-block-start: var(--size-5);
		inline-size: var(--size-12);
	}
</style>
