<script>
	import * as config from '$lib/config'
	import { Rss } from 'lucide-svelte'
</script>

<footer>
	<p>🥐 &copy {new Date().getFullYear()}</p>
	<ul class="links">
		<li>
			<a href="/about" tabIndex="0">sobre mi</a>
		</li>
		<li>
			<a href="/contact" tabIndex="0">contacto</a>
		</li>
		<li class="rss">
			<a href="/rss.xml" tabIndex="0" target="_blank"><Rss size="12" /></a>
		</li>
	</ul>
</footer>

<style>
	footer {
		padding-block: var(--size-7);
		@media (width >= 768px) {
			padding-block: var(--size-7);
		}
	}

	p,
	a {
		color: var(--text-2);
		font-size: var(--font-size-0);
	}

	.links {
		display: flex;
		gap: var(--size-4);
	}
	.rss {
		display: flex;
		align-items: center;
	}
</style>
