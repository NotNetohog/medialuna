<script>
	import * as config from '$lib/config'
</script>

<nav>
	<a href="/" tabIndex="0" class="title">
		<b>{config.title}</b>
		<div class="description">
			{config.description}
		</div>
	</a>
</nav>

<style>
	nav {
		padding-block-start: var(--size-7);
		padding-block-end: var(--size-3);
		color: var(--text-1);

		@media (width >= 768px) {
			display: flex;
			justify-content: space-between;
			padding-block: var(--size-7);
		}
	}

	.description {
		inline-size: 21ch;
		font-size: var(--font-size-0);
		font-weight: var(--font-weight-3);
		color: var(--text-2);
	}

	a {
		color: inherit;
		text-decoration: none;
	}
</style>
