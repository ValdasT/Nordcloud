
const allStations = [
  { coordinates: [0, 0], reach: 10, power: 0 },
  { coordinates: [20, 20], reach: 5, power: 0 },
  { coordinates: [10, 0], reach: 12, power: 0 }
];

const calculateStation = point => {
  let bestLinkStation = allStations.map(linkStation => {
    linkStation.power = getPower(getDistance(point, linkStation.coordinates), linkStation.reach)
    return linkStation;
  }).filter(linkStation => {
    return linkStation.power > 0;
  }).sort((a, b) => a.power > b.power).pop();

  return {
    point: point,
    station: bestLinkStation
  };
}

//Distance formula d = sqrt((x2-x1)^2 + (y2-y1)^2)
const getDistance = (a, b) => {
  return Math.sqrt(Math.pow(b[0] - a[0], 2) + Math.pow(b[1] - a[1], 2));
}

//Calculate the power of link station power = (reach - d)^2
const getPower = (d, reach) => {
  return d > reach ? 0 : Math.pow((reach - d), 2);
}

module.exports = {
  calculateStation,
}