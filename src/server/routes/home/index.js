export async function getHomePage(req, res, next) {

  console.log('home route')
  res.send('Hello World!');
}
