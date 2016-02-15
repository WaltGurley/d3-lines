var svg = d3.select(".svg-canvas");
var width = parseInt(svg.style("width"));
var height = parseInt(svg.style("height"));

var smallRadius = d3.min([width, height]) / 2;

var rayCount = 64;
var raysSpeed = d3.range(0, Math.PI * 2, Math.PI / rayCount);
var rays = svg.selectAll("line")
  .data(raysSpeed).enter()
  .append("line")
  .attr({
    "class": "rays rays-1"
  });

var rays2 = svg.selectAll("line2")
  .data(raysSpeed.map(function(d) { return d + Math.PI / rayCount / 2; })).enter()
  .append("line")
  .attr({
    "class": "rays rays-2"
  });

d3.timer(function(elapsed) {
  var angle = elapsed / 10000;
  rays.attr({
    "x1": function(d) {
      return width / 2 + Math.tan(angle + d + Math.PI) * (smallRadius / 8);
    },
    "x2": function(d) {
      return  width / 2 + Math.cos(angle + d + Math.PI) * (smallRadius);
    },
    "y1": function(d) {
      return  height / 2 + Math.sin(angle + d + Math.PI) * (smallRadius / 8);
    },
    "y2": function(d) {
      return  height / 2 + Math.sin(angle + d + Math.PI) * (smallRadius);
    }
  });

  rays2.attr({
    "x1": function(d) {
      return width / 2 - Math.tan(angle + d + Math.PI) * (smallRadius / 8);
    },
    "x2": function(d) {
      return  width / 2 - Math.cos(angle + d + Math.PI) * (smallRadius);
    },
    "y1": function(d) {
      return  height / 2 - Math.sin(angle + d + Math.PI) * (smallRadius / 8);
    },
    "y2": function(d) {
      return  height / 2 - Math.sin(angle + d + Math.PI) * (smallRadius);
    }
  });
});
