{"changed":true,"filter":false,"title":"index.js","tooltip":"/index.js","value":"var express = require('express');\nvar app = express();\n\napp.set('port', (process.env.PORT || 5000));\napp.use(express.static(__dirname + '/public'));\n\napp.get('/', function(request, response) {\n  response.send('Hello World!cloud9ahdfoa');\n});\n\napp.listen(app.get('port'), function() {\n  console.log(\"Node app is running at localhost:\" + app.get('port'));\n});\n","undoManager":{"mark":29,"position":44,"stack":[[{"group":"doc","deltas":[{"start":{"row":7,"column":36},"end":{"row":7,"column":37},"action":"remove","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":35},"end":{"row":7,"column":36},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":34},"end":{"row":7,"column":35},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":33},"end":{"row":7,"column":34},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":32},"end":{"row":7,"column":33},"action":"remove","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":31},"end":{"row":7,"column":32},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":30},"end":{"row":7,"column":31},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":29},"end":{"row":7,"column":30},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":29},"end":{"row":7,"column":30},"action":"insert","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":30},"end":{"row":7,"column":31},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":31},"end":{"row":7,"column":32},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":32},"end":{"row":7,"column":33},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":33},"end":{"row":7,"column":34},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":34},"end":{"row":7,"column":35},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":35},"end":{"row":7,"column":36},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":36},"end":{"row":7,"column":37},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":37},"end":{"row":7,"column":38},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":32},"end":{"row":7,"column":33},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":32},"end":{"row":7,"column":33},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":38},"end":{"row":7,"column":39},"action":"insert","lines":["!"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":39},"end":{"row":7,"column":40},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":40},"end":{"row":7,"column":41},"action":"insert","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":41},"end":{"row":7,"column":42},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":41},"end":{"row":7,"column":42},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":40},"end":{"row":7,"column":41},"action":"remove","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":40},"end":{"row":7,"column":41},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":41},"end":{"row":7,"column":42},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":42},"end":{"row":7,"column":43},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":43},"end":{"row":7,"column":44},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":44},"end":{"row":7,"column":45},"action":"insert","lines":["9"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":38},"end":{"row":7,"column":39},"action":"remove","lines":["!"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":37},"end":{"row":7,"column":38},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":36},"end":{"row":7,"column":37},"action":"remove","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":35},"end":{"row":7,"column":36},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":34},"end":{"row":7,"column":35},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":33},"end":{"row":7,"column":34},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":32},"end":{"row":7,"column":33},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":31},"end":{"row":7,"column":32},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":30},"end":{"row":7,"column":31},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":29},"end":{"row":7,"column":30},"action":"remove","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":35},"end":{"row":7,"column":36},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":36},"end":{"row":7,"column":37},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":37},"end":{"row":7,"column":38},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":38},"end":{"row":7,"column":39},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":39},"end":{"row":7,"column":40},"action":"insert","lines":["o"]},{"start":{"row":7,"column":40},"end":{"row":7,"column":41},"action":"insert","lines":["a"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":7,"column":41},"end":{"row":7,"column":41},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1426492610000}