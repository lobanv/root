var src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/%D0%A1%D1%80%D0%B0%D0%B2%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5_%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80%D1%8B_%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B_%CE%B1_%D0%A6%D0%B5%D0%BD%D1%82%D0%B0%D0%B2%D1%80%D0%B0_%D0%B8_%D0%A1%D0%BE%D0%BB%D0%BD%D1%86%D0%B0.jpg/1920px-%D0%A1%D1%80%D0%B0%D0%B2%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5_%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80%D1%8B_%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B_%CE%B1_%D0%A6%D0%B5%D0%BD%D1%82%D0%B0%D0%B2%D1%80%D0%B0_%D0%B8_%D0%A1%D0%BE%D0%BB%D0%BD%D1%86%D0%B0.jpg';
function AddImage()
{
document.getElementById('Container').innerHTML = '<img src="' + src + '" alt="test image" width="300" height="200" />';
}
function TestLink()
{
alert('works');
}
alert('1.js loaded');