// This function runs once on start and every time it is changed.
// the local state you can write to
// a domElement you can render to
// a set of dom event helper functions
// the current run time iteration
export const run = ({ state, output, events, iteration }) => {
  // your code here
  console.log('running')
}

// This function runs every iteration
export const update = ({ state, output, events, iteration }) => {
  // your code here
  console.log(iteration)
}
