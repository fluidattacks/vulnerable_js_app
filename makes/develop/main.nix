{ makeNodeJsEnvironment
, makeScript
, projectPath
, inputs
, ...
}:
let
  environment = makeNodeJsEnvironment {
    name = "vulnerable_js_app";
    nodeJsVersion = "14";
    packageJson =
      projectPath "/package.json";
    packageLockJson =
      projectPath "/package-lock.json";
  };
in
makeScript {
  searchPaths = {
    source = [
      environment
    ];
    bin = [
      inputs.nixpkgs.bash
      inputs.nixpkgs.procps
    ];
  };
  entrypoint = ''
    npm run watch:dev
  '';
  name = "runtime";
}
