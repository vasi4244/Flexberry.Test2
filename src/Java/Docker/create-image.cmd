docker build --no-cache -f SQL\Dockerfile.PostgreSql -t test_2-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t test_2-java/app ../../..
