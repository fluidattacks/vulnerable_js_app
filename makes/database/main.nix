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
      inputs.nixpkgs.mysql80
    ];
  };
  entrypoint = ./entrypoint.sh;
  name = "database";
}
