
fetch("json/settings.json")
  .then(response => response.json())
  .then(data => initJSON(data))

function initJSON(data) {
    // Set data as a global variable
    window.data = data
    // Set our parent div
    var projectsParent = document.getElementById("workOptions")

    // Set the page title
    document.getElementsByTagName("title")[0].innerText = data.settings.name
    // Set username
    document.getElementById("userName").innerText = data.settings.name
    // Set user description
    document.getElementById("userDescription").innerText = data.settings.description

    // Make our buttons based on the tags
    let counter = 1

    for (let i in data.settings.tags) {
        makeAreaButton(data.settings.tags[i], projectsParent, counter)
        counter = counter + 1
    }
}

// Make buttons for each tag
function makeAreaButton(title, parent, counter) {
    var button = document.createElement("div")
    button.className = "buttonClass buttonColor" + counter
    button.innerText = title
    button.addEventListener("click", loadResume)
    parent.appendChild(button)
}

function loadResume() {
    var tag = this.innerText

    // Hide the Welcome card
    document.getElementById("welcomeContainer").style.display = "none"
    document.getElementById("sidebarDiv").style.display = "block"
    
    // Load the general websity div things
    loadSidebar(tag)
    // Load the Related Work card
    for (w in data.workExperience) {
        if (data.workExperience[w].tags.includes(tag)) {
            loadWorkExperience(tag)
            break
        }
    }
    // Load the Education card
    loadEducation(tag)
    // Load the Projects card
    for (p in data.projects) {
        if (data.projects[p].tags.includes(tag)) {
            loadProjects(tag)
            break
        }
    }
    // Load the writings card
    for (w in data.writings) {
        if (data.writings[p].tags.includes(tag)) {
            loadWritings(tag)
            break
        }
    }
    loadSkills(tag)
    loadAwardsAndCertificates(tag)
    
}

function loadSidebar(tag) {
    var sidebar = document.getElementById("sidebarDiv")

    // User profile image
    userImage = document.createElement("img")
    userImage.src = data.settings.profileImage
    userImage.className = "sidebarImage"
    sidebar.appendChild(userImage)

    // User Name
    userName = document.createElement("p")
    userName.className = "title"
    userName.innerText = data.settings.name
    sidebar.appendChild(userName)

    // User description div
    userSummaryDiv = document.createElement("div")
    userSummaryDiv.className = "descriptionParent"
    sidebar.appendChild(userSummaryDiv)

    // User description
    userSummary = document.createElement("p")
    userSummary.className = "description"
    userSummary.innerText = data.settings.description
    userSummaryDiv.appendChild(userSummary)

    // Page anchors
    // Might use settings to disable these things.  Unsure
    pageNav = document.createElement("div")
    pageNav.className = "pageNav"
    sidebar.appendChild(pageNav)

        workExperienceItem = document.createElement("a")
        workExperienceItem.className = "pageNavItem"
        workExperienceItem.innerText = "Work Experience"
        workExperienceItem.href = "#workExperience"
        pageNav.appendChild(workExperienceItem)

        educationItem = document.createElement("a")
        educationItem.className = "pageNavItem"
        educationItem.innerText = "Education"
        educationItem.href = "#education"
        pageNav.appendChild(educationItem)

        projectsItem = document.createElement("a")
        projectsItem.className = "pageNavItem"
        projectsItem.innerText = "Projects"
        projectsItem.href = "#projects"
        pageNav.appendChild(projectsItem)

        writingsItem = document.createElement("a")
        writingsItem.className = "pageNavItem"
        writingsItem.innerText = "Writings"
        writingsItem.href = "#writings"
        pageNav.appendChild(writingsItem)

        skillsItem = document.createElement("a")
        skillsItem.className = "pageNavItem"
        skillsItem.innerText = "Skills"
        skillsItem.href = "#skills"
        pageNav.appendChild(skillsItem)

    socialMediaDiv = document.createElement("div")
    socialMediaDiv.className = "socialMediaDiv"
    sidebar.appendChild(socialMediaDiv)

    // Social media links
    for (let i in data.settings.socialMedia) {
        if (data.settings.socialMedia[i] != "") {
            socialAnchor = document.createElement("a")
            socialAnchor.className = "socialMediaIcon"
            socialAnchor.href = data.settings.socialMedia[i]
            socialMediaDiv.appendChild(socialAnchor)

                social = document.createElement("img")
                social.src = "img/default/" + i + ".png"
                socialAnchor.appendChild(social)
        }
    }
}

// This can be simplified
function loadWorkExperience(tag) {
    document.getElementById("workExperience").style.display = "block"

    for (let i in data.workExperience) {
        //console.log(data.workExperience[i])

        var len = data.workExperience[i].tags.length

        for (var l = 0; l < len; l++) {
            if (data.workExperience[i].tags[l] == tag) {
                createWorkExperienceElement(data.workExperience[i], tag)
            }
        }
    }
}

function createWorkExperienceElement(object, tag) {

    wEdiv = document.createElement("div")
    wEdiv.className = "workExperienceItem boxBorder"

    wEImg = document.createElement("img")
    wEImg.src = object.image
    wEImg.className = "workExperienceImage"
    wEdiv.appendChild(wEImg)

    wEDescriptionDiv = document.createElement("div")
    wEDescriptionDiv.className = "workExperienceDiv"
    wEdiv.appendChild(wEDescriptionDiv)

    // Write the job title
    wETitle = document.createElement("p")
    wETitle.className = "title"
    wETitle.innerText = object.title
    wEDescriptionDiv.appendChild(wETitle)

    wEEmployer = document.createElement("p")
    wEEmployer.className = "subheading"
    wEEmployer.innerText = object.employer
    wEDescriptionDiv.appendChild(wEEmployer)

    // Write the start date
    wEDuration = document.createElement("h4")
    wEDuration.innerText = object.duration
    wEDescriptionDiv.appendChild(wEDuration)

    for (let r in object.responsibilities) {
        var len = object.responsibilities[r].tags.length
        for (var t = 0; t < len; t++) {
            if (object.responsibilities[r].tags[t] == tag) {
                wEResponsibility = document.createElement("p")
                wEResponsibility.innerText = "• " + object.responsibilities[r].description
                wEDescriptionDiv.appendChild(wEResponsibility)
            }
        }
    }
    document.getElementById("workExperience").appendChild(wEdiv)
}

function loadEducation(tag) {
    document.getElementById("education").style.display = "block"

    for (let i in data.education) {
        //console.log(data.education[i])

        educationDiv = document.createElement("div")
        educationDiv.className = "educationItem"

        educationImage = document.createElement("img")
        educationImage.className = "educationImage"
        educationImage.src = data.education[i].image
        educationDiv.appendChild(educationImage)

        educationItemDiv = document.createElement("div")
        educationItemDiv.className = "educationItemDiv"
        educationDiv.appendChild(educationItemDiv)

        educationTitle = document.createElement("p")
        educationTitle.className = "title"
        educationTitle.innerText = data.education[i].institute
        educationItemDiv.appendChild(educationTitle)

        educationDates = document.createElement("p")
        educationDates.className = "subheading"
        educationDates.innerText = data.education[i].dates
        educationItemDiv.appendChild(educationDates)

        educationDegree = document.createElement("p")
        educationDegree.className = "description"
        educationDegree.innerText = data.education[i].degree
        educationItemDiv.appendChild(educationDegree)

        document.getElementById("education").appendChild(educationDiv)
    }
}

// This can be simplified maybe
function loadProjects(tag) {
    document.getElementById("projects").style.display = "block"

    for (let i in data.projects) {
        var len = data.projects[i].tags.length

        for (var l = 0; l < len; l++) {
            if (data.projects[i].tags[l] == tag) {
                createProjects(data.projects[i], tag)
            }
        }
    }
}

function createProjects(object, tag) {
    projectsDiv = document.createElement("a")
    projectsDiv.className = "projectsItem boxBorder"
    projectsDiv.href = object.projectLink

    // Write the project image
    projectsImage = document.createElement("img")
    projectsImage.src = object.projectImage
    projectsImage.className = "projectsItemImage"
    projectsDiv.appendChild(projectsImage)

    projectsDescriptionDiv = document.createElement("div")
    projectsDescriptionDiv.className = "projectDescriptionDiv"
    projectsDiv.appendChild(projectsDescriptionDiv)

    // Write the project title
    projectsTitle = document.createElement("p")
    projectsTitle.innerText = object.title
    projectsTitle.className = "title"
    projectsDescriptionDiv.appendChild(projectsTitle)

    // Write the project description
    projectsDescription = document.createElement("p")
    projectsDescription.innerText = object.description
    projectsDescriptionDiv.appendChild(projectsDescription)

    // Write what tools were used on the project
    projectsTools = document.createElement("p")
    projectsTools.innerText = "Utilized: " + object.tools
    projectsTools.className = "extraDescription"
    projectsDescriptionDiv.appendChild(projectsTools)

    document.getElementById("projects").appendChild(projectsDiv)
}

// This can be simplified maybe
function loadWritings(tag) {
    document.getElementById("writings").style.display = "block"

    for (let i in data.writings) {

        var len = data.writings[i].tags.length

        for (var l = 0; l < len; l++) {
            if (data.writings[i].tags[l] == tag) {
                createWritings(data.writings[i])
            }
        }
    }
}

function createWritings(object) {
    writingsDiv = document.createElement("a")
    writingsDiv.className = "writingsItem"
    writingsDiv.href = object.link

    // Write the article title
    writingsTitle = document.createElement("p")
    writingsTitle.className = "title"
    writingsTitle.innerText = object.title
    writingsDiv.appendChild(writingsTitle)

    // Write the article description
    writingDescription = document.createElement("p")
    writingDescription.className = "description"
    writingDescription.innerText = object.description
    writingsDiv.appendChild(writingDescription)

    writingTags = document.createElement("p")
    writingTags.className = "extraDescription"
    writingTags.innerText = object.tags
    writingTags.innerText = writingTags.innerText.split(',').join(', ')
    writingsDiv.appendChild(writingTags)

    document.getElementById("writings").appendChild(writingsDiv)
}

function loadAwardsAndCertificates(tag) {

    // Load the certificates card
    for (c in data.awardsAndCertificates.certificates) {
        if (data.awardsAndCertificates.certificates[c].tags.includes(tag)) {
            document.getElementById("awardsAndCertificates").style.display = "block";
            for (let c in data.awardsAndCertificates.certificates) {
                if (data.awardsAndCertificates.certificates[c].tags.includes(tag)) {
                    createAwardOrCertificate(data.awardsAndCertificates.certificates[c], "certificates")
                }
            }
        }
    } 
    // Load the awards card
    for (a in data.awardsAndCertificates.awards) {
        if (data.awardsAndCertificates.awards[a].tags.includes(tag)) {
            document.getElementById("awardsAndCertificates").style.display = "block";
            for (let a in data.awardsAndCertificates.awards) {
                if (data.awardsAndCertificates.awards[a].tags.includes(tag)) {
                    createAwardOrCertificate(data.awardsAndCertificates.awards[a], "awards")
                }
            }
        }
    }   
}

function createAwardOrCertificate(object, parentDiv) {
    acDiv = document.createElement("div")
    acDiv.className = "awrdCertDiv"

    // Title
    acTitle = document.createElement("p")
    acTitle.innerText = object.title
    acTitle.className = "title"
    acDiv.appendChild(acTitle)

    // Employer
    acEmployer = document.createElement("p")
    acEmployer.innerText = object.employer
    acEmployer.className = "subheading"
    acDiv.appendChild(acEmployer)

    // Date
    acDate = document.createElement("p")
    acDate.innerText = object.date
    acDate.className = "extraDescription"
    acDiv.appendChild(acDate)

    // Description
    acDescription = document.createElement("p")
    acDescription.innerText = object.description
    acDescription.className = "description"
    acDiv.appendChild(acDescription)

    // Append the div back to the parent
    document.getElementById(parentDiv).appendChild(acDiv)

}

function loadSkills(tag) {

    for (let a in data.skills.advanced) {
      if (data.skills.advanced[a].tags.includes(tag)) {
        document.getElementById("skills").style.display = "block";
        document.getElementById("advanced").style.display = "block"
        createSkill(data.skills.advanced[a], "advanced")
      }
    }
    for (let c in data.skills.competent) {
      if (data.skills.competent[c].tags.includes(tag)) {
        document.getElementById("skills").style.display = "block";
        document.getElementById("competent").style.display = "block"
        createSkill(data.skills.competent[c], "competent")
      }
    }
    for (let e in data.skills.entryLevel) {
      if (data.skills.entryLevel[e].tags.includes(tag)) {
        document.getElementById("skills").style.display = "block";
        document.getElementById("entryLevel").style.display = "block"
        createSkill(data.skills.entryLevel[e], "entryLevel")
      }
    }
}

function createSkill(object, parentTag) {

    skillDiv = document.createElement("div")
    skillDiv.className = "skillItem boxBorder"

    // Add the skill image
    skillImage = document.createElement("img")
    skillImage.src = object.image
    skillImage.className = "skillImage"
    skillDiv.appendChild(skillImage)

    // Write the skill title
    skillTitle = document.createElement("p")
    skillTitle.innerText = object.title
    skillTitle.className = "skillTitle"
    skillDiv.appendChild(skillTitle)

    document.getElementById(parentTag).appendChild(skillDiv)

}