/* 
* @Author: awate
* @Date:   2015-05-19 20:54:02
* @Last Modified by:   awate
* @Last Modified time: 2015-05-19 21:20:56
*/

var Menus=Menus || (function(){
  var Menus = { };

  Menus.menus = { };
  Menus.defaultMenu = Menus.menus['main'];
  Menus.currentMenu = null;
  Menus.nextMenu = null;

  return Menus;
})();