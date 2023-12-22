const buildRoute = (routeString, params) => {
  const regex = new RegExp(/(\:)([a-z]+)(\-)(id)/, "g");
  const matches = routeString.match(regex);
  // console.log(match);

  const paramsKeys = Object.keys(params);

  let str;

  if (paramsKeys.length === 1) {
    str = routeString.replace(regex, params[paramsKeys[0]]);
    return str;
  } else {
    for (const key in params) {
      str = routeString.replace(regex, params[key]);
      return str;
    }
  }
};

console.log(buildRoute("/user/:user-id/create", { userId: 1 })); // 'user/1/create'
// console.log(buildRoute("/user/:user-id/create", { userId: 15 })); // 'user/1/create'
console.log(
  buildRoute("/:tour-id/:game-id/:player-id/goal", {
    tourId: 1,
    gameId: 14,
    playerId: 125151,
  })
); // '/1/14/125151/goal'
