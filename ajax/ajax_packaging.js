// (function () {
    var $ = {
        ajax: function(oData) {

            var xhr = new XMLHttpRequest();
            var sData = "";
            
            if (oData.send) {
                for (const key in oData.send) {
                    sData += `${key}=${oData.send[key]}&`;
                }
                sData = sData.substring(0, sData.length - 1);
                oData.send = sData;
            }
            
            if (oData.type == 'get') {
                oData.url = oData.url + '?' + sData;
                oData.send = null;
            }

            xhr.open(oData.type, oData.url);

            if (oData.type == "post") {
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");    
            }
            xhr.send(oData.send);

            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log("success");
                    oData.callback(this.responseText);
                }
            }
        }
    }
// })();