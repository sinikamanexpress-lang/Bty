// PARTICULES
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 120; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: Math.random() - 0.5,
        dy: Math.random() - 0.5
    });
}

function animate() {
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "orange";

    particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI*2);
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

animate();

// TRACKING FAKE
function track() {
    const result = document.getElementById("result");
    result.innerText = "Colis en transit vers Abidjan (mise à jour en temps réel)";
}

// CHAT IA SIMPLE
const input = document.getElementById("chatInput");
const chatBody = document.getElementById("chatBody");

input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        let msg = input.value;
        chatBody.innerHTML += "<p>Vous: " + msg + "</p>";
        chatBody.innerHTML += "<p>Assistant: Nous traitons votre demande...</p>";
        input.value = "";
    }
});

function scrollToTracking(){
    document.getElementById("tracking").scrollIntoView({behavior:"smooth"});
}
