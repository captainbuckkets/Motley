fetch("json/settings.json")
  .then(response => response.json())
  .then(data => initJSON(data))

function initJSON(data) {

    // Fill Settings
    fillSettings(data.settings)
    // Fill Work Experience
    makeComplexItem(data.workExperience, "workExperience")
    // Fill Education
    makeComplexItem(data.education, "education")
    // Projects
    makeComplexItem(data.projects, "projects")
    // Writings
    makeComplexItem(data.writings, "writings")
    // Skills
    fillSkills(data.skills)
    // Awards and Certificates
    //fillComplex(data.awardsAndCertificates)
    exportJSON()
}

// Generic make item
function makeItem(value, key, parent) {
    // Make a parent div for our input
    item = document.createElement("div")
    item.className = "editorItem"
        // Make a label
        lbl = document.createElement("label")
        // lbl.htmlFor = key 
        lbl.innerHTML = key
        item.appendChild(lbl)
        // Make an input
        inpt = document.createElement("input")
        inpt.className = "editorInput"
        // inpt.id = key
        inpt.value = value
        item.appendChild(inpt)

    // Append everything back to the parent
    parent.appendChild(item)
}

function makeComplexItem(data, section) {
    var prnt = document.getElementById(section)

    // Iterate the first time
    for (let d in data) {
        item = document.createElement("div")
        item.className = "editorSection"
        prnt.appendChild(item)

        for (let z in data[d]) {
            makeItem(data[d][z], z, item)
        }
    }
}

// Fill settings function
function fillSettings(data) {
    // Get the settings parent to pass down later
    var settingsParent = document.getElementById("settings")
    // Iterate
    for (let s in data) {
        makeItem(data[s], s, settingsParent)
    }
}

function fillComplex(data) {
    for (let d in data) {
        makeComplexItem(data[d], d)
    }
}

function fillSkills(data) {
    for (let d in data) {
        makeComplexItem(data[d], d)
    }
}



function exportJSON() {
    var json = "{";

    // SETTINGS
    var settings = document.getElementById("settings")
    var settingsItems = settings.getElementsByClassName("editorItem")

    json += '"settings":{ '

    for (let item of settingsItems) {
        var key = item.getElementsByTagName("label")[0].innerHTML
        var value = item.getElementsByTagName("input")[0].value

        json += '"' + key + '": ' + '"' + value + '",'
    }

    // Remove the last comma from the section
    json = json.replace(/,\s*$/, "");
    // Close the settings
    json += "},"
    
    // Work Experience
    json = getItemsAdvanced("workExperience", json)
    // Education
    json = getItemsAdvanced("education", json)
    // Projects
    json = getItemsAdvanced("projects", json)
    // Writings
    json = getItemsAdvanced("writings", json)

    // Remove the last comma from the section
    json = json.replace(/,\s*$/, "");
    // Close the settings
    // json += "}"

    // Close the JSON
    json += "}"
    document.getElementById("output").innerHTML = json
}

function getItemsAdvanced(location, json) {
    // Get our parent divs
    var prnt = document.getElementById(location)
    var obj = prnt.getElementsByClassName("editorSection")

    json += '"' + location + '":{'

    var counter = 0

    for (let item of obj) {

        json += '"' + counter + '": {'

        sub = item.getElementsByClassName("editorItem")

        for (let item of sub) {
            var key = item.getElementsByTagName("label")[0].innerHTML

            var value = item.getElementsByTagName("input")[0].value

            if (key == "tags") {
                value = value.split(",")
                value = '\"' + value.join('\",\"') + '\"';

                json += '"' + key + '": ' + '[' + value + '],'
            } else {
                json += '"' + key + '": ' + '"' + value + '",'
            }

        }
        json += '},'
        counter = counter + 1
    }

    json += "},"
    console.log(json)
    return json
}