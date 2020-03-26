#!/bin/bash

var1=5
var2=2

flag=`zenity --entry --title="title-0.0" --text="input + - \* / %" --entry-text="+"`

echo "$flag"

case $flag in
        +)
        var3=`expr $var1 + $var2`
        ;;
        -)
        var3=`expr $var1 - $var2`
        ;;
        \*)
        var3=`expr $var1 \* $var2`
        ;;
        /)
        var3=`expr $var1 / $var2`
        ;;
        %)
        var3=`expr $var1 % $var2`
        ;;
        *)
        echo "you erro"
esac


echo "$var3"