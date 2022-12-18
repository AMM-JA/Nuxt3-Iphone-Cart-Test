export default defineEventHandler(async (event) => {
    const user = false;

    if(event.req.url.indexOf('/api') > -1 && !user){
        throw new Error('Not authenticated')
    }

    console.log('new request',event.req.url)
  })
  