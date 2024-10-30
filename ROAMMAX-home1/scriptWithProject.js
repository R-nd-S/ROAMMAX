function addProjects(Projects) {
    var lenthDic = Object.keys(Projects).length;
    if(lenthDic <= 0) {
        console.log("stop")
        return NaN;
    }else{
        const centerBit = document.getElementById('centerBit');
    if (!centerBit) {
        console.log('Element with ID "centerBit" not found');
        return;
    }

    var distanceFromTop = -16;
    var b = 1;
    for (let i = 0; i < lenthDic; i++) {
        // Create the parent div element
        const projectDiv = document.createElement('div');
        projectDiv.className = `Project${b} Project`;
        projectDiv.style.top= (distanceFromTop+35)+"%";

        // Create the h1 element
        const projectTitle = document.createElement('h1');
        projectTitle.className = `projectTitle`;
        projectTitle.textContent = Projects[i+1][0];

        // Create the p element
        const projectDescription = document.createElement('p');
        projectDescription.className = `projectDescription`;
        projectDescription.textContent = Projects[i+1][1];

        // Create the h5 element
        const projectDate = document.createElement('h5');
        projectDate.className = `projectDate`;
        projectDate.textContent = Projects[i+1][2];

        // Append the h1, p, and h5 elements to the parent div
        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectDescription);
        projectDiv.appendChild(projectDate);

        // Append the parent div to the centerBit element
        centerBit.appendChild(projectDiv);
        if((i+1)%3==0){
            var distanceFromTop = (distanceFromTop + 35);
            console.log(distanceFromTop);
            var b = 0;
        }
        var b = (b + 1);
    };
    for (let i = 0; i < 3; i++) {
        const projectBlank = document.createElement('div');
        projectBlank.className = `blank${(b)}`;
        projectBlank.style.top=(distanceFromTop+35)+"%";
        centerBit.appendChild(projectBlank);
        if(b == 3){
            var distanceFromTop = (distanceFromTop + 35);
            var b = 0;
        }
        var b = (b + 1);  
    }
};
};
function addDraphs(Draphs){
    var lenthDic = Object.keys(Draphs).length;
    if(lenthDic <= 0) {
        console.log("stop")
        return NaN;
    }else{
        const centerBit = document.getElementById('centerBit');
    if (!centerBit) {
        console.log('Element with ID "centerBit" not found');
        return;
    }
};

    var distanceFromTop = 2;
    var b = 1;
    for (let i = 0; i < lenthDic; i++) {

        // Create the parent div element
        const draphDiv = document.createElement('div');
        draphDiv.className = `Draph`;
        draphDiv.style.top= (distanceFromTop+14)+"%";

        // Create the h1 element
        const draphTitle = document.createElement('h1');
        draphTitle.className = `draphTitle`;
        draphTitle.textContent = Draphs[i+1][0];

        // Create the h5 element
        const draphDate = document.createElement('h5');
        draphDate.className = `draphDate`;
        draphDate.textContent = Draphs[i+1][1];

        // Append the h1 and h5 elements to the parent div
        draphDiv.appendChild(draphTitle);
        draphDiv.appendChild(draphDate);

        // Append the parent div to the centerBit element
        centerBit.appendChild(draphDiv);
        var distanceFromTop = (distanceFromTop + 14);
        console.log(distanceFromTop);
        var b = 0;
        var b = (b + 1);
    };
    // Create the parent div element
    const draphBlankDiv = document.createElement('div');
    draphBlankDiv.className = `blank`;
    draphBlankDiv.style.top=(distanceFromTop+14)+"%";
    centerBit.appendChild(draphBlankDiv);
};
window.addEventListener('load', main());
function main() {
    const searchParams =  new URLSearchParams(window.location.search);
    if(searchParams.get('page') == "projects") {
    // implement database requests here
    var response = {1:["ROAMMAX", "fun", "20/20/2020"], 2:["Platformer1.0", "exiting", "21/21/2121"], 3:["APKA", "useful", "22/22/2222"], 4:["Rory", "nice", "--/--/----"], 5:["Sam", "Coat", "__/__/____"], 6:["Greg", "egg", "-_/-_/-_-_"], 7:["Xander", "never there", "_-/_-/_-_-"]};
    addProjects(response);
    };
    if(searchParams.get('page') == "draphs") {
        // implement database requests here
        var response = {1:["ROAMMAX", "20/20/2020"], 2:["Platformer1.0", "21/21/2121"], 3:["APKA", "22/22/2222"], 4:["Rory", "--/--/----"], 5:["Sam", "__/__/____"], 6:["Greg", "-_/-_/-_-_"], 7:["Xander", "_-/_-/_-_-"]};
        addDraphs(response);
    };
};