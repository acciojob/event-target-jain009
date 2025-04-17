class EventTarget {
    constructor() {
      this.listeners = new Map();
    }
  
    addEventListener(event, callback) {
		if(!this._listeners[event]){
			this._listeners[event]=[];
		}
		if(!this._listners[event].includes(callback)){
			this._listners[event].push(callback);
		}
      
    }
  
    removeEventListener(event, callback) {
      if(this._listeners[event]){
		  this._listeners[event] = this._listners[event].filter(
			  (listner) => listner !== callback;
		  )
	  }
    }
  
    dispatchEvent(event) {
    if(this._listeners[event]){
		this._listeners[event].forEach((listener) => {
			listener();
		})
	}
    }
  }
  
