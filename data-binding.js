// data binding in D3.



function main(){
  var svg= d3.select('#visualization').append('svg');
  svg.attr('width', 800);
  svg.attr('height',800);
  
  //load the data from a text file, and call the callback function when it's done.
  //d3.text('???',fuction(err, content){
    if(err){
    //if any erro happens, print it and return (no visualization will be shown)
      console.error(err);
      return;
    }
  }

}


main();
