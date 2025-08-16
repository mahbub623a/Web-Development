// callStack -> java script execute function through stack
function one() {
   return 1;
}
function tow() {
   return one() + one();
}
function three() {
   let ans = tow() + one();
   console.log(ans);
}
three();

// breakpoint -> observe call-stuck in browser