exports= function(){
  return this.list[Math.floor(Math.random()*this.list.length)];
}
exports.list = [
"I like your style.",
"I can't wait to see what you build!",
"You are looking amazing today, by the way."
];