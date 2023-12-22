export async function POST(request) {
  const url = 'https://api.brevo.com/v3/contacts'
  const apiKey = process.env.YOUR_SENDINBLUE_API_KEY

  const data = await request.json()

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    console.log(await response.json())

    if (response.ok) {
      return Response.json({ message: 'Subscribed' })
    } else {
      throw new Error('Failed to subscribe: ' + response.status + ' ' + response.statusText)
    }
  } catch (error) {
    console.error('Error:', error)
    return new Response("Internal Server Error", { status: 500 })
  }
}
