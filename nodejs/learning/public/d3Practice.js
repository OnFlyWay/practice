var nodes = [{
    x: 50,
    y: 30
}, {
    x: 100,
    y: 70
}, {
    x: 30,
    y: 100
}]
console.log(d3.select(".sliders"))
d3.select(".sliders")

    .selectAll(".slider")

    .data(nodes)
    .enter()

    .append("rect")

    .attr("x", function (d, i) {

        return d.x-5;

    })
    .attr("y", function (d) {

        return d.y-5;

    })
    .attr("width", 80)
    .attr("height", 30)
    .attr('fill', "#00ff00")

d3.select(".sliders")

    .selectAll(".slider2")

    .data(nodes)
    .enter()

    .append("rect")

    .attr("x", function (d, i) {

        return d.x;

    })
    .attr("y", function (d) {

        return d.y;

    })
    .attr("width", 60)
    .attr("height", 20)
    .attr('fill', "#ffff00")
    .call(d3.drag()
        .on("start", started)
        .on("drag", dragged)
        .on("end", ended)
    )

function started() {
    var circle = d3.select(this).classed("dragging", true);
}
function dragged(d) {
    let oldWidth=d3.select(this).attr("width")
    let newWidth=oldWidth
    console.log(d3.event)
    d3.select(this).attr("width",d3.event.sourceEvent.clientX-d.x)
}
function ended() {
    console.log("finished")
}