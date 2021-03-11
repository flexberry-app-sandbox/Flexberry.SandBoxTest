docker build --no-cache -f SQL\Dockerfile.PostgreSql -t sandboxtest/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t sandboxtest/app ../..
