// ================= SMOOTH SCROLLING =================
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(e) {
        if (this.getAttribute("href").startsWith("#")) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href"))
                .scrollIntoView({ behavior: "smooth" });
        }
    });
});

// ================= WHATSAPP QUICK CHAT =================
const whatsappBtn = document.createElement("div");
whatsappBtn.innerHTML = "💬";
whatsappBtn.style.position = "fixed";
whatsappBtn.style.bottom = "20px";
whatsappBtn.style.right = "20px";
whatsappBtn.style.background = "#25D366";
whatsappBtn.style.color = "white";
whatsappBtn.style.padding = "15px";
whatsappBtn.style.borderRadius = "50%";
whatsappBtn.style.cursor = "pointer";
whatsappBtn.style.fontSize = "25px";
whatsappBtn.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";

whatsappBtn.onclick = function () {
    window.open("https://wa.me/22948156791", "_blank");
};

document.body.appendChild(whatsappBtn);

// ================= TRACKING SYSTEM DEMO =================

function trackPackage() {
    let trackingNumber = document.getElementById("trackingInput").value;

    if (trackingNumber === "") {
        alert("Please enter your tracking number.");
        return;
    }

    document.getElementById("trackingResult").innerHTML =
        "✅ Package Status: In Transit<br>" +
        "📍 Location: Cotonou<br>" +
        "🛵 Rider: Assigned<br>" +
        "⏳ Estimated Delivery: Today";
}