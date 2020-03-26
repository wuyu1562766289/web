function transitIp(ipaddr)//��IPV6��ַ��ȫ
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
    ////����������ɣ������ݷ�����ipaddrs�У�������׼
    return initaddr(ipaddrs);//�����ip��ַ�������ַ���
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
IPV6��ַ�жϵ�������ʽΪ��

function isIPv6(str)//IPV6��ַ�ж� 
{
    return /:/.test(str)
    &&str.match(/:/g).length<8
    &&/::/.test(str)
        ?(str.match(/::/g).length==1
    &&/^::$|^(::)?([\da-f]{1,4}(:|::))*[\da-f]{1,4}(:|::)?$/i.test(str))
        :/^([\da-f]{1,4}:){7}[\da-f]{1,4}$/i.test(str);
}
��������˵����IPV4��IPV6��ת����

IPV4��IPV6��ַ��ת���ܼ򵥣�ֻ�轫IPV4��ַתΪʮ�����Ƹ�ʽ��������Ϊһ�飬Ȼ����ǰ�����::ffff����

JS�������£�

function four2six(fouraddr,fourmask)//IPV4תIPV6��������ַ������
{
    var reg = fouraddr.match(/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/);
    if(reg==null)
    {
        alert("IP��ַ����ȷ!");
        return;
    }
    if(fourmask.indexOf(".")!=-1)
    {
        reg = fourmask.match(/^(254|252|248|240|224|192|128|0)\.0\.0\.0$|^(255\.(254|252|248|240|224|192|128|0)\.0\.0)$|^(255\.255\.(254|252|248|240|224|192|128|0)\.0)$|^(255\.255\.255\.(255|254|252|248|240|224|192|128|0))$/);
        if(reg==null)
        {
            alert("�������벻��ȷ!");
            return;
        }
    }
    else
    {
        var mask = parseInt(fourmask, 10);
        if(mask<0 || mask > 32)
        {
            alert("�������벻��ȷ!");
            return;
        }
    }
*/    /***
     IPV4תIPV6�ķ����ܼ�
     1���Ƚ���ÿ��תΪ16����
     2��������λ��ǰ�����0
     3��V4һ�������4��16�������֣���ǰ�����ͺ������ֱ����
     4����ַǰ�����"0000:0000:0000:0000:0000:ffff:"����
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
    //���ϲ���V6��ַ����ȷ
    sixtemp = "0000:0000:0000:0000:0000:ffff:" + sixtemp;
    /!***
     ���洦���������룬�����������������д��,���ֻ���255.255.255.0д��
     1����һ�ִ���Ƚϼ򵥣�ֻ�����ֵ��96��128-32������
     2���ڶ�����Ҫ��Ϊ�ĶΣ�ÿ��תΪ2���ƣ�����һλ�ʼ��Ϊ0
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
            //�����ж�λ��
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
function four2sixip(fouraddr)//IPV4תIPV6��ֻת��ַ
{
    var reg = fouraddr.match(/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/);
    if(reg==null)
    {
        alert("IP��ַ����ȷ!");
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
    //���ϲ���V6��ַ����ȷ
    sixtemp = "0000:0000:0000:0000:0000:ffff:" + sixtemp;
    return sixtemp;
}*/
