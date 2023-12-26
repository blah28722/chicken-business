<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h2 class="h2">Sandbox</h2>

		<button hx-get="/api/data" hx-swap="#data-container">Get Data</button>
		<div id="data-container"></div>

		<a href="/api/data">Endpoint</a>
	</div>
</div>

