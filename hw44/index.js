const kebabCaseToCamelCase = (string) => {
  return string.replace(/-./g, (m) => m.toUpperCase()[1]);
};

const buildRoute = (routeString, params) => {
  return routeString.replace(/:(.*?)\//g, (_, group) => {
    return params[kebabCaseToCamelCase(group)] + "/";
  });
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
