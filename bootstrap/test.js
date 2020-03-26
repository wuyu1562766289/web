function transitIp(ipaddr)//将IPV6地址补全
{
    var ipaddress = ipaddr.split("/");
    var ipaddrs = ipaddress[0].split(":");
    if(ipaddrs.length<8)
    {
        var count = 0;
        for(var i=0;i<ipaddrs.length;i++)
        {
            if(ipaddrs[i]=="")
            {
                if(count==1)
                {
                    ipaddrs[i] = addZero(4);
                    continue;
                }
                ipaddrs[i] = addZero((9-ipaddrs.length)*4);
                count++;
            }
            else
            {
                ipaddrs[i] += ":";
            }
        }
    }
    else if(ipaddrs.length==8)
    {
        for(var i=0;i<8;i++)
        {
            ipaddrs[i] += ":";
        }
    }
    ////上述补齐完成，将内容放置于ipaddrs中，但不标准
    return initaddr(ipaddrs);//获得了ip地址的完整字符串
}
function addZero(num)
{
    var zerostr = "";
    for(var i=1;i<num+1;i++)
    {
        zerostr+="0";
        if(i%4==0)
        {
            zerostr+=":";
        }
    }
    return zerostr;
}
function initaddr(ipaddrs)
{
    var iparray ="";
    for(var i=0;i<ipaddrs.length;i++)
    {
        iparray+=ipaddrs[i];
    }
    if(iparray.charAt(iparray.length-1)==':')
    {
        iparray = iparray.substr(0,iparray.length-1);
    }
    //var iparrays = iparray.split(":");
    //return iparrays;
    return iparray;
}
//transitIp('12:23:AB:15:ee:bb:12:aa/96');
transitIp('12::12:aa/96');



/*
IPV6地址判断的正则表达式为：

function isIPv6(str)//IPV6地址判断 
{
    return /:/.test(str)
    &&str.match(/:/g).length<8
    &&/::/.test(str)
        ?(str.match(/::/g).length==1
    &&/^::$|^(::)?([\da-f]{1,4}(:|::))*[\da-f]{1,4}(:|::)?$/i.test(str))
        :/^([\da-f]{1,4}:){7}[\da-f]{1,4}$/i.test(str);
}
接着我们说明下IPV4到IPV6的转换：

IPV4到IPV6网址的转换很简单，只需将IPV4地址转为十六进制格式，以两段为一组，然后再前面添加::ffff即可

JS代码如下：

function four2six(fouraddr,fourmask)//IPV4转IPV6，包括地址和掩码
{
    var reg = fouraddr.match(/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/);
    if(reg==null)
    {
        alert("IP地址不正确!");
        return;
    }
    if(fourmask.indexOf(".")!=-1)
    {
        reg = fourmask.match(/^(254|252|248|240|224|192|128|0)\.0\.0\.0$|^(255\.(254|252|248|240|224|192|128|0)\.0\.0)$|^(255\.255\.(254|252|248|240|224|192|128|0)\.0)$|^(255\.255\.255\.(255|254|252|248|240|224|192|128|0))$/);
        if(reg==null)
        {
            alert("子网掩码不正确!");
            return;
        }
    }
    else
    {
        var mask = parseInt(fourmask, 10);
        if(mask<0 || mask > 32)
        {
            alert("子网掩码不正确!");
            return;
        }
    }
*/    /***
     IPV4转IPV6的方法很简单
     1、先将其每段转为16进制
     2、不足两位的前面添加0
     3、V4一共会产生4个16进制数字，比前两个和后两个分别组合
     4、地址前面加上"0000:0000:0000:0000:0000:ffff:"即可
     **/
/*    var sixtemp = "";
    var fouraddrs = fouraddr.split(".");
    for (var i=0; i<fouraddrs.length; i++)
    {
        var addr4ip = parseInt(fouraddrs[i], 10);
        var addrtemp = addr4ip.toString(16);
        if(addrtemp.length==1)
        {
            addrtemp = "0" + addrtemp;
        }
        sixtemp += addrtemp;
        if(i==1)
        {
            sixtemp += ":";
        }
    }
    //以上产生V6地址段正确
    sixtemp = "0000:0000:0000:0000:0000:ffff:" + sixtemp;
    /!***
     下面处理子网掩码，子网掩码可以有两种写法,数字或者255.255.255.0写法
     1、第一种处理比较简单，只需此数值加96（128-32）即可
     2、第二种需要分为四段，每段转为2进制，看哪一位最开始变为0
     **!/
    var masktemp = 96;
    if(fourmask.indexOf(".")==-1)
    {
        masktemp += parseInt(fourmask);
    }
    else
    {
        var masks = fourmask.split(".");
        for ( var i=0; i<masks.length; i++)
        {
            var mask4ip = parseInt(masks[i], 10);
            var mask4temp = mask4ip.toString(2);
            if(mask4temp.length!=8)
            {
                for(var j=0;j<8-mask4temp;j++)
                {
                    mask4temp = "0"+mask4temp;
                }
            }
            //下面判断位置
            var flagtemp = false;
            for(var j=0;j<8;j++)
            {
                if(mask4temp.charAt(j)=='0')
                {
                    flagtemp = true;
                    masktemp += i*8 + j;
                    break;
                }
                if(j==7&&i==3)
                {
                    flagtemp = true;
                    masktemp = 128;
                    break;
                }
            }
            if(flagtemp)
            {
                break;
            }
        }
    }
    return sixtemp + "/" + masktemp;
}*/

/*
function four2sixip(fouraddr)//IPV4转IPV6，只转地址
{
    var reg = fouraddr.match(/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/);
    if(reg==null)
    {
        alert("IP地址不正确!");
        return;
    }
    var sixtemp = "";
    var fouraddrs = fouraddr.split(".");
    for (var i=0; i<fouraddrs.length; i++)
    {
        var addr4ip = parseInt(fouraddrs[i], 10);
        var addrtemp = addr4ip.toString(16);
        if(addrtemp.length==1)
        {
            addrtemp = "0" + addrtemp;
        }
        sixtemp += addrtemp;
        if(i==1)
        {
            sixtemp += ":";
        }
    }
    //以上产生V6地址段正确
    sixtemp = "0000:0000:0000:0000:0000:ffff:" + sixtemp;
    return sixtemp;
}*/
