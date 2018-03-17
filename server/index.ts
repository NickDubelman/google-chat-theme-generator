import * as stream from 'stream'
import * as express from 'express'
const app = express()

app.get('/', ( req, res ) => {
    var fileContents = Buffer.from('example css file')

    var readStream = new stream.PassThrough()
    readStream.end(fileContents)
  
    res.set('Content-Disposition', 'attachment; filename=theme.css')
    res.set('Content-Type', 'text/plain')
  
    readStream.pipe(res)
})

const port = 8080
app.listen( port, () => console.log(`Server running on port ${port}...`) )
