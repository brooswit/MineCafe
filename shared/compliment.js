/* 
* @Author: awate
* @Date:   2015-05-18 14:09:35
* @Last Modified by:   awate
* @Last Modified time: 2015-05-19 10:51:50
*/
module.exports = (function(){
  var list = [
    "I like your style.",
    "I can't wait to see what you build!",
    "You are looking amazing today, by the way."
  ];
  return function(){
    return list[Math.floor(Math.random()*list.length)];
  }
})();
