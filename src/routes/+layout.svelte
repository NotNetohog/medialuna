<script>
	import Header from './header.svelte'
	import Footer from './footer.svelte'

	import 'open-props/style'
	import 'open-props/normalize'
	import 'open-props/buttons'

	import '../app.css'
	import PageTransition from './transition.svelte'

	export let data
</script>

<div class="layout">
	<Header />
	<main>
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>
	<Footer />
</div>

<style>
	.layout {
		height: 100dvh;
		max-inline-size: 1200px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-3);

		@media (width >= 768px) {
			padding-inline: var(--size-7);
			inline-size: -webkit-fill-available;
		}
	}

	main {
		@media (width >= 768px) {
			padding-block: var(--size-6);
		}
	}
</style>
