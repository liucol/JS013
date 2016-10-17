function TabChange(id){
				
				var _this=this;
				
				this.posx=0;
				this.posy=0;
				this.Odiv1=document.getElementById(id);
				
				this.Odiv1.onmousedown=function(ev){
					
					_this.fndown(ev);
					 return false;
				}
			   
				}
				
			TabChange.prototype.fndown=function (ev){
					        var _this=this;
							var oEvent=ev||event;
							this.posx=oEvent.clientX-this.Odiv1.offsetLeft;
							this.posy=oEvent.clientY-this.Odiv1.offsetTop;
						document.onmousemove=function(ev){
							_this.fnmove(ev);
						}
						document.onmouseup=function(){
							_this.fnup();
						}
						
					}
			TabChange.prototype.fnmove=function (ev){
							var oEvent=ev||event;
							this.Odiv1.style.left=oEvent.clientX-this.posx+'px';
							this.Odiv1.style.top=oEvent.clientY-this.posy+'px';
							
						}
			TabChange.prototype.fnup=function(){
							document.onmousemove=null;
							document.onmouseup=null;
						}