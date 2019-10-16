var pos = 0;
var turn = 0;
var speed = 25; // speed in ms
var roles = [
    "Corporal in the Canadian Army Reserve",
    "Full Stack Software Developer Intern for National Defence",
    "Hackathon Director for Queen's Software Developer's Club",
    "Offensive Security Team Member for QMIND"
];
var links = ["./roles/caf.html", "./roles/nd.html", "./roles/qsdc.html", "./roles/qmind.html"]


setTimeout(typeWriter, speed);

function typeWriter() {
    if (pos == 0) {
        var el = document.getElementById("demo");
        var wrapper = document.createElement('a');
        wrapper.setAttribute("href", links[turn]);
        wrapper.setAttribute("id", "roleLink");
        wrapper.setAttribute("target", "_blank");
        el.parentNode.insertBefore(wrapper, el);
        wrapper.appendChild(el);
    }
    if (pos < roles[turn].length) {
        if (!$('#demo').is(":hover")) {
            document.getElementById("demo").innerHTML += roles[turn].charAt(pos);
            pos++;
        }
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(erase, speed+1500);
    }
}

function erase() {
    if (pos >= 0) {
        if (!$('#demo').is(":hover")) {
            var temp = roles[turn].toString().substring(0, pos);
            document.getElementById("demo").innerHTML = temp;
            pos--;
        }
        setTimeout(erase, speed);
    } else {
//        document.getElementById("demo").parentNode.removeChild("a");
        var cnt = $("#roleLink").contents();
        $("#roleLink").replaceWith(cnt);
        turn++;
        if (turn >= roles.length) {
            turn = 0;
        }
        setTimeout(typeWriter, speed);
    }
}

