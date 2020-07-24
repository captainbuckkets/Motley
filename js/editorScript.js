
fetch("json/settings.json")
.then(response => response.json())
.then(data => initJSON(data))

function initJSON(data) {
  console.log(data)

  window.data = data

  var projectsParent = document.getElementById("workOptions")

  document.getElementsByTagName("title")[0].innerText = data.settings.name
    loadResume()
}

function loadResume() {
    var tag = "all"

    
    // Hide the Welcome card
    // document.getElementById("welcomeContainer").style.display = "none"
    // Load the sidebar
    loadSidebar()
    // Load settings
    loadSettings()
    // Load the Related Work card
    loadWorkExperience(tag)
    // Load the Education card
    loadEducation(tag)
    // Load the Projects card
    loadProjects(tag)
    // Load the writings card
    loadWritings(tag)
    // Load the awards card
    loadAwardsAndCertificates(tag)
    // Load the skills card
    loadSkills(tag)
}

function loadSidebar() {
    var daddy = document.getElementById("sidebarDiv")
    
    // Create experience
    addExperience = document.createElement("div")
    addExperience.className = "buttonClass addButton"
    addExperience.innerText = "Add Work Experience"
    daddy.appendChild(addExperience)
    addExperience.addEventListener("click", createExperience)    
    // Create education
    addEducation = document.createElement("div")
    addEducation.className = "buttonClass addButton"
    addEducation.innerText = "Add Education"
    daddy.appendChild(addEducation)
    addEducation.addEventListener("click", createEducation) 
    // Create project
    addProject = document.createElement("div")
    addProject.className = "buttonClass addButton"
    addProject.innerText = "Add Project"
    daddy.appendChild(addProject)
    addProject.addEventListener("click", createProject)
    // Create Writing
    addWriting = document.createElement("div")
    addWriting.className = "buttonClass addButton"
    addWriting.innerText = "Add Writing"
    daddy.appendChild(addWriting)
    addWriting.addEventListener("click", createWriting)
    // Create Advanced skill
    addAdvanced = document.createElement("div")
    addAdvanced.className = "buttonClass addButton"
    addAdvanced.innerText = "Add Advanced Skill"
    daddy.appendChild(addAdvanced)
    addAdvanced.addEventListener("click", createAdvanced)
    // create adequate skill
    addAdequate = document.createElement("div")
    addAdequate.className = "buttonClass addButton"
    addAdequate.innerText = "Add Adequate Skill"
    daddy.appendChild(addAdequate)
    addAdequate.addEventListener("click", createAdequate)
    // create entry level skill
    addEntry = document.createElement("div")
    addEntry.className = "buttonClass addButton"
    addEntry.innerText = "Add Entry-Level Skill"
    daddy.appendChild(addEntry)
    addEntry.addEventListener("click", createEntry)
    // create award
    addAward = document.createElement("div")
    addAward.className = "buttonClass addButton"
    addAward.innerText = "Add Award"
    daddy.appendChild(addAward)
    addAward.addEventListener("click", createAward)
    // create certificate
    addCertificate = document.createElement("div")
    addCertificate.className = "buttonClass addButton"
    addCertificate.innerText = "Add Certificate"
    daddy.appendChild(addCertificate)
    addCertificate.addEventListener("click", createCertificate)
    // output JSOON
    jsonButton = document.createElement("div")
    jsonButton.className = "buttonClass addButton"
    jsonButton.innerText = "Output JSON"
    daddy.appendChild(jsonButton)
    jsonButton.addEventListener("click", outputJson)
}

function createExperience() {
    console.log(this)

    wEdiv = document.createElement("div")
    wEdiv.className = "workExperienceItem boxBorder"

    wEImg = document.createElement("img")
    wEImg.className = "workExperienceImage"
    wEdiv.appendChild(wEImg)

    wEDescriptionDiv = document.createElement("div")
    wEDescriptionDiv.className = "workExperienceDiv"
    wEdiv.appendChild(wEDescriptionDiv)

    wETitleLabel = document.createElement("label")
    wETitleLabel.innerText = "Job Title"
    wEDescriptionDiv.appendChild(wETitleLabel)

    wETitle = document.createElement("input")
    wETitle.placeholder = "Job Title"
    wEDescriptionDiv.appendChild(wETitle)

    // Write the employer
    wEEmployerLabel = document.createElement("label")
    wEEmployerLabel.innerText = "Employer"
    wEDescriptionDiv.appendChild(wEEmployerLabel)

    wEEmployer = document.createElement("input")
    wEEmployer.placeholder = "Employer"
    wEDescriptionDiv.appendChild(wEEmployer)

    // Write the start date
    wEDurationLabel = document.createElement("label")
    wEDurationLabel.innerText = "Duration"
    wEDescriptionDiv.appendChild(wEDurationLabel)

    wEDuration = document.createElement("input")
    wEDuration.placeholder = "Job Description"
    wEDescriptionDiv.appendChild(wEDuration)

    // Write the image location field
    wEImgLabel = document.createElement("label")
    wEImgLabel.innerText = "Image Location"
    wEDescriptionDiv.appendChild(wEImgLabel)

    wEImgLocation = document.createElement("input")
    wEImgLocation.placeholder = "Employer Image Location"
    wEDescriptionDiv.appendChild(wEImgLocation)

    responsibilityParent = document.createElement("div")
    responsibilityParent.className = "responsibilityParent"
    wEDescriptionDiv.appendChild(responsibilityParent)

    responsibilitiesDiv = document.createElement("div")
    responsibilitiesDiv.className = "responsibilityDiv"
    responsibilityParent.appendChild(responsibilitiesDiv)

    // Write our job description
    wEResponsibilityLabel = document.createElement("label")
    wEResponsibilityLabel.innerText = "Responsibility"
    responsibilitiesDiv.appendChild(wEResponsibilityLabel)

    wEResponsibility = document.createElement("input")
    wEResponsibility.placeholder = "Responsibility"
    responsibilitiesDiv.appendChild(wEResponsibility)

    wETagsLabel = document.createElement("label")
    wETagsLabel.innerText = "Responsibility Tags"
    responsibilitiesDiv.appendChild(wETagsLabel)

    wETags = document.createElement("input")
    wETags.placeholder = "Tags"
    responsibilitiesDiv.appendChild(wETags)

    removeButton = document.createElement("div")
    removeButton.className = "buttonClass removeButton"
    removeButton.innerText = "Remove Responsibility"
    responsibilitiesDiv.appendChild(removeButton)
    removeButton.addEventListener("click", removeResponsibility)

    // Add buttons
    buttons = document.createElement("div")
    buttons.className = "sectionButtons"
    wEDescriptionDiv.appendChild(buttons)

        // Add Experience Button
        addResponsibilityButton = document.createElement("div")
        addResponsibilityButton.className = "buttonClass addButton"
        addResponsibilityButton.innerText = "Add Responsibility"
        buttons.appendChild(addResponsibilityButton)
        addResponsibilityButton.addEventListener("click", addResponsibility)

        // Remove Experience
        removeExperienceButton = document.createElement("div")
        removeExperienceButton.className = "buttonClass removeButton"
        removeExperienceButton.innerText = "Remove Experience"
        buttons.appendChild(removeExperienceButton)
        removeExperienceButton.addEventListener("click", removeExperience)

    document.getElementById("workExperience").appendChild(wEdiv)
}

function createEducation() {
        educationDiv = document.createElement("div")
        educationDiv.className = "educationItem"

        educationImage = document.createElement("img")
        educationImage.className = "educationImage"
        educationDiv.appendChild(educationImage)

        educationItemDiv = document.createElement("div")
        educationItemDiv.className = "educationItemDiv"
        educationDiv.appendChild(educationItemDiv)

        educationTitle = document.createElement("input")
        educationTitle.placeholder = "University Name"
        educationItemDiv.appendChild(educationTitle)

        educationDates = document.createElement("input")
        educationDates.placeholder = "Attendance Dates"
        educationItemDiv.appendChild(educationDates)

        educationDegree = document.createElement("input")
        educationDegree.placeholder = "Degree"
        educationItemDiv.appendChild(educationDegree)

        educationImageSrc = document.createElement("input")
        educationImageSrc.placeholder = "University Image"
        educationItemDiv.appendChild(educationImageSrc)
        
        // Add buttons
        buttons = document.createElement("div")
        buttons.className = "sectionButtons"
        educationItemDiv.appendChild(buttons)

        // Remove Experience
        removeEducationButton = document.createElement("div")
        removeEducationButton.className = "buttonClass removeButton"
        removeEducationButton.innerText = "Remove Education"
        buttons.appendChild(removeEducationButton)
        removeEducationButton.addEventListener("click", removeEducation)

        document.getElementById("education").appendChild(educationDiv)

}

function createProject() {
    projectsDiv = document.createElement("div")
    projectsDiv.className = "projectsItem boxBorder"

    // Write the project image
    projectsImage = document.createElement("img")
    projectsImage.className = "projectsItemImage"
    projectsDiv.appendChild(projectsImage)

    projectsDescriptionDiv = document.createElement("div")
    projectsDescriptionDiv.className = "projectDescriptionDiv"
    projectsDiv.appendChild(projectsDescriptionDiv)

    // Write the project title
    projectsTitle = document.createElement("input")
    projectsTitle.placeholder = "Project Title"
    projectsDescriptionDiv.appendChild(projectsTitle)

    // Write the project description
    projectsDescription = document.createElement("input")
    projectsDescription.placeholder = "Project Description"
    projectsDescriptionDiv.appendChild(projectsDescription)

    // Write what tools were used on the project
    projectsTools = document.createElement("input")
    projectsTools.placeholder = "Project Tools"
    projectsDescriptionDiv.appendChild(projectsTools)

    // Projects Image src

    projectsLink = document.createElement("input")
    projectsLink.placeholder = "Project Link"
    projectsDescriptionDiv.appendChild(projectsLink)

    projectsImageSource = document.createElement("input")
    projectsImageSource.placeholder = "Project Image Source"
    projectsDescriptionDiv.appendChild(projectsImageSource)

    projectTags = document.createElement("input")
    projectTags.placeholder = "Project Tags"
    projectsDescriptionDiv.appendChild(projectTags)

    // Add buttons
    buttons = document.createElement("div")
    buttons.className = "sectionButtons"
    projectsDiv.appendChild(buttons)

    // Remove Experience
    removeProjectButton = document.createElement("div")
    removeProjectButton.className = "buttonClass removeButton"
    removeProjectButton.innerText = "Remove Project"
    buttons.appendChild(removeProjectButton)
    removeProjectButton.addEventListener("click", removeProject)

    document.getElementById("projects").appendChild(projectsDiv)
}

function createWriting() {
    writingsDiv = document.createElement("div")
    writingsDiv.className = "writingsItem"

     // Write the article title
    writingsTitle = document.createElement("input")
    writingsTitle.placeholder = "Writing Title"
    writingsDiv.appendChild(writingsTitle)

    // Write the article description
    writingDescription = document.createElement("input")
    writingDescription.placeholder = "Writing Description"
    writingsDiv.appendChild(writingDescription)

    writingTags = document.createElement("input")
    writingTags.placeholder = "Writing Tags"
    // writingTags.value = writingTags.innerText.split(',').join(', ')
    writingsDiv.appendChild(writingTags)

    writingLink = document.createElement("input")
    writingLink.placeholder = "Link"
    writingsDiv.appendChild(writingLink)

    // Add buttons
    buttons = document.createElement("div")
    buttons.className = "sectionButtons"
    writingsDiv.appendChild(buttons)

    // Remove Experience
    removeWritingButton = document.createElement("div")
    removeWritingButton.className = "buttonClass removeButton"
    removeWritingButton.innerText = "Remove Writing"
    buttons.appendChild(removeWritingButton)
    removeWritingButton.addEventListener("click", removeWriting)

  document.getElementById("writings").appendChild(writingsDiv)
}

function createAdvanced() {
    skillDiv = document.createElement("div")
    skillDiv.className = "skillItem boxBorder"

    // Write the skill title
    skillTitle = document.createElement("input")
    skillTitle.placeholder = "Skill Title"
    skillDiv.appendChild(skillTitle)

    // Write the skill image location
    skillImageLocation = document.createElement("input")
    skillImageLocation.className = "description"
    skillImageLocation.placeholder = "Skill Image Location"
    skillDiv.appendChild(skillImageLocation)

    // Write the skill tag
    skillImageTag = document.createElement("input")
    skillImageTag.className = "description"
    skillImageTag.placeholder = "Skill Tags"
    skillDiv.appendChild(skillImageTag)

    // Add buttons
    buttons = document.createElement("div")
    buttons.className = "sectionButtons"
    skillDiv.appendChild(buttons)

    // Remove Experience
    removeSkillButton = document.createElement("div")
    removeSkillButton.className = "buttonClass removeButton"
    removeSkillButton.innerText = "Remove Skill"
    buttons.appendChild(removeSkillButton)
    removeSkillButton.addEventListener("click", removeSkill)

  document.getElementById("advanced").appendChild(skillDiv)
}

function createAdequate() {
    skillDiv = document.createElement("div")
    skillDiv.className = "skillItem boxBorder"

    // Write the skill title
    skillTitle = document.createElement("input")
    skillTitle.placeholder = "Skill Title"
    skillDiv.appendChild(skillTitle)

    // Write the skill image location
    skillImageLocation = document.createElement("input")
    skillImageLocation.className = "description"
    skillImageLocation.placeholder = "Skill Image Location"
    skillDiv.appendChild(skillImageLocation)

    // Write the skill tag
    skillImageTag = document.createElement("input")
    skillImageTag.className = "description"
    skillImageTag.placeholder = "Skill Tags"
    skillDiv.appendChild(skillImageTag)

    // Add buttons
    buttons = document.createElement("div")
    buttons.className = "sectionButtons"
    skillDiv.appendChild(buttons)

    // Remove Experience
    removeSkillButton = document.createElement("div")
    removeSkillButton.className = "buttonClass removeButton"
    removeSkillButton.innerText = "Remove Skill"
    buttons.appendChild(removeSkillButton)
    removeSkillButton.addEventListener("click", removeSkill)

  document.getElementById("adequate").appendChild(skillDiv)
}

function createEntry() {
    skillDiv = document.createElement("div")
    skillDiv.className = "skillItem boxBorder"

    // Write the skill title
    skillTitle = document.createElement("input")
    skillTitle.placeholder = "Skill Title"
    skillDiv.appendChild(skillTitle)

    // Write the skill image location
    skillImageLocation = document.createElement("input")
    skillImageLocation.placeholder = "Skill Image Location"
    skillDiv.appendChild(skillImageLocation)

    // Write the skill tag
    skillImageTag = document.createElement("input")
    skillImageTag.placeholder = "Skill Tags"
    skillDiv.appendChild(skillImageTag)

    // Add buttons
    buttons = document.createElement("div")
    buttons.className = "sectionButtons"
    skillDiv.appendChild(buttons)

    // Remove Experience
    removeSkillButton = document.createElement("div")
    removeSkillButton.className = "buttonClass removeButton"
    removeSkillButton.innerText = "Remove Skill"
    buttons.appendChild(removeSkillButton)
    removeSkillButton.addEventListener("click", removeSkill)

  document.getElementById("entryLevel").appendChild(skillDiv)
}

function createCertificate() {
    acDiv = document.createElement("div")
    acDiv.className = "awrdCertDiv"

    // Title
    acTitle = document.createElement("input")
    acTitle.placeholder = "Award/Certificate Title"
    acDiv.appendChild(acTitle)

    // Employer
    acEmployer = document.createElement("input")
    acEmployer.placeholder = "Award/Certificate Giver"
    acDiv.appendChild(acEmployer)

    // Date
    acDate = document.createElement("input")
    acDate.placeholder = "Award/Certificate Date"
    acDiv.appendChild(acDate)

    // Description
    acDescription = document.createElement("input")
    acDescription.placeholder = "Award/Certificate Description"
    acDiv.appendChild(acDescription)

        // Add buttons
        buttons = document.createElement("div")
        buttons.className = "sectionButtons"
        acDiv.appendChild(buttons)

        // Remove Experience
        removeAwardButton = document.createElement("div")
        removeAwardButton.className = "buttonClass removeButton"
        removeAwardButton.innerText = "Remove Award/Certificate"
        buttons.appendChild(removeAwardButton)
        removeAwardButton.addEventListener("click", removeAward)

    // Append the div back to the parent
    document.getElementById("certificates").appendChild(acDiv)
}

function createAward() {
    acDiv = document.createElement("div")
    acDiv.className = "awrdCertDiv"

    // Title
    acTitle = document.createElement("input")
    acTitle.placeholder = "Award/Certificate Title"
    acDiv.appendChild(acTitle)

    // Employer
    acEmployer = document.createElement("input")
    acEmployer.placeholder = "Award/Certificate Giver"
    acDiv.appendChild(acEmployer)

    // Date
    acDate = document.createElement("input")
    acDate.placeholder = "Award/Certificate Date"
    acDiv.appendChild(acDate)

    // Description
    acDescription = document.createElement("input")
    acDescription.placeholder = "Award/Certificate Description"
    acDiv.appendChild(acDescription)

    // tags
    acTags = document.createElement("input")
    acTags.placeholder = "Award/Certificate Tags"
    acDiv.appendChild(acTags)

        // Add buttons
        buttons = document.createElement("div")
        buttons.className = "sectionButtons"
        acDiv.appendChild(buttons)

        // Remove Experience
        removeAwardButton = document.createElement("div")
        removeAwardButton.className = "buttonClass removeButton"
        removeAwardButton.innerText = "Remove Award/Certificate"
        buttons.appendChild(removeAwardButton)
        removeAwardButton.addEventListener("click", removeAward)

    // Append the div back to the parent
    document.getElementById("awards").appendChild(acDiv)
}
function loadSettings() {

    // Create parent div
    settingsDiv = document.createElement("div")
    settingsDiv.className = "settingsItem boxBorder"
    
    // Write name
    named = document.createElement("input")
    named.placeholder = "name"    
    named.value = data.settings.name
    settingsDiv.appendChild(named)
    
    // Write description
    description = document.createElement("input")
    description.placeholder = "description"
    description.value = data.settings.description
    settingsDiv.appendChild(description)

    // Write profile image location

    profileImage = document.createElement("input")
    profileImage.placeholder = "profileImage"
    profileImage.value = data.settings.profileImage
    settingsDiv.appendChild(profileImage)

    // Write tags

    tags = document.createElement("input")

    tags.placeholder = "tags"
    tags.value = data.settings.tags
    settingsDiv.appendChild(tags)

    // Write social media
    for (let s in data.settings.socialMedia) {
        item = document.createElement("input")
        item.placeholder = s
        item.value = data.settings.socialMedia[s]
        settingsDiv.appendChild(item)
    }
        

    document.getElementById("settings").appendChild(settingsDiv)
}

// This can be simplified
function loadWorkExperience(tag) {
  document.getElementById("workExperience").style.display = "block"

  for (let i in data.workExperience) {
    if (tag == "all") {
        createWorkExperienceElement(data.workExperience[i], tag)
    } else {
        var len = data.workExperience[i].tags.length

        for (var l = 0; l < len; l++) {
            if (data.workExperience[i].tags[l] == tag) {
                createWorkExperienceElement(data.workExperience[i], tag)
            }
        }
    }
  }
}

function createWorkExperienceElement(object, tag) {
    console.log("object")

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
    wETitleLabel = document.createElement("label")
    wETitleLabel.innerText = "Job Title"
    wEDescriptionDiv.appendChild(wETitleLabel)

    wETitle = document.createElement("input")
    wETitle.placeholder = "Job Title"
    wETitle.value = object.title
    wEDescriptionDiv.appendChild(wETitle)

    // Write the employer
    wEEmployerLabel = document.createElement("label")
    wEEmployerLabel.innerText = "Employer"
    wEDescriptionDiv.appendChild(wEEmployerLabel)

    wEEmployer = document.createElement("input")
    wEEmployer.placeholder = "Employer"
    wEEmployer.value = object.employer
    wEDescriptionDiv.appendChild(wEEmployer)

    // Write the start date
    wEDurationLabel = document.createElement("label")
    wEDurationLabel.innerText = "Duration"
    wEDescriptionDiv.appendChild(wEDurationLabel)

    wEDuration = document.createElement("input")
    wEDuration.placeholder = "Job Description"
    wEDuration.value = object.duration
    wEDescriptionDiv.appendChild(wEDuration)

    // Write the image location field
    wEImgLabel = document.createElement("label")
    wEImgLabel.innerText = "Image Location"
    wEDescriptionDiv.appendChild(wEImgLabel)

    wEImgLocation = document.createElement("input")
    wEImgLocation.placeholder = "Employer Image Location"
    wEImgLocation.value = object.image
    wEDescriptionDiv.appendChild(wEImgLocation)

    responsibilityParent = document.createElement("div")
    responsibilityParent.className = "responsibilityParent"
    wEDescriptionDiv.appendChild(responsibilityParent)

    for (let r in object.responsibilities) {
        responsibilitiesDiv = document.createElement("div")
        responsibilitiesDiv.className = "responsibilityDiv"
        responsibilityParent.appendChild(responsibilitiesDiv)

        // Write our job description
        wEResponsibilityLabel = document.createElement("label")
        wEResponsibilityLabel.innerText = "Responsibility"
        responsibilitiesDiv.appendChild(wEResponsibilityLabel)

        wEResponsibility = document.createElement("input")
        wEResponsibility.placeholder = "Responsibility"
        wEResponsibility.value = object.responsibilities[r].description
        responsibilitiesDiv.appendChild(wEResponsibility)

        wETagsLabel = document.createElement("label")
        wETagsLabel.innerText = "Responsibility Tags"
        responsibilitiesDiv.appendChild(wETagsLabel)

        wETags = document.createElement("input")

        wETags.placeholder = "Tags"
        wETags.value = object.responsibilities[r].tags
        responsibilitiesDiv.appendChild(wETags)

        removeButton = document.createElement("div")
        removeButton.className = "buttonClass removeButton"
        removeButton.innerText = "Remove Responsibility"
        responsibilitiesDiv.appendChild(removeButton)
        removeButton.addEventListener("click", removeResponsibility)
  }

    // Add buttons
    buttons = document.createElement("div")
    buttons.className = "sectionButtons"
    wEDescriptionDiv.appendChild(buttons)

        // Add Experience Button
        addResponsibilityButton = document.createElement("div")
        addResponsibilityButton.className = "buttonClass addButton"
        addResponsibilityButton.innerText = "Add Responsibility"
        buttons.appendChild(addResponsibilityButton)
        addResponsibilityButton.addEventListener("click", addResponsibility)

        // Remove Experience
        removeExperienceButton = document.createElement("div")
        removeExperienceButton.className = "buttonClass removeButton"
        removeExperienceButton.innerText = "Remove Experience"
        buttons.appendChild(removeExperienceButton)
        removeExperienceButton.addEventListener("click", removeExperience)

  document.getElementById("workExperience").appendChild(wEdiv)
}

function removeExperience() {
    this.closest(".workExperienceItem").parentNode.removeChild(this.closest(".workExperienceItem"))
}

function removeResponsibility() {
    this.closest(".responsibilityDiv").parentNode.removeChild(this.closest(".responsibilityDiv"))
}

function removeProject() {
    this.closest(".projectsItem").parentNode.removeChild(this.closest(".projectsItem"))
}

function removeWriting() {
    this.closest(".writingsItem").parentNode.removeChild(this.closest(".writingsItem"))
}

function removeSkill() {
    this.closest(".skillItem").parentNode.removeChild(this.closest(".skillItem"))
}

function removeAward() {
    this.closest(".awrdCertDiv").parentNode.removeChild(this.closest(".awrdCertDiv"))
}

function addResponsibility() {
    console.log("addingResponsibility")
    var responsibilitiesParent = this.closest(".workExperienceDiv").getElementsByClassName("responsibilityParent")[0]
    
    responsibilitiesDiv = document.createElement("div")
    responsibilitiesDiv.className = "responsibilityDiv"
    responsibilitiesParent.appendChild(responsibilitiesDiv)

    // Write our job description
    responsibilityLabel = document.createElement("label")
    responsibilityLabel.innerText = "Responsibility"
    responsibilitiesDiv.appendChild(responsibilityLabel)

    responsibility = document.createElement("input")
    responsibility.className = "responsibility"
    responsibility.placeholder = "Responsibility"
    responsibilitiesDiv.appendChild(responsibility)

    tagsLabel = document.createElement("label")
    tagsLabel.innerText = "Responsibility Tags"
    responsibilitiesDiv.appendChild(tagsLabel)

    tags = document.createElement("input")
    tags.className = "tags"
    tags.placeholder = "Tags"
    responsibilitiesDiv.appendChild(tags)

    removeButton = document.createElement("div")
    removeButton.className = "buttonClass removeButton"
    removeButton.innerText = "Remove Responsibility"
    responsibilitiesDiv.appendChild(removeButton)
    removeButton.addEventListener("click", removeResponsibility)

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

        educationTitle = document.createElement("input")
        educationTitle.placeholder = "University Name"
        educationTitle.value = data.education[i].institute
        educationItemDiv.appendChild(educationTitle)

        educationDates = document.createElement("input")
        educationDates.placeholder = "Attendance Dates"
        educationDates.value = data.education[i].dates
        educationItemDiv.appendChild(educationDates)

        educationDegree = document.createElement("input")
        educationDegree.placeholder = "Degree"
        educationDegree.value = data.education[i].degree
        educationItemDiv.appendChild(educationDegree)

        educationImageSrc = document.createElement("input")
        educationImageSrc.placeholder = "University Image"
        educationImageSrc.value = data.education[i].image
        educationItemDiv.appendChild(educationImageSrc)
        
        // Add buttons
        buttons = document.createElement("div")
        buttons.className = "sectionButtons"
        educationItemDiv.appendChild(buttons)

        // Remove Experience
        removeEducationButton = document.createElement("div")
        removeEducationButton.className = "buttonClass removeButton"
        removeEducationButton.innerText = "Remove Education"
        buttons.appendChild(removeEducationButton)
        removeEducationButton.addEventListener("click", removeEducation)

        document.getElementById("education").appendChild(educationDiv)
  }
}

function removeEducation() {
    this.closest(".educationItem").parentNode.removeChild(this.closest(".educationItem"))
    console.log(this)
}

// This can be simplified maybe
function loadProjects(tag) {
  document.getElementById("projects").style.display = "block"

  for (let i in data.projects) {
    if (tag == "all") {
        createProjects(data.projects[i], tag)
    } else {
        var len = data.projects[i].tags.length

        for (var l = 0; l < len; l++) {
            if (data.projects[i].tags[l] == tag) {
                createProjects(data.projects[i], tag)
            }
        }
    }
  }
}

function createProjects(object, tag) {
    projectsDiv = document.createElement("div")
    projectsDiv.className = "projectsItem boxBorder"

    // Write the project image
    projectsImage = document.createElement("img")
    projectsImage.src = object.projectImage
    projectsImage.className = "projectsItemImage"
    projectsDiv.appendChild(projectsImage)

    projectsDescriptionDiv = document.createElement("div")
    projectsDescriptionDiv.className = "projectDescriptionDiv"
    projectsDiv.appendChild(projectsDescriptionDiv)

    // Write the project title
    projectsTitle = document.createElement("input")
    projectsTitle.value = object.title
    projectsTitle.placeholder = "Project Title"
    projectsDescriptionDiv.appendChild(projectsTitle)

    // Write the project description
    projectsDescription = document.createElement("input")
    projectsDescription.value = object.description
    projectsDescription.placeholder = "Project Description"
    projectsDescriptionDiv.appendChild(projectsDescription)

    // Write what tools were used on the project
    projectsTools = document.createElement("input")
    projectsTools.value = "Utilized: " + object.tools
    projectsTools.placeholder = "Project Tools"
    projectsDescriptionDiv.appendChild(projectsTools)

    // Projects Image src
    projectsImageSource = document.createElement("input")
    projectsImageSource.value = object.projectImage
    projectsImageSource.placeholder = "Project Image Source"
    projectsDescriptionDiv.appendChild(projectsImageSource)

    projectsLink = document.createElement("input")
    projectsLink.value = object.projectLink
    projectsLink.placeholder = "Project Link"
    projectsDescriptionDiv.appendChild(projectsLink)

    projectTags = document.createElement("input")
    projectTags.value = object.tags
    projectTags.placeholder = "Project Tags"
    projectsDescriptionDiv.appendChild(projectTags)

    // Add buttons
    buttons = document.createElement("div")
    buttons.className = "sectionButtons"
    projectsDiv.appendChild(buttons)

    // Remove Experience
    removeProjectButton = document.createElement("div")
    removeProjectButton.className = "buttonClass removeButton"
    removeProjectButton.innerText = "Remove Project"
    buttons.appendChild(removeProjectButton)
    removeProjectButton.addEventListener("click", removeProject)

  document.getElementById("projects").appendChild(projectsDiv)
}

// This can be simplified maybe
function loadWritings(tag) {
  document.getElementById("writings").style.display = "block"

  for (let i in data.writings) {
    if (tag == "all") {
        createWritings(data.writings[i], tag)
    } else {
        var len = data.writings[i].tags.length

        for (var l = 0; l < len; l++) {
            if (data.writings[i].tags[l] == tag) {
                createWritings(data.writings[i], tag)
            }
        }
    }
  }
}

function createWritings(object) {
    writingsDiv = document.createElement("div")
    writingsDiv.className = "writingsItem"

     // Write the article title
    writingsTitle = document.createElement("input")
    writingsTitle.placeholder = "Writing Title"
    writingsTitle.value = object.title
    writingsDiv.appendChild(writingsTitle)

    // Write the article description
    writingDescription = document.createElement("input")
    writingDescription.placeholder = "Writing Description"
    writingDescription.value = object.description
    writingsDiv.appendChild(writingDescription)

    writingTags = document.createElement("input")
    writingTags.placeholder = "Writing Tags"
    writingTags.value = object.tags
    // writingTags.value = writingTags.innerText.split(',').join(', ')
    writingsDiv.appendChild(writingTags)

    writingLink = document.createElement("input")

    writingLink.placeholder = "Link"
    writingLink.value = object.link 
    writingsDiv.appendChild(writingLink)

    // Add buttons
    buttons = document.createElement("div")
    buttons.className = "sectionButtons"
    writingsDiv.appendChild(buttons)

    // Remove Experience
    removeWritingButton = document.createElement("div")
    removeWritingButton.className = "buttonClass removeButton"
    removeWritingButton.innerText = "Remove Writing"
    buttons.appendChild(removeWritingButton)
    removeWritingButton.addEventListener("click", removeWriting)

  document.getElementById("writings").appendChild(writingsDiv)
}

function loadAwardsAndCertificates(tag) {
  document.getElementById("awardsAndCertificates").style.display = "block";

  for (let a in data.awardsAndCertificates.awards) {
        if (tag == "all") {
            createAwardOrCertificate(data.awardsAndCertificates.awards[a], "awards")
        } else {
            if (data.awardsAndCertificates.awards[a].tags.includes(tag)) {
                createAwardOrCertificate(data.awardsAndCertificates.awards[a], "awards")
            }
        }
  }

  for (let c in data.awardsAndCertificates.certificates) {
      if (tag == "all") {
        createAwardOrCertificate(data.awardsAndCertificates.certificates[c], "certificates")
      } else {
        if (data.awardsAndCertificates.certificates[c].tags.includes(tag)) {
            createAwardOrCertificate(data.awardsAndCertificates.certificates[c], "certificates")
        }
      }
  }
}

function createAwardOrCertificate(object, parentDiv) {
  acDiv = document.createElement("div")
  acDiv.className = "awrdCertDiv"

  // Title
  acTitle = document.createElement("input")
  acTitle.value = object.title
  acTitle.placeholder = "Award/Certificate Title"
  acDiv.appendChild(acTitle)

  // Employer
  acEmployer = document.createElement("input")
  acEmployer.value = object.employer
  acEmployer.placeholder = "Award/Certificate Giver"
  acDiv.appendChild(acEmployer)

  // Date
  acDate = document.createElement("input")
  acDate.value = object.date
  acDate.placeholder = "Award/Certificate Date"
  acDiv.appendChild(acDate)

  // Description
  acDescription = document.createElement("input")
  acDescription.value = object.description
  acDescription.placeholder = "Award/Certificate Description"
  acDiv.appendChild(acDescription)

  // tags
  acTags = document.createElement("input")
  acTags.value = object.tags
  acTags.placeholder = "Award/Certificate Tags"
  acDiv.appendChild(acTags)

    // Add buttons
    buttons = document.createElement("div")
    buttons.className = "sectionButtons"
    acDiv.appendChild(buttons)

    // Remove Experience
    removeAwardButton = document.createElement("div")
    removeAwardButton.className = "buttonClass removeButton"
    removeAwardButton.innerText = "Remove Award/Certificate"
    buttons.appendChild(removeAwardButton)
    removeAwardButton.addEventListener("click", removeAward)

  // Append the div back to the parent
  document.getElementById(parentDiv).appendChild(acDiv)

}

function loadSkills(tag) {
  document.getElementById("skills").style.display = "block";

    // Get Advanced skills
    for (let i in data.skills.advanced) {
        if (tag == "all") {
            createSkill(data.skills.advanced[i], "advanced")
        } else {
            if (data.skills.advanced[i].tags.includes(tag)) {
                //console.log(skills.advanced[i])
                createSkill(data.skills.advanced[i], "advanced")
            }
        }
    }

    // Get Adequate skills
    for (let i in data.skills.adequate) {
        if (tag == "all") {
            createSkill(data.skills.adequate[i], "adequate")
        } else {
            if (data.skills.adequate[i].tags.includes(tag)) {
                //console.log(skills.adequate[i])
                createSkill(data.skills.adequate[i], "adequate")
            }
        }
    }

    // Get Entry Level skills
    for (let i in data.skills.entryLevel) {
        if (tag == "all") {
            createSkill(data.skills.entryLevel[i], "entryLevel")
        } else {
            if (data.skills.entryLevel[i].tags.includes(tag)) {
                //console.log(skills.entryLevel[i])
                createSkill(data.skills.entryLevel[i], "entryLevel")
            }
        }
    }
}

function createSkill(object, parentTag) {

    skillDiv = document.createElement("div")
    skillDiv.className = "skillItem boxBorder"

    // Write the skill title
    skillTitle = document.createElement("input")
    skillTitle.value = object.title
    skillTitle.placeholder = "Skill Title"
    skillDiv.appendChild(skillTitle)

    // Write the skill image location
    skillImageLocation = document.createElement("input")
    skillImageLocation.value = object.image
    skillImageLocation.placeholder = "Skill Image Location"
    skillDiv.appendChild(skillImageLocation)

    // Write the skill tag
    skillImageTag = document.createElement("input")
    skillImageTag.value = object.tags
    skillImageTag.placeholder = "Skill Tags"
    skillDiv.appendChild(skillImageTag)

    // Add buttons
    buttons = document.createElement("div")
    buttons.className = "sectionButtons"
    skillDiv.appendChild(buttons)

    // Remove Experience
    removeSkillButton = document.createElement("div")
    removeSkillButton.className = "buttonClass removeButton"
    removeSkillButton.innerText = "Remove Skill"
    buttons.appendChild(removeSkillButton)
    removeSkillButton.addEventListener("click", removeSkill)

  document.getElementById(parentTag).appendChild(skillDiv)

}

function outputJson() {
    var json = "{";

    // Get settings
    json += '"settings": {'

    var settingsInfo = document.getElementsByClassName("settingsItem")[0].getElementsByTagName("input")
    
    // Name
    json += '"name":' + '"' + settingsInfo[0].value + '",'
    // Description
    json += '"description":' + '"' + settingsInfo[1].value + '",'
    // ProfileImage
    json += '"profileImage":' + '"' + settingsInfo[2].value + '",'
    // Tags
    var tags = settingsInfo[3].value.split(",")
    tags = '\"' + tags.join('\",\"') + '\"';
    json += '"tags": ' + "[" + tags + "],"
    // Social Media
    json += '"socialMedia": {'
        // Behance
        json += '"behance":' + '"' + settingsInfo[4].value + '",'
        // Facebook
        json += '"facebook":' + '"' + settingsInfo[5].value + '",'
        // Github
        json += '"github":' + '"' + settingsInfo[6].value + '",'
        // Instagram
        json += '"instagram":' + '"' + settingsInfo[7].value + '",'
        // LinkedIn
        json += '"linkedin":' + '"' + settingsInfo[8].value + '",'
        // Reddit
        json += '"reddit":' + '"' + settingsInfo[9].value + '",'
        // Soundcloud
        json += '"soundcloud":' + '"' + settingsInfo[10].value + '",'
        // Telegram
        json += '"telegram":' + '"' + settingsInfo[11].value + '",'
        // Twitch
        json += '"twitch":' + '"' + settingsInfo[12].value + '",'
        // Twitter
        json += '"twitter":' + '"' + settingsInfo[13].value + '",'
        // YouTube
        json += '"youtube":' + '"' + settingsInfo[14].value + '"}},'

    // Get work experience
    var workExperience = document.getElementsByClassName("workExperienceItem")

    let counter = 0;
    json += '"workExperiencee": {'

    for (let w of workExperience) {
        var inputs = w.getElementsByTagName("input")

        json += '"' + counter + '": {'
            
            // Get title
            json += '"title": "' + inputs[0].value + '",'
            // Get employer
            json += '"employer": "' + inputs[1].value + '",'
            // Get duration
            json += '"duration": "' + inputs[2].value + '",'
            // Get image
            json += '"image": "' + inputs[3].value + '",'
            // Get Responsibilities
            json += '"responsibilities": {'

                let respCounter = 0;
                
                var responsibilities = w.querySelectorAll('[placeholder="Responsibility"]')

                for (let r of responsibilities) {
                    json += '"' + respCounter + '": {'
                    json += '"description":' + '"' + r.value + '",'
                    json += '"tags":' + '"' + r.value + '"},'
                    respCounter = respCounter + 1
                }
                json = json.replace(/,\s*$/, "");
                json += "}},"     
                counter = counter + 1
    }
    // End Work Experience
    json = json.replace(/,\s*$/, "");
    json += "},"

    // Get education
    var education = document.getElementsByClassName("educationItem")
    let edCounter = 0
    json += '"education": {'
    
    for (let e of education) {
        var inputs = e.getElementsByTagName("input")
        json += '"' + edCounter + '": {'
            json += '"institute":' + '"' + inputs[0].value + '",'
            json += '"dates":' + '"' + inputs[1].value + '",'
            json += '"degree":' + '"' + inputs[2].value + '",'
            json += '"image":' + '"' + inputs[3].value + '"'

        json += '},'
        edCounter = edCounter + 1
    }
    // End education
    json = json.replace(/,\s*$/, "");
    json += "},"

    // Get Projects
    var projects = document.getElementsByClassName("projectsItem")
    var projCounter = 0
    json += '"projects": {'

    for (let p of projects) {
        var inputs = p.getElementsByTagName("input")
        json += '"' + projCounter + '": {'
            json += '"title":' + '"' + inputs[0].value + '",'
            json += '"description":' + '"' + inputs[1].value + '",'
            json += '"tools":' + '"' + inputs[2].value + '",'
            json += '"image":' + '"' + inputs[3].value + '",'
            json += '"projectLink":' + '"' + inputs[4].value + '",'
            var tags = inputs[5].value.split(",")
            tags = '\"' + tags.join('\",\"') + '\"';
            json += '"tags": ' + "[" + tags + "]"
        json += '},'
        projCounter = projCounter + 1
    }

    // End Projects
    json = json.replace(/,\s*$/, "");
    json += '},'

    // Get Writings
    var writings = document.getElementsByClassName("writingsItem")
    var writCounter = 0
    json += '"writings": {'

    for (let w of writings) {
        var inputs = w.getElementsByTagName("input")
        json += '"' + writCounter + '": {'
            json += '"title":' + '"' + inputs[0].value + '",'
            json += '"description":' + '"' + inputs[1].value + '",'
            json += '"link":' + '"' + inputs[2].value + '",'
            var tags = inputs[3].value.split(",")
            tags = '\"' + tags.join('\",\"') + '\"';
            json += '"tags": ' + "[" + tags + "]"
        json += '},'
        writCounter = writCounter + 1
    }

    // End Projects
    json = json.replace(/,\s*$/, "");
    json += '},'

    // Get Skills
    json += '"skills": {'

    // Advanced Skills
    var advanced = document.getElementById("advanced")
    advancedSkills = advanced.getElementsByClassName("skillItem")
    var adCounter = 0

        json += '"advanced": {'

        for (let a of advancedSkills) {
            var inputs = a.getElementsByTagName("input")
            console.log(inputs)
            json += '"' + adCounter + '": {'
            json += '"title":' + '"' + inputs[0].value + '",'
            json += '"image":' + '"' + inputs[1].value + '",'
            var tags = inputs[2].value.split(",")
            tags = '\"' + tags.join('\",\"') + '\"';
            json += '"tags": ' + "[" + tags + "]"
            json += '},'
            adCounter = adCounter + 1
        }
        json = json.replace(/,\s*$/, "");
        json += "},"

    // Adequate Skills
    var adequate = document.getElementById("adequate")
    adequateSkills = advanced.getElementsByClassName("skillItem")
    var aCounter = 0

        json += '"adequate": {'

        for (let a of adequateSkills) {
            var inputs = a.getElementsByTagName("input")
            json += '"' + aCounter + '": {'
            json += '"title":' + '"' + inputs[0].value + '",'
            json += '"image":' + '"' + inputs[1].value + '",'
            var tags = inputs[2].value.split(",")
            tags = '\"' + tags.join('\",\"') + '\"';
            json += '"tags": ' + "[" + tags + "]"
            json += '},'
            aCounter = aCounter + 1
        }
        json = json.replace(/,\s*$/, "");
        json += "},"

    // Entry Level Skills
    var entry = document.getElementById("entryLevel")
    entrySkills = advanced.getElementsByClassName("skillItem")
    var eCounter = 0

        json += '"entryLevel": {'

        for (let a of adequateSkills) {
            var inputs = a.getElementsByTagName("input")
            console.log(inputs)
            json += '"' + eCounter + '": {'
            json += '"title":' + '"' + inputs[0].value + '",'
            json += '"image":' + '"' + inputs[1].value + '",'
            var tags = inputs[2].value.split(",")
            tags = '\"' + tags.join('\",\"') + '\"';
            json += '"tags": ' + "[" + tags + "]"
            json += '},'
            eCounter = eCounter + 1
        }
        json = json.replace(/,\s*$/, "");
        json += "}"

    // End Skills
    json = json.replace(/,\s*$/, "");
    json += '},'

    // Awards and Certificates
    json += '"awardsAndCertificates": {'

        // Get awards
        var awardsParent = document.getElementById("awards")
        var awards = awardsParent.getElementsByClassName("awrdCertDiv")

        let awCounter = 0
        json += '"awards": {'
        
        for (let a of awards) {
            var inputs = a.getElementsByTagName("input")
            console.log(inputs)
            json += '"' + awCounter + '": {'
            json += '"title":' + '"' + inputs[0].value + '",'
            json += '"employer":' + '"' + inputs[1].value + '",'
            json += '"description":' + '"' + inputs[2].value + '",'
            json += '"date":' + '"' + inputs[3].value + '",'
            var tags = inputs[4].value.split(",")
            tags = '\"' + tags.join('\",\"') + '\"';
            json += '"tags": ' + "[" + tags + "]"

            json += '},'
            awCounter = awCounter + 1
        }
        // End projects
        json = json.replace(/,\s*$/, "");
        json += "},"

        // Get certificates
        var certParent = document.getElementById("certificates")
        var cert = certParent.getElementsByClassName("awrdCertDiv")

        let cCounter = 0
        json += '"certificates": {'
        
        for (let c of cert) {
            var inputs = c.getElementsByTagName("input")
            console.log(inputs)
            json += '"' + cCounter + '": {'
            json += '"title":' + '"' + inputs[0].value + '",'
            json += '"employer":' + '"' + inputs[1].value + '",'
            json += '"description":' + '"' + inputs[2].value + '",'
            json += '"date":' + '"' + inputs[3].value + '",'
            var tags = inputs[4].value.split(",")
            tags = '\"' + tags.join('\",\"') + '\"';
            json += '"tags": ' + "[" + tags + "]"

            json += '},'
            cCounter = cCounter + 1
        }
        // End certificates
        json = json.replace(/,\s*$/, "");
        json += "},"

    // End Awards and Certificates
    json = json.replace(/,\s*$/, "");
    json += "}"

    // End json
    json += "}"

    document.getElementById("jsonOutput").value = json
    console.log(json)
}