/* 
* @Author: awate
* @Date:   2015-05-18 14:09:35
* @Last Modified by:   awate
* @Last Modified time: 2015-05-19 10:51:35
*/
var Lumber = Lumber || (function(){
  var settings  = { };
  var prefixes  = [ ];
  var Lumber    = { };
  Lumber.prefix = { };

  Lumber.flag   = function(key, value){
    if(value===undefined)
      return settings[key];
    settings[key] = value;
  };
  Lumber.log   = function( ){
    var args = [].splice.call(arguments,0);
    console.log(prefixes.concat(args).join(''));
  };
  Lumber.debug = function( ){
    var args = [].splice.call(arguments,0);
    if(settings.debug){
      console.log(['[DEBUG]'].concat(prefixes.concat(args)).join('') );
    }
  }

  Lumber.prefix.push = function( prefix ){
    return prefixes.push( prefix );
  }
  Lumber.prefix.pop = function( ){
    return prefixes.pop( );
  }
  return Lumber;
})();