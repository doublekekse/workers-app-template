export default {
	async fetch(request) {
		const url = new URL(request.url);

		if (url.pathname.endsWith('/api/')) {
			return Response.json({ message: 'Hello, World' });
		}

		return new Response(null, { status: 404 });
	}
} satisfies ExportedHandler<Env>;
