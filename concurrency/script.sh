max=20
for i in `seq 1 $max`
do
    npx jest --clearCache
    npx jest ./concurrency
done