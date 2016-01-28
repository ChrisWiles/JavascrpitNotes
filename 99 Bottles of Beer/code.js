var word = "bottles";
var count = 99;
while (count > 0) {
        document.write(count + " " + word + " of beer on the wall" + '<br>' );
        document.write(count + " " + word + " of beer," + '<br>' );
        document.write("Take one down, pass it around," + '<br>' );
        count = count - 1;
    if (count > 0) {
        document.write(count + " " + word + " of beer on the wall." + '<br>' );
    } else {
        document.write("No more " + word + " of beer on the wall." + '<br>' );
    }
}