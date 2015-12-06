//Creates a <svg> element inside the Visualizaation div

function main(){
  var svg = d3.select('#visualization').append('svg');
  svg.attr('width', 800);
  svg.attr('height', 800);
}

