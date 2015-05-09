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