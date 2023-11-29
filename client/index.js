const host = "http://localhost:3000";
const queryParams = { company_uuid : "COMP-F4177528", transaction_uuid : "" };

const socket = io(host, {
    // path: "/pathToConnection",
    transports: ['websocket'], 
    upgrade: false,
    query: queryParams,
    reconnection: false,
    rejectUnauthorized: false
});

document.getElementById("host").innerHTML = host;

socket.once("connect", () => {
    
    document.getElementById("connection").innerHTML = "connected";

    socket.on("chat message", (data) => {
        console.log("Online");
        console.log(data);
        alert('New Order Received!');
        document.getElementById("logs").innerHTML += "<div>" + "Order is Placed" + "</div>";
    });
    socket.emit('newOrder');
});