// d3.json("samples.json").then(function (data) {
//     console.log('hello world! we are reading the json file :) here it is:');
//     console.log(data);
//   });

function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}


function buildPlot() {
  
  d3.json("samples.json").then(function(data) {      // Grab values from the response json object to build the plots
    var samples = data.samples;
    console.log(data)

    // Print the data we need
    console.log(samples);

  
      // var trace1 = {
      //   type: "bar",
      //   orientation: "h",
      //   x: dates,
      //   y: closingPrices,
      //   line: {
      //     color: "#17BECF"
      //   }
      // };
  
  //     var data = [trace1];
  
  //     var layout = {
  //       title: `${stock} closing prices`,
  //       xaxis: {
  //         range: [startDate, endDate],
  //         type: "date"
  //       },
  //       yaxis: {
  //         autorange: true,
  //         type: "linear"
  //       }
  //     };
  
  //     Plotly.newPlot("plot", data, layout);
  
  //   });
  // }
  
  // Add event listener for submit button
 // d3.select("#submit").on("click", handleSubmit);
  });
};

buildPlot();