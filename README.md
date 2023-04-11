# Belly Button Biodiversity
In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Getting Started
Complete the following steps:

- Use the D3 library to read in ```samples.json``` from the URL: ```https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json```.

Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

Use ```sample_values``` as the values for the bar chart.

Use ```otu_ids``` as the labels for the bar chart.

Use ```otu_labels``` as the hovertext for the chart.

<img width="484" alt="BBB bar chart" src="https://user-images.githubusercontent.com/111451303/231040394-69647f50-335c-431e-994a-c2ce1b3831a3.png">


- Create a bubble chart that displays each sample.

Use ```otu_ids``` for the x values.

Use ```sample_values``` for the y values.

Use ```sample_values``` for the marker size.

Use ```otu_ids``` for the marker colors.

Use ```otu_labels``` for the text values.

<img width="679" alt="BBB bubble chart" src="https://user-images.githubusercontent.com/111451303/231040449-90991668-3a10-4c12-be39-ef6e06c42567.png">


- Display the sample metadata, i.e., an individual's demographic information.

- Display each key-value pair from the metadata JSON object somewhere on the page.

<img width="95" alt="BBB demo chart" src="https://user-images.githubusercontent.com/111451303/231040510-8d9a87ab-19bb-4f91-9535-1ff954f897aa.png">


- Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

<img width="692" alt="BBB full dashboard" src="https://user-images.githubusercontent.com/111451303/231040579-6b357b3c-5d89-48f1-b9f7-1c3507ad54e2.png">

## Results
The webpage can be accessed using this link: ```https://jelsbrock.github.io/belly-button-biodiversity/```

## References
Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: ```http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/```
