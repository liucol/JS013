function limitgrap(id){
//继承grap的属性
	TabChange.call(this,id);
}
for(var i=0 in TabChange.prototype){
	limitgrap.prototype[i]=TabChange.prototype[i];
}

				
limitgrap.prototype.fnmove=function (ev){
							var oEvent=ev||event;
							var l=oEvent.clientX-this.posx;
							var t=oEvent.clientY-this.posy;
							if(l<0){
								l=0;
							}else if(l>document.documentElement.clientWidth-this.Odiv1.offsetWidth){
								l=document.documentElement.clientWidth-this.Odiv1.offsetWidth;
							}
							this.Odiv1.style.left=l+'px';
							this.Odiv1.style.top=t+'px';
							
						}

