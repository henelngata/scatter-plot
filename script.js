const width = 800;
const height = 400;
const padding = 40;

const svg = d3.select('#chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

d3.json('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json')
    .then(data => {
        const xScale = d3.scaleLinear()
            .domain([d3.min(data, d => d.Year) - 1, d3.max(data, d => d.Year) + 1])
            .range([padding, width - padding]);

        const yScale = d3.scaleTime()
            .domain([d3.min(data, d => new Date(d.Seconds * 1000)), d3.max(data, d => new Date(d.Seconds * 1000))])
            .range([padding, height - padding]);

        const xAxis = d3.axisBottom(xScale).tickFormat(d3.format('d'));
        const yAxis = d3.axisLeft(yScale).tickFormat(d3.timeFormat('%M:%S'));

        svg.append('g')
            .attr('id', 'x-axis')
            .attr('transform', `translate(0, ${height - padding})`)
            .call(xAxis);

        svg.append('g')
            .attr('id', 'y-axis')
            .attr('transform', `translate(${padding}, 0)`)
            .call(yAxis);

        const tooltip = d3.select('body')
            .append('div')
            .attr('id', 'tooltip')
            .style('opacity', 0)
            .attr('class', 'tooltip');

        svg.selectAll('.dot')
            .data(data)
            .enter()
            .append('circle')
            .attr('class', 'dot')
            .attr('cx', d => xScale(d.Year))
            .attr('cy', d => yScale(new Date(d.Seconds * 1000)))
            .attr('r', 5)
            .attr('data-xvalue', d => d.Year)
            .attr('data-yvalue', d => new Date(d.Seconds * 1000))
            .style('fill', d => d.Doping ? 'red' : 'green')
            .on('mouseover', (event, d) => {
                tooltip.transition()
                    .duration(200)
                    .style('opacity', 0.9);
                tooltip.html(`${d.Name}: ${d.Nationality}<br/>Year: ${d.Year}, Time: ${d.Time}${d.Doping ? '<br/><br/>' + d.Doping : ''}`)
                    .attr('data-year', d.Year)
                    .style('left', (event.pageX + 10) + 'px')
                    .style('top', (event.pageY - 28) + 'px');
            })
            .on('mouseout', () => {
                tooltip.transition()
                    .duration(500)
                    .style('opacity', 0);
            });

        const legend = svg.append('g')
            .attr('id', 'legend')
            .attr('transform', `translate(${width - 100}, ${height / 2})`);

        legend.append('rect')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', 15)
            .attr('height', 15)
            .style('fill', 'red');

        legend.append('text')
            .attr('x', 20)
            .attr('y', 12)
            .text('Doping Allegations');

        legend.append('rect')
            .attr('x', 0)
            .attr('y', 20)
            .attr('width', 15)
            .attr('height', 15)
            .style('fill', 'green');

        legend.append('text')
            .attr('x', 20)
            .attr('y', 32)
            .text('No Doping Allegations');
    });
