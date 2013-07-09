> var fs = require('fs'); 
> texts=fs.createReadStream('index.html',{start:0,end:99,encoding:'utf8'})
{ _readableState: 
   { highWaterMark: 65536,
     buffer: [],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: false,
     ended: false,
     endEmitted: false,
     reading: false,
     calledRead: false,
     sync: true,
     needReadable: false,
     emittedReadable: false,
     readableListening: false,
     objectMode: false,
     defaultEncoding: 'utf8',
     ranOut: false,
     awaitDrain: 0,
     readingMore: false,
     decoder: 
      { encoding: 'utf8',
        surrogateSize: 3,
        charBuffer: <Buffer 88 4e b9 d5 d6 7f>,
        charReceived: 0,
        charLength: 0 },
     encoding: 'utf8' },
  readable: true,
  domain: null,
  _events: { end: [Function] },
  _maxListeners: 10,
  path: 'index.html',
  fd: null,
  flags: 'r',
  mode: 438,
  start: 0,
  end: 99,
  autoClose: true,
  pos: 0 }
> buf=new Buffer(100)
<Buffer 70 49 7d 02 00 00 00 00 70 49 7d 02 00 00 00 00 0a 00 00 00 00 00 00 00 f8 49 7d 02 00 00 00 00 05 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ...>
> buf.write(texts,0,100,'utf8')
TypeError: Argument must be a string
    at Buffer.write (buffer.js:353:25)
    at repl:1:6
    at REPLServer.self.eval (repl.js:112:21)
    at Interface.<anonymous> (repl.js:239:12)
    at Interface.EventEmitter.emit (events.js:95:17)
    at Interface._onLine (readline.js:202:10)
    at Interface._line (readline.js:531:8)
    at Interface._ttyWrite (readline.js:767:16)
    at ReadStream.onkeypress (readline.js:99:10)
    at ReadStream.EventEmitter.emit (events.js:98:17)
> var test= fs.readFileSync('index.html')
> test
<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 66 72 6f 6d 20 69 6e 64 65 78 2e 68 74 6d 6c 0a>
> var test= fs.readFileSync('index.html',{encoding:'utf8'}) 
> test
'Hello World from index.html\n'
> buf =new Buffer(255);
<Buffer c8 4d 7d 02 00 00 00 00 02 00 00 00 01 00 00 00 f8 3c 7e 02 00 00 00 00 00 00 00 00 00 00 00 00 70 04 ad 00 00 00 00 00 ad 00 00 00 ae 00 00 00 70 50 78 ...>
>  var text =fs.readFileSync('index.html',{encoding:'u\
... [5G..>                                                    |tf8'});
Invalid REPL keyword
> var test=fs.readFileSync("index.html",{encoding:'utf8'})
> buf.toString('utf8',test)
'�M}\u0002\u0000\u0000\u0000\u0000\u0002\u0000\u0000\u0000\u0001\u0000\u0000\u0000�<~\u0002\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000p\u0004�\u0000\u0000\u0000\u0000\u0000�\u0000\u0000\u0000�\u0000\u0000\u0000pPx\u0002\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000`K}\u0002\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0001\u0000\u0000\u0000\u0003\u0000\u0000\u0000\u0000\u0000\u0000\u00000Tx\u0002\u0000\u0000\u0000\u0000�|�\u0000\u0000\u0000\u0000\u0000`K�\u0000\u0000\u0000\u0000\u0000�K}\u0002\u0000\u0000\u0000\u0000\b\u0000\u0000\u0000\u0001\u0000\u0000\u0000��`��\u0000\u0000@L}\u0002\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0000\u0000\u0000\u0000`L}\u0002\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000�L}\u0002\u0000\u0000\u0000\u0000\u0010\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000M}\u0002\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0000\u0000\u0000\u0000 M}\u0002\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000'
> buf =new Buffer(fs.readFileSync('index.html',{encod\
... [5G> buf.toString('utf8',test)                            |ing:'utf-8'});
... [5G
... [5G  C-c C-c
> bu
ReferenceError: bu is not defined
    at repl:1:2
    at REPLServer.self.eval (repl.js:112:21)
    at Interface.<anonymous> (repl.js:239:12)
    at Interface.EventEmitter.emit (events.js:95:17)
    at Interface._onLine (readline.js:202:10)
    at Interface._line (readline.js:531:8)
    at Interface._ttyWrite (readline.js:767:16)
    at ReadStream.onkeypress (readline.js:99:10)
    at ReadStream.EventEmitter.emit (events.js:98:17)
    at emitKey (readline.js:1095:12)
> I
ReferenceError: I is not defined
    at repl:1:2
    at REPLServer.self.eval (repl.js:112:21)
    at Interface.<anonymous> (repl.js:239:12)
    at Interface.EventEmitter.emit (events.js:95:17)
    at Interface._onLine (readline.js:202:10)
    at Interface._line (readline.js:531:8)
    at Interface._ttyWrite (readline.js:767:16)
    at ReadStream.onkeypress (readline.js:99:10)
    at ReadStream.EventEmitter.emit (events.js:98:17)
    at emitKey (readline.js:1095:12)
>     buf =new Buffer(fs.readFileSync('index.html',{encoding:'utf-8'}); 
... [5G    at Interface._line (readline.js:531:8)
... [5G    at Interface._ttyWrite (readline.js:767:16)
... [5G    at ReadStream.EventEmitter.emit (events.js:98:17)
... [5G
... [5G
... [5G  C-c C-c
> buf
<Buffer c8 4d 7d 02 00 00 00 00 02 00 00 00 01 00 00 00 f8 3c 7e 02 00 00 00 00 00 00 00 00 00 00 00 00 70 04 ad 00 00 00 00 00 ad 00 00 00 ae 00 00 00 70 50 78 ...>
> buf.toString()
'�M}\u0002\u0000\u0000\u0000\u0000\u0002\u0000\u0000\u0000\u0001\u0000\u0000\u0000�<~\u0002\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000p\u0004�\u0000\u0000\u0000\u0000\u0000�\u0000\u0000\u0000�\u0000\u0000\u0000pPx\u0002\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000`K}\u0002\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0001\u0000\u0000\u0000\u0003\u0000\u0000\u0000\u0000\u0000\u0000\u00000Tx\u0002\u0000\u0000\u0000\u0000�|�\u0000\u0000\u0000\u0000\u0000`K�\u0000\u0000\u0000\u0000\u0000�K}\u0002\u0000\u0000\u0000\u0000\b\u0000\u0000\u0000\u0001\u0000\u0000\u0000��`��\u0000\u0000@L}\u0002\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0000\u0000\u0000\u0000`L}\u0002\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000�L}\u0002\u0000\u0000\u0000\u0000\u0010\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000M}\u0002\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0000\u0000\u0000\u0000 M}\u0002\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000'
> buf =new Buffer(fs.readFileSync('index.html'),{encoding:'utf-8'});     
<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 66 72 6f 6d 20 69 6e 64 65 78 2e 68 74 6d 6c 0a>
> buf.toString()
'Hello World from index.html\n'
> 