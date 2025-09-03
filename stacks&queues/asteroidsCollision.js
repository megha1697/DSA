/** 
 * We are given an array asteroids of integers representing asteroids in a row. 
 * The indices of the asteriod in the array represent their relative position in 
 * space. For each asteroid, the absolute value represents its size, and the sign 
 * represents its direction (positive meaning right, negative meaning left). 
 * Each asteroid moves at the same speed.
 * Find out the state of the asteroids after all collisions. If two asteroids meet,
 *  the smaller one will explode. If both are the same size, both will explode.
 *  Two asteroids moving in the same direction will never meet. */

var asteroidCollision = function(asteroids) {
    let stack = [];
    let i=0;
    while(i < asteroids.length){
        if(!stack.length || stack[stack.length-1] <0 || asteroids[i]>0){
            stack.push(asteroids[i])
        } else if(-asteroids[i] === stack[stack.length-1]){
            stack.pop()
        } else if(-asteroids[i] > stack[stack.length-1]) {
            stack.pop();
            i--;
        }
        i++;
    }
    return stack;
};

console.log(asteroidCollision([5,10,-5]));
