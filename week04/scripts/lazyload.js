
const now = new Date();
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
};

const formattedDateTime = now.toLocaleString("en-US", options);
document.getElementById("lastModified").
textContent = `Today, ${formattedDateTime}`;
