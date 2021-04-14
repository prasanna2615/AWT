function covidCases()
{
    var table=document.createElement("TABLE");
    table.border="2";
    const request=new XMLHttpRequest();
    var country=document.getElementById("country").value
    var url=`https://api.covid19api.com/live/country/${country}`;
    request.open('GET',url,true);
    request.onload=function()
    {
        var result=JSON.parse(this.response);
        row=table.insertRow(-1);
            cellH1=row.insertCell(-1);
            cellH2=row.insertCell(-1);
            cellH3=row.insertCell(-1);
            cellH4=row.insertCell(-1);
            cellH5=row.insertCell(-1);
            cellH1.innerHTML="DATE"
            cellH2.innerHTML="STATE"
            cellH3.innerHTML="ACTIVE"
            cellH4.innerHTML="DEATHS"
            cellH5.innerHTML="RECOVERED"
        result.forEach((data)=>
        {
            row=table.insertRow(-1);
            c1=row.insertCell(-1);
            c2=row.insertCell(-1);
            c3=row.insertCell(-1);
            c4=row.insertCell(-1);
            c5=row.insertCell(-1);
            c1.innerHTML=data.Date;
            c2.innerHTML=data.Province;
            c3.innerHTML=data.Active;
            c4.innerHTML=data.Deaths;
            c5.innerHTML=data.Recovered;
        })
    }
    var div=document.getElementById("table");
    div.append(table);
    request.send();
}