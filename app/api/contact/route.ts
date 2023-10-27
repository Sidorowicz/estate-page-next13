export async function GET( request: Request) {
     return new Response('hello')
  }

  export async function POST( req: Request) {
   const body = await req.json()
   console.log(body)
   // const res = fetch('http://localhost:8000/tickets', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: body } )
   const res = fetch('http://localhost:8000/tickets', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) } )

 
   return res
}