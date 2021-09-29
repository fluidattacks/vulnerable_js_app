{ makeScript
, projectPath
, inputs
, ...
}:
makeScript {
  replace = {
    __argSqlFile__ = projectPath "/makes/database/initialize.sql";
  };
  searchPaths = {
    bin = [
      inputs.nixpkgs.mysql57
    ];
  };
  entrypoint = ./entrypoint.sh;
  name = "database";
}
