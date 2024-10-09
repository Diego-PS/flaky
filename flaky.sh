max=20
for i in `seq 1 $max`
do
    npx jest --clearCache
    npx jest ./$1 --silent --randomize --verbose
done