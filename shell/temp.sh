time=$(date "+%Y-%m-%d %H:%M:%S")
echo "开始执行" > result.txt
echo "${time}" >> result.txt
echo 
for ((i=1; i<=100; i++))
do
    echo $i >> result.txt
    sleep 3s
    echo $i
    sleep 3s
    echo $i
done

time=$(date "+%Y-%m-%d %H:%M:%S")
echo "执行完成：" >> result.txt
echo "${time}" >> result.txt