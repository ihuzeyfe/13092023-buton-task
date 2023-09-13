const town1 = (document.getElementById("town1").innerHTML = "Paris");
const town2 = (document.getElementById("town2").innerHTML = "Tokyo");
const town3 = (document.getElementById("town3").innerHTML = "Roma");

const header1 = (document.getElementById("head1").innerHTML = "PARIS");
const header2 = (document.getElementById("head2").innerHTML = "TOKYO");
const header3 = (document.getElementById("head3").innerHTML = "ROMA");

const header31 = (document.getElementById("head31").innerHTML =
  "London is the capital of England");
const header32 = (document.getElementById("head32").innerHTML =
  "Tokyo is the capital of Japan");
const header33 = (document.getElementById("head33").innerHTML =
  "Rome is the capital of Italy");

const p1 = (document.getElementById("p1").innerHTML =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada viverra egestas. Maecenas non velit fringilla, mattis est et, interdum neque. Morbi ullamcorper porttitor fermentum. Pellentesque blandit cursus nunc, ac cursus quam consequat ut. Aliquam sit amet ante pharetra, rhoncus orci at, fringilla augue. Proin ac volutpat mi. Curabitur ex neque, rhoncus in lacus eu, luctus lobortis metus. Integer sem justo, congue in nisl ut, dignissim imperdiet tellus. Nulla dapibus ligula in venenatis ullamcorper. Duis rhoncus efficitur ipsum. Sed at arcu mauris.");

const p2 = (document.getElementById("p2").innerHTML =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada viverra egestas. Maecenas non velit fringilla, mattis est et, interdum neque. Morbi ullamcorper porttitor fermentum. Pellentesque blandit cursus nunc, ac cursus quam consequat ut. Aliquam sit amet ante pharetra, rhoncus orci at, fringilla augue. Proin ac volutpat mi. Curabitur ex neque, rhoncus in lacus eu, luctus lobortis metus. Integer sem justo, congue in nisl ut, dignissim imperdiet tellus. Nulla dapibus ligula in venenatis ullamcorper. Duis rhoncus efficitur ipsum. Sed at arcu mauris.");

const p3 = (document.getElementById("p3").innerHTML =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada viverra egestas. Maecenas non velit fringilla, mattis est et, interdum neque. Morbi ullamcorper porttitor fermentum. Pellentesque blandit cursus nunc, ac cursus quam consequat ut. Aliquam sit amet ante pharetra, rhoncus orci at, fringilla augue. Proin ac volutpat mi. Curabitur ex neque, rhoncus in lacus eu, luctus lobortis metus. Integer sem justo, congue in nisl ut, dignissim imperdiet tellus. Nulla dapibus ligula in venenatis ullamcorper. Duis rhoncus efficitur ipsum. Sed at arcu mauris.");

function clickHiddenParis() {
    document.getElementById("hidden1").style.display = "none";
    document.getElementById("hidden").style.display = "none";
    document.getElementById("divp1").style.display = "block";

}
function clickHiddenTokyo() {
    document.getElementById("hidden1").style.display = "none";
    document.getElementById("hidden").style.display = "block";
    document.getElementById("divp1").style.display = "none";
}
function clickHiddenRome() {
    document.getElementById("hidden1").style.display = "block";
    document.getElementById("hidden").style.display = "none";
    document.getElementById("divp1").style.display = "none";
}

