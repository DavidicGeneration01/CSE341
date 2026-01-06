const wifeRoute = (req, res) => {
  res.send('wife Kings');
};

const davidRoute = (req, res) => {
  res.send('David Kings');
};

const davidicRoute = (req, res) => {
  res.send('Davidic Generation');
};

module.exports = {
    wifeRoute,
  davidRoute,
  davidicRoute,
};