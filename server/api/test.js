export default defineEventHandler(async (event) => {
  // console.log(event);

  const testJson = 'https://jsonplaceholder.typicode.com'
  const params = getQuery(event)
  console.log('params', params)
  const response = await fetch(`${testJson}/comments/${params.comment}`, {
    headers: {},
  })
  const data = await response.json()
  return { data }
})
