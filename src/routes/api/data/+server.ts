/** @type {import('./$types').RequestHandler} */

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