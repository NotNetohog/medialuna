<script>
	import * as config from '$lib/config'
	import { formatDate } from '$lib/utils'
	export let data
</script>

<svelte:head>
	<title>medialuna</title>
</svelte:head>

<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href={post.slug} tabIndex="0" class="title">{post.title}</a>
				<p class="date">{formatDate(post.date, 'medium')}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	.posts {
		display: grid;
		gap: var(--size-7);
	}

	.post {
		max-inline-size: var(--size-content-3);

		&:not(:last-child) {
			border-block-end: 1px solid var(--border);
			padding-block-end: var(--size-7);
		}
	}

	.title {
		font-size: var(--font-size-fluid-2);
		text-decoration-thickness: from-font;
		text-underline-offset: 3px;
	}

	.date {
		color: var(--text-2);
		font-size: var(--font-size-0);
	}

	.description {
		margin-block-start: var(--size-2);
		font-size: var(--font-size-1);
	}
</style>
