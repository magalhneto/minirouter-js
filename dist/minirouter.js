/**
***@Author: Magalhães Neto <magalhneto@gmail.com>
***@Date: 03/2016
***@License: MIT
**/
(function(){
  var route = {};

  this.router = function router(path, target){
    route[path] = {
      target : target
    }
  };
  
  this.routing = function routing(){
    var url = location.hash.slice(1) || '/',
        router = route[url],
        render = document.getElementById(router.target).innerHTML;
    
    document.getElementById('view').innerHTML = render;
  };
  
  this.addEventListener('hashchange', routing);
  this.addEventListener('load', routing);
})();