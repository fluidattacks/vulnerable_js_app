# shellcheck shell=bash

local_dir="$PWD/.database"

function start_db {
  mysqld \
    --datadir="${local_dir}/datadir/" \
    --basedir="${local_dir}/" \
    --socket="${local_dir}/socket.sock" \
    --mysqlx-socket="${local_dir}/socketx.sock" \
    --daemonize
}

if (! test -d "${local_dir}/datadir/"); then
  mkdir -p "${local_dir}/datadir/" \
    && mysqld --datadir="${local_dir}/datadir" --initialize-insecure \
    && start_db \
    && mysql \
      --socket "${local_dir}/socket.sock" \
      --host "localhost" \
      --port "3306" \
      --user "root" \
      --skip-password \
      < '__argSqlFile__'
else
  start_db
fi
