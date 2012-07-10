YAHOO.env.classMap = {"Container": "EaselJS", "BoxBlurFilter": "EaselJS", "ColorFilter": "EaselJS", "Rectangle": "EaselJS", "SpriteSheetUtils": "EaselJS", "UID": "EaselJS", "MouseEvent": "EaselJS", "DisplayObject": "EaselJS", "BitmapAnimation": "EaselJS", "Graphics": "EaselJS", "Shadow": "EaselJS", "Ticker": "EaselJS", "Stage": "EaselJS", "ColorMatrixFilter": "EaselJS", "Filter": "EaselJS", "Command": "EaselJS", "DOMElement": "EaselJS", "Point": "EaselJS", "Text": "EaselJS", "Bitmap": "EaselJS", "Shape": "EaselJS", "Touch": "EaselJS", "SpriteSheet": "EaselJS", "Matrix2D": "EaselJS"};

YAHOO.env.resolveClass = function(className) {
    var a=className.split('.'), ns=YAHOO.env.classMap;

    for (var i=0; i<a.length; i=i+1) {
        if (ns[a[i]]) {
            ns = ns[a[i]];
        } else {
            return null;
        }
    }

    return ns;
};
