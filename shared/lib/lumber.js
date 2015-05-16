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