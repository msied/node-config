module.exports=function(){

	// Syntactically friendly while-loop dressed up as a for-loop
	var nodeLoop = function(execThis, callBack){
		var self = this,
		    len = self.length,
		    slen = len - 1,
		     _callBack = (callBack) ? callBack : function(){};
		while (len-- || _callBack()){
		    (function(){
		        var i = slen - len;
			    execThis(self[i], i)
			})()
		}
	}
	global.Array.prototype.loopy=nodeLoop;

	global.collectData = function(req, callback){
		var _data = '';
		req.on('data', function(data){
			_data += data;
		});
		req.on('end', function(){
			if (_data.substring(0,1) === "{"){
				for (var i=0,len=_data.length;i<len;i++){
					if (_data.substring(i,i+2) === "}{"){
						_data = _data.substring(0,i+1)
						break;
					}
				}
			}
			if (_data === "") callback({});
			var data = JSON.parse(_data);
			callback(data);
		});
	}

	global.sendJSON = function(res, obj){
		res.write(JSON.stringify(obj))
		res.end();
	}
}