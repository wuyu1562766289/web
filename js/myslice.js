/**
 * Created by wuyu1 on 2018/5/31.
 */
Array.prototype.mySlice = function (start, end)
{
    var aTemp = [];
    end = (typeof end !== "undefined") ? end : this.length;

    start = (start >= 0) ? start : Math.max(0, this.length + start);
    var nEnd = (typeof end == 'number') ? Math.min(this.length, end) : this.length;
    if(nEnd < 0)
    {
        nEnd = this.length + nEnd;
    }
    var size = nEnd - start;
    for(var i = 0; i < size; i++)
    {
        aTemp[i] = this[i + start];
    }

    return aTemp;
}

var aArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(aArray.mySlice(2, 5));
console.log(aArray.slice(2, 5));