function fetchGitrepos()
{
    var table=document.createElement("TABLE");
    table.border="4";
    const request=new XMLHttpRequest();
    var username=document.getElementById("uname").value;
    var url=`https://api.github.com/users/${username}/repos`;
    request.open('GET',url,true);
    request.onload=function()
    {
        var result=JSON.parse(this.response);
        row=table.insertRow(-1);
            
            cellH1=row.insertCell(-1);
            cellH2=row.insertCell(-1);
            cellH3=row.insertCell(-1);
            
            cellH1.innerHTML="USERNAME"
            cellH2.innerHTML="REPOSTORIES"
            cellH3.innerHTML="DESCRIPTION"
        result.forEach((repo)=>
        {
            row=table.insertRow(-1);
            
            c1=row.insertCell(-1);
            c2=row.insertCell(-1);
            c3=row.insertCell(-1);
            
            c1.innerHTML=repo.owner.login
            c2.innerHTML=repo.name;
            c3.innerHTML=repo.description;
        })
    }
    var div=document.getElementById("table");
    div.append(table);
    request.send();
}