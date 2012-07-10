


var vector2d = function (x, y) {

    var vec = {
        // x and y components of vector stored in vx,vy.
        vx: x,
        vy: y,

        // scale() method allows us to scale the vector
        // either up or down.
        scale: function (scale) {
            vec.vx *= scale;
            vec.vy *= scale;
        },

        // add() method adds a vector.
        add: function (vec2) {
            vec.vx += vec2.vx;
            vec.vy += vec2.vy;
        },

        // sub() method subtracts a vector.
        sub: function (vec2) {
            vec.vx -= vec2.vx;
            vec.vy -= vec2.vy;
        },

        // negate() method points the vector in the opposite direction.
        negate: function () {
            vec.vx = -vec.vx;
            vec.vy = -vec.vy;
        },

        // length() method returns the length of the vector using Pythagoras.
        length: function () {
            return Math.sqrt(vec.vx * vec.vx + vec.vy * vec.vy);
        },

        // A faster length calculation that returns the length squared.
        // Useful if all you want to know is that one vector is longer than another.
        lengthSquared: function () {
            return vec.vx * vec.vx + vec.vy * vec.vy;
        },

        // normalize() method turns the vector into a unit length vector
        // pointing in the same direction.
        normalize: function () {
            var len = Math.sqrt(vec.vx * vec.vx + vec.vy * vec.vy);
            if (len) {
                vec.vx /= len;
                vec.vy /= len;
            }
            // As we have already calculated the length, it might as well be
            // returned as it may be useful.
            return len;
        },

        // Rotates the vector by an angle specified in radians.
        rotate: function (angle) {
            var vx = vec.vx,
                vy = vec.vy,
                cosVal = Math.cos(angle),
                sinVal = Math.sin(angle);
            vec.vx = vx * cosVal - vy * sinVal;
            vec.vy = vx * sinVal + vy * cosVal;
        },

        // toString() is a utility function for displaying the vector as text,
        // a useful debugging aid.
        toString: function () {
            return '(' + vec.vx.toFixed(3) + ',' + vec.vy.toFixed(3) + ')';
        }
    };
    return vec;
};

 
