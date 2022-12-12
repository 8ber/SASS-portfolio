const triggerLink = document.getElementById("letstalk");
triggerLink.addEventListener("click", ShakeIt);
function ShakeIt() {
  var socialLinks = Array.from(
    document.querySelectorAll(".socialNarrow a, .socialWide a")
  );
  for (let i = 0; i < socialLinks.length; i++) {
    socialLinks[i].classList.add("shake");
  }
  setTimeout(async () => {
    for (let i = 0; i < socialLinks.length; i++) {
      socialLinks[i].classList.remove("shake");
    }
  }, 1000);
}
