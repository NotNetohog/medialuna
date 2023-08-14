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
</article>

<style>
	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;
		inline-size: fit-content;
	}

	hgroup {
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
</style>
