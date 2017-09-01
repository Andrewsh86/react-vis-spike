Do a yarn install and a yarn start and you should see the graph on localhost:3000

Pros:
  Extremely easy to build a graph
  The data-points required to build a series are intuitive to how we'd want to return them from an API request
  There's a ton of cusutomization options for how to display data.

Cons:
  Furthers React as a dependency in the project.  Changing this decision becomes more expensive if we go this route.
  There is some missing behavior we'd want, including being able to reposition the axis labels.  
    There's an open issue on the project for   this, and some mention of being receptive of a PR, but it's not currently available in the project.
    https://github.com/uber/react-vis/issues/542
  It has the same issue that chart.js has with displaying the discharge level.  You have to include values for all x-points or else the graph is not useable. This seems to affect the display less significantly than in chart.js.
