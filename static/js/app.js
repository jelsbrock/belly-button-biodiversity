const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
    
function plots(id) {
    d3.json(url).then(data => {
        let result = data.samples.filter(sampleResult => sampleResult.id == id);
        let resultData = result[0];
        let values = resultData.sample_values;
        let labels = resultData.otu_labels;
        let ids = resultData.otu_ids;

        let sampleValues10 = values.slice(0,10).reverse();
        let otuLabels10 = labels.slice(0,10).reverse();
        let otuIDs10 = ids.slice(0,10).reverse();

        let otuIDs = otuIDs10.map(e => "OTU " + e);
        
        var trace1 = {
            x: sampleValues10,
            y: otuIDs,
            text: otuLabels10,
            type: "bar",
            orientation: "h"
        };

        let data1 = [trace1];

        let layout1 = {
            title: "Top 10 OTU",
            width: 1000
        };

        Plotly.newPlot("bar", data1, layout1);

        var trace2 = {
            x: ids,
            y: values,
            text: labels,
            mode: "markers",
            marker: {
                color: ids,
                size: values
            }
        };
      
        let data2 = [trace2];
      
        let layout2 = {
            title: "Bacteria by OTU and Volume",
            height: 1000,
            width: 1400
        };
      
        Plotly.newPlot("bubble", data2, layout2);
    });
};

function demoInfo(id) {
    d3.json(url).then(data => {
        let metadata = data.metadata;
        let output = metadata.filter(meta => meta.id.toString() === id)[0];
        let demoTable = d3.select("#sample-metadata");
            demoTable.html("");
            Object.entries(output).forEach((key) => {   
            demoTable.append("h6").text(key[0].toUpperCase() + ": " + key[1] + "\n");    
        });
    });
};

function optionChanged(id) {
    plots(id);
    demoInfo(id);
};

function init() {
    var dropdown = d3.select("#selDataset");
    
    d3.json(url).then(data => {
        data.names.forEach(name => {
            dropdown.append("option").text(name).property("value");
        });

        optionChanged(data.names[0]);
    });
};

init();