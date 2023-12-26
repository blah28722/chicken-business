/** @type {import('./$types').RequestHandler} */

export async function OPTIONS() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': 'https://blah28722.github.io',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}

export function GET({ request }) {
    console.log(request);
    const options: ResponseInit = {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': 'https://blah28722.github.io',
      }
    }
    return new Response('Hello World!', options) 
}