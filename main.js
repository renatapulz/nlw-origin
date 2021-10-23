const socialMedia = {
  github: 'renatapulz',
  youtube: 'rocketseat',
  facebook: 'rocketseat',
  instagram: 'rocketseat_oficial',
  twitter: 'rocketseat'
}

function changeSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${socialMedia[social]}`
  }
}

changeSocialMedia()

function getInfos() {
  const url = `https://api.github.com/users/${socialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      //userBio.textContent = data.bio
      userAvatar.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getInfos()
