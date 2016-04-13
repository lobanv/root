function AddImage()
{
document.getElementById('Container').innerHTML = '<img src="' + imgUrl1 + '" alt="test image" width="300" height="200" />';
}
function AddImage2(target, src)
{
target.src = src;
}
function AddImage3(target, src)
{
var img = document.createElement('img');
img.src = src;
target.appendChild(img);
}
