# shellcheck shell=bash

local_dir="$PWD/.database"

function start_db {
  mysqld \
    --datadir="${local_dir}/datadir/" \
    --basedir="${local_dir}/" \
    --socket="${local_dir}/socket.sock" \
    --log-error \
    --log-error="$PWD/.database/errors.log" \
    --old-passwords=2 \
    --daemonize
}

if (! test -d "${local_dir}/datadir/"); then
  mkdir -p "${local_dir}/datadir/" \
    && mysqld \
      --old-passwords=2 \
      --log-error="$PWD/.database/errors.log" \
      --datadir="${local_dir}/datadir" \
      --initialize-insecure \
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
