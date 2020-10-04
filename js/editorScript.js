// Empty JSON classes
var workExperienceDefault = { "title":"", "tags":[ "All" ], "image":"", "employer":"", "duration":"", "responsibilities":{ "0":{ "description":"", "tags":[""] } }}
var educationDefault = { "institute":"", "dates":"", "degree":"", "image":"" }
var projectsDefault = { "title":"", "description":"", "tools":"", "tags":["All"], "projectImage":"", "projectLink": ""}
var writingsDefault = { "title":"", "description":"", "link":"", "tags":["All"]}
var skillDefault = { "title":"", "image":"", "tags":["All"]}
var awardCertificateDefault = { "title":"", "employer":"", "description":"", "date":"", "tags":["All"]}

function dragObserver(targetName) {

    // Fing our parent
    var targetDiv = document.getElementById(targetName)

    // Only watch children elements
    let options = {
        childList: true,
    }

    // Create observer
    observer = new MutationObserver(callback)

    // Callback function
    function callback(mutations) {
        for (let mutation of mutations) {
            if (mutation.type === "childList") {
                outputJson()
            }
        }
    }

    // Set the observer
    observer.observe(targetDiv, options)
}

// Get our json
fetch("json/settings.json")
.then(response => response.json())
.then(data => initJSON(data))

function initJSON(data) {
  window.data = data

  var projectsParent = document.getElementById("workOptions")

  document.getElementsByTagName("title")[0].innerText = data.settings.name
    loadResume()
}

function loadResume() {
    var tag = "all"

    // Load the sidebar
    loadSidebar()

    // Load settings
    loadSettings()

    // Load the Related Work card
    loadWorkExperience(tag)
    // Add Work Experience Observer
    dragObserver("workExperience")
    // Add sortable
    Sortable.create(workExperience, {
        handle: '.moveHandle',
        animation: 150,
    });

    // Load the Education card
    loadEducation(tag)
    // Add Education Observer
    dragObserver("education")
    // Add sortable
    Sortable.create(education, {
        handle: '.moveHandle',
        animation: 150,
    });

    // Load the Projects card
    loadProjects(tag)
    // Add Projects Observer
    dragObserver("projects")
    // Add sortable
    Sortable.create(projects, {
        handle: '.moveHandle',
        animation: 150,
    });

    // Load the writings card
    loadWritings(tag)
    // Add Writings Observer
    dragObserver("writings")
    // Add sortable
    Sortable.create(writings, {
        handle: '.moveHandle',
        animation: 150,
    });

    // Load the skills card
    loadSkills(tag)
    // Add Advanced Observer
    dragObserver("advanced")
    Sortable.create(advanced, {
        handle: '.moveHandle',
        animation: 150,
    });
    // Add Competent Observer
    dragObserver("competent")
    Sortable.create(competent, {
        handle: '.moveHandle',
        animation: 150,
    });
    // Add entryLevel Observer
    dragObserver("entryLevel")
    Sortable.create(entryLevel, {
        handle: '.moveHandle',
        animation: 150,
    });
    // Load the awards card
    loadAwardsAndCertificates(tag)
    // Add Settings Observer
    dragObserver("awards")
    // Add Settings Observer
    dragObserver("certificates")
    // Add sortable
    Sortable.create(awards, {
        handle: '.moveHandle',
        animation: 150,
    });
    Sortable.create(certificates, {
        handle: '.moveHandle',
        animation: 150,
    });
    outputJson()
}

function loadSidebar() {
    var daddy = document.createElement("div")
    daddy.className = "sidebarItem"
    document.getElementById("sidebarDiv").appendChild(daddy)
    
    // Create experience
    addExperience = document.createElement("div")
    addExperience.className = "buttonClass menuButton"
    addExperience.innerText = "Add Work Experience"
    daddy.appendChild(addExperience)
    addExperience.addEventListener("click", function() {
        createWorkExperience(workExperienceDefault)
        outputJson()
    })

    // Create education
    addEducation = document.createElement("div")
    addEducation.className = "buttonClass menuButton"
    addEducation.innerText = "Add Education"
    daddy.appendChild(addEducation)
    addEducation.addEventListener("click", createEducation) 

    // Create project
    addProject = document.createElement("div")
    addProject.className = "buttonClass menuButton"
    addProject.innerText = "Add Project"
    daddy.appendChild(addProject)
    addProject.addEventListener("click", function() {
        createProjects(projectsDefault)
        outputJson()   
    })

    // Create Writing
    addWriting = document.createElement("div")
    addWriting.className = "buttonClass menuButton"
    addWriting.innerText = "Add Writing"
    daddy.appendChild(addWriting)
    addWriting.addEventListener("click", function() {
        createWritings(writingsDefault)
        outputJson()
    })

    // Create Advanced skill
    addAdvanced = document.createElement("div")
    addAdvanced.className = "buttonClass menuButton"
    addAdvanced.innerText = "Add Advanced Skill"
    daddy.appendChild(addAdvanced)
    addAdvanced.addEventListener("click", function() {
        createSkill(skillDefault, "advanced")
    })

    // create Competent skill
    addCompetent = document.createElement("div")
    addCompetent.className = "buttonClass menuButton"
    addCompetent.innerText = "Add Competent Skill"
    daddy.appendChild(addCompetent)
    addCompetent.addEventListener("click", function() {
        createSkill(skillDefault, "competent")
    })

    // create entry level skill
    addEntry = document.createElement("div")
    addEntry.className = "buttonClass menuButton"
    addEntry.innerText = "Add Entry-Level Skill"
    daddy.appendChild(addEntry)
    addEntry.addEventListener("click", function() {
        createSkill(skillDefault, "entryLevel")
    })

    // create award
    addAward = document.createElement("div")
    addAward.className = "buttonClass menuButton"
    addAward.innerText = "Add Award"
    daddy.appendChild(addAward)
    addAward.addEventListener("click", function(){
        createAwardOrCertificate(awardCertificateDefault, "awards")
        outputJson()
    })

    // create certificate
    addCertificate = document.createElement("div")
    addCertificate.className = "buttonClass menuButton"
    addCertificate.innerText = "Add Certificate"
    daddy.appendChild(addCertificate)
    addCertificate.addEventListener("click", function(){
        createAwardOrCertificate(awardCertificateDefault, "certificates")
        outputJson()
    })
}

function createEducation() {
        educationDiv = document.createElement("div")
        educationDiv.className = "educationItem"

        // Create handle
        handleDiv = document.createElement("div")
        handleDiv.className = "moveHandle"
        educationDiv.appendChild(handleDiv)

        // Add the draggable image
        handleImg = document.createElement("img")
        handleImg.src = "img/default/drag-icon.png"
        handleDiv.appendChild(handleImg)

        educationImage = document.createElement("img")
        educationImage.className = "educationImage"
        educationDiv.appendChild(educationImage)

        educationItemDiv = document.createElement("div")
        educationItemDiv.className = "educationItemDiv"
        educationDiv.appendChild(educationItemDiv)

        educationTitle = document.createElement("input")
        educationTitle.addEventListener("input", outputJson)
        educationTitle.placeholder = "University Name"
        educationItemDiv.appendChild(educationTitle)

        educationDates = document.createElement("input")
        educationTitle.addEventListener("input", outputJson)
        educationDates.placeholder = "Attendance Dates"
        educationItemDiv.appendChild(educationDates)

        educationDegree = document.createElement("input")
        educationDegree.addEventListener("input", outputJson)
        educationDegree.placeholder = "Degree"
        educationItemDiv.appendChild(educationDegree)

        educationImageSrc = document.createElement("input")
        educationImageSrc.addEventListener("input", outputJson)
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
        outputJson()
}

function loadSettings() {
    // Create parent div
    settingsDiv = document.createElement("div")
    settingsDiv.className = "settingsItem boxBorder"
    
    // Name Label
    namedLabel = document.createElement("label")
    namedLabel.className = "labelClass"
    namedLabel.innerText = "Name"
    settingsDiv.appendChild(namedLabel)

    // Name
    named = document.createElement("input")
    named.addEventListener("input", outputJson)
    named.placeholder = "Name"    
    named.value = data.settings.name
    settingsDiv.appendChild(named)
    
    // Description Label
    descriptionLabel = document.createElement("label")
    descriptionLabel.className = "labelClass"
    descriptionLabel.innerText = "Description"
    settingsDiv.appendChild(descriptionLabel)

    // Description
    description = document.createElement("input")
    description.addEventListener("input", outputJson)
    description.placeholder = "Description"
    description.value = data.settings.description
    settingsDiv.appendChild(description)

    // Profle Image Location Label
    profileImageLabel = document.createElement("label")
    profileImageLabel.className = "labelClass"
    profileImageLabel.innerText = "Profile Image Location"
    settingsDiv.appendChild(profileImageLabel)

    // Profile Image Location
    profileImage = document.createElement("input")
    profileImage.addEventListener("input", outputJson)
    profileImage.placeholder = "Profile Image Location"
    profileImage.value = data.settings.profileImage
    settingsDiv.appendChild(profileImage)

    // Tags Label
    tagsLabel = document.createElement("label")
    tagsLabel.className = "labelClass"
    tagsLabel.innerText = "Menu Tags (Comma seperated)"
    settingsDiv.appendChild(tagsLabel)

    // Tags
    tags = document.createElement("input")
    tags.addEventListener("input", outputJson)
    tags.placeholder = "Menu Tags (Comma seperated)"
    tags.value = data.settings.tags
    settingsDiv.appendChild(tags)

    // Write social media
    for (let s in data.settings.socialMedia) {
        // Create Label
        label = document.createElement("label")
        label.className = "labelClass"
        label.innerText = s + " url"
        settingsDiv.appendChild(label)

        // Create input
        item = document.createElement("input")
        item.addEventListener("input", outputJson)
        item.placeholder = s + " url"
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
        createWorkExperience(data.workExperience[i], tag)
    } else {
        var len = data.workExperience[i].tags.length

        for (var l = 0; l < len; l++) {
            if (data.workExperience[i].tags[l] == tag) {
                createWorkExperience(data.workExperience[i], tag)
            }
        }
    }
  }
}

function createWorkExperience(object, tag) {

    // Create parent div
    workDiv = document.createElement("div")
    workDiv.className = "workExperienceItem boxBorder"

    // Create handle
    handleDiv = document.createElement("div")
    handleDiv.className = "moveHandle"
    workDiv.appendChild(handleDiv)

    // Add the draggable image
    handleImg = document.createElement("img")
    handleImg.src = "img/default/drag-icon.png"
    handleDiv.appendChild(handleImg)

    workImgDiv = document.createElement("div")
    workImgDiv.className = "workImgDiv"
    workDiv.appendChild(workImgDiv)

        // Work Experience Image
        workImg = document.createElement("img")
        workImg.src = object.image
        workImg.className = "workExperienceImage"
        workImgDiv.appendChild(workImg)

    workDescriptionDiv = document.createElement("div")
    workDescriptionDiv.className = "workExperienceDiv"
    workDiv.appendChild(workDescriptionDiv)

    // Title Label
    workTitleLabel = document.createElement("label")
    workTitleLabel.className = "labelClass"
    workTitleLabel.innerText = "Job Title"
    workDescriptionDiv.appendChild(workTitleLabel)

    // Title
    workTitle = document.createElement("input")
    workTitle.addEventListener("input", outputJson)
    workTitle.placeholder = "Job Title"
    workTitle.value = object.title
    workDescriptionDiv.appendChild(workTitle)

    // Employer Label
    workEmployerLabel = document.createElement("label")
    workEmployerLabel.className = "labelClass"
    workEmployerLabel.innerText = "Employer"
    workDescriptionDiv.appendChild(workEmployerLabel)

    // Employer
    workEmployer = document.createElement("input")
    workEmployer.addEventListener("input", outputJson)
    workEmployer.placeholder = "Employer"
    workEmployer.value = object.employer
    workDescriptionDiv.appendChild(workEmployer)

    // Duration Label
    workDurationLabel = document.createElement("label")
    workDurationLabel.className = "labelClass"
    workDurationLabel.innerText = "Job Duration"
    workDescriptionDiv.appendChild(workDurationLabel)

    // Duration
    workDuration = document.createElement("input")
    workDuration.addEventListener("input", outputJson)
    workDuration.placeholder = "Job Duration"
    workDuration.value = object.duration
    workDescriptionDiv.appendChild(workDuration)

    // Employer Image Location Label
    workImgLabel = document.createElement("label")
    workImgLabel.className = "labelClass"
    workImgLabel.innerText = "Employer Image Location"
    workDescriptionDiv.appendChild(workImgLabel)

    // Employer Image Location
    workImgLocation = document.createElement("input")
    workImgLocation.addEventListener("input", outputJson)
    workImgLocation.placeholder = "Employer Image Location"
    workImgLocation.value = object.image
    workDescriptionDiv.appendChild(workImgLocation)

    // Employer Tags Label
    workTagsLabel = document.createElement("label")
    workTagsLabel.className = "labelClass"
    workTagsLabel.innerText = "Employer Tags"
    workDescriptionDiv.appendChild(workTagsLabel)

    // Employer Tags
    workTags = document.createElement("input")
    workTags.addEventListener("input", outputJson)
    workTags.placeholder = "Employer Tags"
    workTags.value = object.tags
    workDescriptionDiv.appendChild(workTags)

    // Responsibility Parent
    responsibilityParent = document.createElement("div")
    responsibilityParent.className = "responsibilityParent"
    workDescriptionDiv.appendChild(responsibilityParent)

    for (let r in object.responsibilities) {
        // Create Responsibility Parent
        responsibilitiesDiv = document.createElement("div")
        responsibilitiesDiv.className = "responsibilityDiv"
        responsibilityParent.appendChild(responsibilitiesDiv)

        // Responsibility Label
        workResponsibilityLabel = document.createElement("label")
        workResponsibilityLabel.className = "labelClass"
        workResponsibilityLabel.innerText = "Responsibility"
        responsibilitiesDiv.appendChild(workResponsibilityLabel)

        // Responsibility
        workResponsibility = document.createElement("input")
        workResponsibility.addEventListener("input", outputJson)
        workResponsibility.placeholder = "Responsibility"
        workResponsibility.value = object.responsibilities[r].description
        responsibilitiesDiv.appendChild(workResponsibility)

        // Tags
        workResponsibilityTagsLabel = document.createElement("label")
        workResponsibilityTagsLabel.className = "labelClass"
        workResponsibilityTagsLabel.innerText = "Responsibility Tags"
        responsibilitiesDiv.appendChild(workResponsibilityTagsLabel)

        workResponsibilityTags = document.createElement("input")
        workResponsibilityTags.addEventListener("input", outputJson)
        workResponsibilityTags.placeholder = "Responsibility Tags"
        workResponsibilityTags.value = object.responsibilities[r].tags
        responsibilitiesDiv.appendChild(workResponsibilityTags)

        // Remove Responsibility Button
        removeButton = document.createElement("div")
        removeButton.className = "buttonClass removeButton"
        removeButton.innerText = "Remove Responsibility"
        responsibilitiesDiv.appendChild(removeButton)
        removeButton.addEventListener("click", removeResponsibility)
  }

    // Add buttons
    buttons = document.createElement("div")
    buttons.className = "sectionButtons"
    workDescriptionDiv.appendChild(buttons)

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

  document.getElementById("workExperience").appendChild(workDiv)
}

// Mandatory redundancy because otheerwise we lose the "this"
function removeExperience() {
    outputJson()
    this.closest(".workExperienceItem").parentNode.removeChild(this.closest(".workExperienceItem"))
}

function removeResponsibility() {
    outputJson()
    this.closest(".responsibilityDiv").parentNode.removeChild(this.closest(".responsibilityDiv"))
}

function removeProject() {
    outputJson()
    this.closest(".projectsItem").parentNode.removeChild(this.closest(".projectsItem"))
}

function removeWriting() {
    outputJson()
    this.closest(".writingsItem").parentNode.removeChild(this.closest(".writingsItem"))
}

function removeSkill() {
    outputJson()
    this.closest(".skillItem").parentNode.removeChild(this.closest(".skillItem"))
}

function removeAward() {
    outputJson()
    this.closest(".awrdCertDiv").parentNode.removeChild(this.closest(".awrdCertDiv"))
}

function addResponsibility() {
    outputJson()
    console.log("addingResponsibility". this)
    var responsibilitiesParent = this.closest(".workExperienceDiv").getElementsByClassName("responsibilityParent")[0]
    
    // Parent div
    responsibilitiesDiv = document.createElement("div")
    responsibilitiesDiv.className = "responsibilityDiv"
    responsibilitiesParent.appendChild(responsibilitiesDiv)

    // Responsibility Label
    responsibilityLabel = document.createElement("label")
    responsibilityLabel.innerText = "Responsibility"
    responsibilitiesDiv.appendChild(responsibilityLabel)

    // Responsibility
    responsibility = document.createElement("input")
    responsibility.addEventListener("input", outputJson)
    responsibility.className = "responsibility"
    responsibility.placeholder = "Responsibility"
    responsibilitiesDiv.appendChild(responsibility)

    // Responsibility Tags
    tagsLabel = document.createElement("label")
    tagsLabel.innerText = "Responsibility Tags"
    responsibilitiesDiv.appendChild(tagsLabel)

    // Tags
    tags = document.createElement("input")
    tags.addEventListener("input", outputJson)
    tags.className = "tags"
    tags.placeholder = "Responsibility Tags"
    responsibilitiesDiv.appendChild(tags)

    // Remove Responsibility Button
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

        // Create handle
        handleDiv = document.createElement("div")
        handleDiv.className = "moveHandle"
        educationDiv.appendChild(handleDiv)

        // Add the draggable image
        handleImg = document.createElement("img")
        handleImg.src = "img/default/drag-icon.png"
        handleDiv.appendChild(handleImg)

        // Education Image
        educationImage = document.createElement("img")
        educationImage.className = "educationImage"
        educationImage.src = data.education[i].image
        educationDiv.appendChild(educationImage)

        // Education Item Parent
        educationItemDiv = document.createElement("div")
        educationItemDiv.className = "educationItemDiv"
        educationDiv.appendChild(educationItemDiv)

        // Institute Label
        educationTitleLabel = document.createElement("label")
        educationTitleLabel.className = "labelClass"
        educationTitleLabel.innerText = "University Name"
        educationItemDiv.appendChild(educationTitleLabel)

        // Institute Title
        educationTitle = document.createElement("input")
        educationTitle.addEventListener("input", outputJson)
        educationTitle.placeholder = "University Name"
        educationTitle.value = data.education[i].institute
        educationItemDiv.appendChild(educationTitle)

        // Education Dates Label
        educationDatesLabel = document.createElement("label")
        educationDatesLabel.className = "labelClass"
        educationDatesLabel.innerText = "Attendance Dates"
        educationItemDiv.appendChild(educationDatesLabel)

        // Education Dates
        educationDates = document.createElement("input")
        educationDates.addEventListener("input", outputJson)
        educationDates.placeholder = "Attendance Dates"
        educationDates.value = data.education[i].dates
        educationItemDiv.appendChild(educationDates)

        // Education Degree Label
        educationDegreeLabel = document.createElement("label")
        educationDegreeLabel.className = "labelClass"
        educationDegreeLabel.innerText = "Degree"
        educationItemDiv.appendChild(educationDegreeLabel)

        // Education Degree
        educationDegree = document.createElement("input")
        educationDegree.addEventListener("input", outputJson)
        educationDegree.placeholder = "Degree"
        educationDegree.value = data.education[i].degree
        educationItemDiv.appendChild(educationDegree)

        // Education Image Source Label
        educationImageSrcLabel = document.createElement("label")
        educationImageSrcLabel.className = "labelClass"
        educationImageSrcLabel.innerText = "University Image Source"
        educationItemDiv.appendChild(educationImageSrcLabel)

        // Education Image Source
        educationImageSrc = document.createElement("input")
        educationImageSrc.addEventListener("input", outputJson)
        educationImageSrc.placeholder = "University Image Source"
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
    // Create projects parent div
    projectsDiv = document.createElement("div")
    projectsDiv.className = "projectsItem boxBorder"

    // Create handle
    handleDiv = document.createElement("div")
    handleDiv.className = "moveHandle"
    projectsDiv.appendChild(handleDiv)

    // Add the draggable image
    handleImg = document.createElement("img")
    handleImg.src = "img/default/drag-icon.png"
    handleDiv.appendChild(handleImg)

    // Project Image
    projectsImage = document.createElement("img")
    projectsImage.src = object.projectImage
    projectsImage.className = "projectsItemImage"
    projectsDiv.appendChild(projectsImage)

    // Project Description Div
    projectsDescriptionDiv = document.createElement("div")
    projectsDescriptionDiv.className = "projectDescriptionDiv"
    projectsDiv.appendChild(projectsDescriptionDiv)

    // Project Title Label
    projectsTitleLabel = document.createElement("label")
    projectsTitleLabel.className = "labelClass"
    projectsTitleLabel.innerText = "Project Title"
    projectsDescriptionDiv.appendChild(projectsTitleLabel)

    // Project Title
    projectsTitle = document.createElement("input")
    projectsTitle.addEventListener("input", outputJson)
    projectsTitle.value = object.title
    projectsTitle.placeholder = "Project Title"
    projectsDescriptionDiv.appendChild(projectsTitle)

    // Project Description Label
    projectsDescriptionLabel = document.createElement("label")
    projectsDescriptionLabel.className = "labelClass"
    projectsDescriptionLabel.innerText = "Project Description"
    projectsDescriptionDiv.appendChild(projectsDescriptionLabel)

    // Project Description
    projectsDescription = document.createElement("input")
    projectsDescription.addEventListener("input", outputJson)
    projectsDescription.value = object.description
    projectsDescription.placeholder = "Project Description"
    projectsDescriptionDiv.appendChild(projectsDescription)

    // Tools Label
    projectsToolsLabel = document.createElement("label")
    projectsToolsLabel.className = "labelClass"
    projectsToolsLabel.innerText = "Project Tools (e.g. software used)"
    projectsDescriptionDiv.appendChild(projectsToolsLabel)

    // Tools 
    projectsTools = document.createElement("input")
    projectsTools.addEventListener("input", outputJson)
    projectsTools.value = object.tools
    projectsTools.placeholder = "Project Tools (e.g. software used)"
    projectsDescriptionDiv.appendChild(projectsTools)

    // Projects Image Source Label
    projectsImageSourceLabel = document.createElement("label")
    projectsImageSourceLabel.className = "labelClass"
    projectsImageSourceLabel.innerText = "Project Image Source"
    projectsDescriptionDiv.appendChild(projectsImageSourceLabel)

    // Projects Image Source
    projectsImageSource = document.createElement("input")
    projectsImageSource.addEventListener("input", outputJson)
    projectsImageSource.value = object.projectImage
    projectsImageSource.placeholder = "Project Image Source"
    projectsDescriptionDiv.appendChild(projectsImageSource)

    // Project Link Label
    projectsLinkLabel = document.createElement("label")
    projectsLinkLabel.className = "labelClass"
    projectsLinkLabel.innerText = "Project Link"
    projectsDescriptionDiv.appendChild(projectsLinkLabel)

    // Project Link
    projectsLink = document.createElement("input")
    projectsLink.addEventListener("input", outputJson)
    projectsLink.value = object.projectLink
    projectsLink.placeholder = "Project Link"
    projectsDescriptionDiv.appendChild(projectsLink)

    // Project Tags Label
    projectTagsLabel = document.createElement("label")
    projectTagsLabel.className = "labelClass"
    projectTagsLabel.innerText = "Project Tags"
    projectsDescriptionDiv.appendChild(projectTagsLabel)

    // Project Tags
    projectTags = document.createElement("input")
    projectTags.addEventListener("input", outputJson)
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
    // Create parent div
    writingsDiv = document.createElement("div")
    writingsDiv.className = "writingsItem"

    // Create handle
    handleDiv = document.createElement("div")
    handleDiv.className = "moveHandle"
    writingsDiv.appendChild(handleDiv)

    // Add the draggable image
    handleImg = document.createElement("img")
    handleImg.src = "img/default/drag-icon.png"
    handleDiv.appendChild(handleImg)

    // Article Title Label
    writingsTitleLabel = document.createElement("label")
    writingsTitleLabel.className = "labelClass"
    writingsTitleLabel.innerText = "Article Title"
    writingsDiv.appendChild(writingsTitleLabel)

    // Article Title
    writingsTitle = document.createElement("input")
    writingsTitle.addEventListener("input", outputJson)
    writingsTitle.placeholder = "Article Title"
    writingsTitle.value = object.title
    writingsDiv.appendChild(writingsTitle)

    // Article Description Label
    writingDescriptionLabel = document.createElement("label")
    writingDescriptionLabel.className = "labelClass"
    writingDescriptionLabel.innerText = "Article Description"
    writingsDiv.appendChild(writingDescriptionLabel)

    //Article Desription
    writingDescription = document.createElement("input")
    writingDescription.addEventListener("input", outputJson)
    writingDescription.placeholder = "Article Description"
    writingDescription.value = object.description
    writingsDiv.appendChild(writingDescription)

    // Article Tags Label
    writingTagsLabel = document.createElement("label")
    writingTagsLabel.className = "labelClass"
    writingTagsLabel.innerText = "Article Tags"
    writingsDiv.appendChild(writingTagsLabel)

    // Article Tags
    writingTags = document.createElement("input")
    writingTags.addEventListener("input", outputJson)
    writingTags.placeholder = "Article Tags"
    writingTags.value = object.tags
    writingsDiv.appendChild(writingTags)

    // Article Link Label
    writingLinkLabel = document.createElement("label")
    writingLinkLabel.className = "labelClass"
    writingLinkLabel.innerText = "Article Link"
    writingsDiv.appendChild(writingLinkLabel)

    // Article Link
    writingLink = document.createElement("input")
    writingLink.addEventListener("input", outputJson)
    writingLink.placeholder = "Article Link"
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
  
      // Get Competent skills
      for (let i in data.skills.competent) {
          if (tag == "all") {
              createSkill(data.skills.competent[i], "competent")
          } else {
              if (data.skills.competent[i].tags.includes(tag)) {
                  //console.log(skills.competent[i])
                  createSkill(data.skills.competent[i], "competent")
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
    // Create Parent
    skillDiv = document.createElement("div")
    skillDiv.className = "skillItem boxBorder"

    // Create handle
    handleDiv = document.createElement("div")
    handleDiv.className = "moveHandle"
    skillDiv.appendChild(handleDiv)

    // Add the draggable image
    handleImg = document.createElement("img")
    handleImg.src = "img/default/drag-icon.png"
    handleDiv.appendChild(handleImg)

    // Skill Title Label
    skillTitleLabel = document.createElement("label")
    skillTitleLabel.className = "labelClass"
    skillTitleLabel.innerText = "Skill Title"
    skillDiv.appendChild(skillTitleLabel)

    // Skill Title
    skillTitle = document.createElement("input")
    skillTitle.addEventListener("input", outputJson)
    skillTitle.value = object.title
    skillTitle.placeholder = "Skill Title"
    skillDiv.appendChild(skillTitle)

    // Skill Image Location Title
    skillImageLocationLabel = document.createElement("label")
    skillImageLocationLabel.className = "labelClass"
    skillImageLocationLabel.innerText = "Skill Image Location"
    skillDiv.appendChild(skillImageLocationLabel)

    // Skill Image Location
    skillImageLocation = document.createElement("input")
    skillImageLocation.addEventListener("input", outputJson)
    skillImageLocation.value = object.image
    skillImageLocation.placeholder = "Skill Image Location"
    skillDiv.appendChild(skillImageLocation)

    // Skill Tag Label
    skillImageTagLabel = document.createElement("label")
    skillImageTagLabel.className = "labelClass"
    skillImageTagLabel.innerText = "Skill Tags"
    skillDiv.appendChild(skillImageTagLabel)

    // Skill Tag
    skillImageTag = document.createElement("input")
    skillImageTag.addEventListener("input", outputJson)
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

    // Create handle
    handleDiv = document.createElement("div")
    handleDiv.className = "moveHandle"
    acDiv.appendChild(handleDiv)

    // Add the draggable image
    handleImg = document.createElement("img")
    handleImg.src = "img/default/drag-icon.png"
    handleDiv.appendChild(handleImg)

    // Title Label
    acTitleLabel = document.createElement("label")
    acTitleLabel.className = "labelClass"
    acTitleLabel.innerText = "Award/Certificate Title"
    acDiv.appendChild(acTitleLabel)

    // Title
    acTitle = document.createElement("input")
    acTitle.addEventListener("input", outputJson)
    acTitle.value = object.title
    acTitle.placeholder = "Award/Certificate Title"
    acDiv.appendChild(acTitle)

    // Employer Label
    acEmployerLabel = document.createElement("label")
    acEmployerLabel.className = "labelClass"
    acEmployerLabel.innerText = "Award/Certificate Giver"
    acDiv.appendChild(acEmployerLabel)

    // Employer
    acEmployer = document.createElement("input")
    acEmployer.addEventListener("input", outputJson)
    acEmployer.value = object.employer
    acEmployer.placeholder = "Award/Certificate Giver"
    acDiv.appendChild(acEmployer)

    // Date Label
    acDateLabel = document.createElement("label")
    acDateLabel.className = "labelClass"
    acDateLabel.innerText = "Award/Certificate Date"
    acDiv.appendChild(acDateLabel)

    // Date
    acDate = document.createElement("input")
    acDate.addEventListener("input", outputJson)
    acDate.value = object.date
    acDate.placeholder = "Award/Certificate Date"
    acDiv.appendChild(acDate)

    // Description Label
    acDescriptionLabel = document.createElement("label")
    acDescriptionLabel.className = "labelClass"
    acDescriptionLabel.innerText = "Award/Certificate Description"
    acDiv.appendChild(acDescriptionLabel)

    // Description
    acDescription = document.createElement("input")
    acDescription.addEventListener("input", outputJson)
    acDescription.value = object.description
    acDescription.placeholder = "Award/Certificate Description"
    acDiv.appendChild(acDescription)

    // Tags Label
    acTagsLabel = document.createElement("label")
    acTagsLabel.className = "labelClass"
    acTagsLabel.innerText = "Award/Certificate Tags"
    acDiv.appendChild(acTagsLabel)

    // Tags
    acTags = document.createElement("input")
    acTags.addEventListener("input", outputJson)
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
    json += '"workExperience": {'

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
            // Get tags
            var tags = inputs[4].value.split(",")
            tags = '\"' + tags.join('\",\"') + '\"';
            json += '"tags": ' + "[" + tags + "],"
            // Get Responsibilities
            json += '"responsibilities": {'

                let respCounter = 0;
                
                var responsibilities = w.querySelectorAll('[placeholder="Responsibility"]')

                for (let r of responsibilities) {
                    
                    json += '"' + respCounter + '": {'
                    json += '"description":' + '"' + r.value + '",'
                    var tags = r.closest(".responsibilityDiv").querySelector('[placeholder="Responsibility Tags"]').value.split(",")
                    tags = '\"' + tags.join('\",\"') + '\"';
                    json += '"tags": ' + "[" + tags + "]},"
                    // json += '"tags":' + '"' + r.value + '"},'
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
            json += '"projectImage":' + '"' + inputs[3].value + '",'
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
            json += '"link":' + '"' + inputs[3].value + '",'
            var tags = inputs[2].value.split(",")
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

    // competent Skills
    var competent = document.getElementById("competent")
    competentSkills = competent.getElementsByClassName("skillItem")
    var aCounter = 0

        json += '"competent": {'

        for (let a of competentSkills) {
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
    entrySkills = entry.getElementsByClassName("skillItem")
    var eCounter = 0

        json += '"entryLevel": {'

        for (let e of entrySkills) {
            var inputs = e.getElementsByTagName("input")
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
            json += '"' + awCounter + '": {'
            json += '"title":' + '"' + inputs[0].value + '",'
            json += '"employer":' + '"' + inputs[1].value + '",'
            json += '"date":' + '"' + inputs[2].value + '",'
            json += '"description":' + '"' + inputs[3].value + '",'
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
            json += '"' + cCounter + '": {'
            json += '"title":' + '"' + inputs[0].value + '",'
            json += '"employer":' + '"' + inputs[1].value + '",'
            json += '"date":' + '"' + inputs[2].value + '",'
            json += '"description":' + '"' + inputs[3].value + '",'
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
    console.log("json updated")
}