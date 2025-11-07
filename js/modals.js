// Countries list for dropdown
const countriesData = [
  { name: "Afghanistan", code: "+93" },
  { name: "Albania", code: "+355" },
  { name: "Algeria", code: "+213" },
  { name: "Andorra", code: "+376" },
  { name: "Angola", code: "+244" },
  { name: "Argentina", code: "+54" },
  { name: "Armenia", code: "+374" },
  { name: "Australia", code: "+61" },
  { name: "Austria", code: "+43" },
  { name: "Azerbaijan", code: "+994" },
  { name: "Bahrain", code: "+973" },
  { name: "Bangladesh", code: "+880" },
  { name: "Belarus", code: "+375" },
  { name: "Belgium", code: "+32" },
  { name: "Brazil", code: "+55" },
  { name: "Bulgaria", code: "+359" },
  { name: "Cambodia", code: "+855" },
  { name: "Canada", code: "+1" },
  { name: "Chile", code: "+56" },
  { name: "China", code: "+86" },
  { name: "Colombia", code: "+57" },
  { name: "Croatia", code: "+385" },
  { name: "Czech Republic", code: "+420" },
  { name: "Denmark", code: "+45" },
  { name: "Egypt", code: "+20" },
  { name: "Finland", code: "+358" },
  { name: "France", code: "+33" },
  { name: "Germany", code: "+49" },
  { name: "Ghana", code: "+233" },
  { name: "Greece", code: "+30" },
  { name: "Hong Kong", code: "+852" },
  { name: "Hungary", code: "+36" },
  { name: "India", code: "+91" },
  { name: "Indonesia", code: "+62" },
  { name: "Iran", code: "+98" },
  { name: "Iraq", code: "+964" },
  { name: "Ireland", code: "+353" },
  { name: "Israel", code: "+972" },
  { name: "Italy", code: "+39" },
  { name: "Japan", code: "+81" },
  { name: "Jordan", code: "+962" },
  { name: "Kazakhstan", code: "+7" },
  { name: "Kenya", code: "+254" },
  { name: "Kuwait", code: "+965" },
  { name: "Lebanon", code: "+961" },
  { name: "Malaysia", code: "+60" },
  { name: "Mexico", code: "+52" },
  { name: "Morocco", code: "+212" },
  { name: "Netherlands", code: "+31" },
  { name: "New Zealand", code: "+64" },
  { name: "Nigeria", code: "+234" },
  { name: "Norway", code: "+47" },
  { name: "Oman", code: "+968" },
  { name: "Pakistan", code: "+92" },
  { name: "Philippines", code: "+63" },
  { name: "Poland", code: "+48" },
  { name: "Portugal", code: "+351" },
  { name: "Qatar", code: "+974" },
  { name: "Romania", code: "+40" },
  { name: "Russia", code: "+7" },
  { name: "Saudi Arabia", code: "+966" },
  { name: "Singapore", code: "+65" },
  { name: "South Africa", code: "+27" },
  { name: "South Korea", code: "+82" },
  { name: "Spain", code: "+34" },
  { name: "Sri Lanka", code: "+94" },
  { name: "Sweden", code: "+46" },
  { name: "Switzerland", code: "+41" },
  { name: "Taiwan", code: "+886" },
  { name: "Thailand", code: "+66" },
  { name: "Turkey", code: "+90" },
  { name: "Ukraine", code: "+380" },
  { name: "United Arab Emirates", code: "+971" },
  { name: "United Kingdom", code: "+44" },
  { name: "United States", code: "+1" },
  { name: "Vietnam", code: "+84" },
]

countriesData.sort((a, b) => a.name.localeCompare(b.name))

// Modal Functions
function openConsultationModal() {
  const overlay = document.getElementById("consultation-modal-overlay")
  if (overlay) overlay.classList.add("active")
}

function closeConsultationModal() {
  const overlay = document.getElementById("consultation-modal-overlay")
  if (overlay) overlay.classList.remove("active")
}

function openApplyModal() {
  const overlay = document.getElementById("apply-modal-overlay")
  if (overlay) overlay.classList.add("active")
}

function closeApplyModal() {
  const overlay = document.getElementById("apply-modal-overlay")
  if (overlay) overlay.classList.remove("active")
}

// Close modal when clicking outside
document.addEventListener("DOMContentLoaded", () => {
  const consultationOverlay = document.getElementById("consultation-modal-overlay")
  const applyOverlay = document.getElementById("apply-modal-overlay")

  if (consultationOverlay) {
    consultationOverlay.addEventListener("click", function (e) {
      if (e.target === this) closeConsultationModal()
    })
  }

  if (applyOverlay) {
    applyOverlay.addEventListener("click", function (e) {
      if (e.target === this) closeApplyModal()
    })
  }

  // Setup Consultation Modal
  setupConsultationModal()

  // Setup Apply Modal
  setupApplyModal()

  // Attach button click handlers
  const consultationButtons = document.querySelectorAll(".btn-consultation")
  consultationButtons.forEach((btn) => {
    btn.addEventListener("click", openConsultationModal)
  })

  const applyButtons = document.querySelectorAll(".btn-apply")
  applyButtons.forEach((btn) => {
    btn.addEventListener("click", openApplyModal)
  })

  const closeConsultationBtn = document.getElementById("close-consultation-modal")
  if (closeConsultationBtn) {
    closeConsultationBtn.addEventListener("click", closeConsultationModal)
  }

  const closeApplyBtn = document.getElementById("close-apply-modal")
  if (closeApplyBtn) {
    closeApplyBtn.addEventListener("click", closeApplyModal)
  }
})

function setupConsultationModal() {
  const countryCodeInput = document.getElementById("consultation-country-code")
  const countryCodeDropdown = document.getElementById("consultation-country-code-dropdown")

  if (!countryCodeInput || !countryCodeDropdown) return

  function populateCountryDropdown(filter = "") {
    countryCodeDropdown.innerHTML = ""
    const filteredCountries = countriesData.filter(
      (country) => country.name.toLowerCase().includes(filter.toLowerCase()) || country.code.includes(filter),
    )

    filteredCountries.forEach((country) => {
      const option = document.createElement("div")
      option.className = "country-code-option"
      option.textContent = `${country.name} (${country.code})`
      option.addEventListener("click", () => {
        countryCodeInput.value = country.code
        countryCodeDropdown.classList.remove("active")
      })
      countryCodeDropdown.appendChild(option)
    })
  }

  populateCountryDropdown()

  countryCodeInput.addEventListener("focus", () => {
    countryCodeDropdown.classList.add("active")
  })

  countryCodeInput.addEventListener("input", (e) => {
    populateCountryDropdown(e.target.value)
  })

  document.addEventListener("click", (e) => {
    if (!countryCodeInput.contains(e.target) && !countryCodeDropdown.contains(e.target)) {
      countryCodeDropdown.classList.remove("active")
    }
  })

  const form = document.getElementById("consultation-form")
  if (form) {
    form.addEventListener("submit", handleConsultationSubmit)
  }
}

function setupApplyModal() {
  const countryCodeInput = document.getElementById("apply-country-code")
  const countryCodeDropdown = document.getElementById("apply-country-code-dropdown")

  if (!countryCodeInput || !countryCodeDropdown) return

  function populateCountryDropdown(filter = "") {
    countryCodeDropdown.innerHTML = ""
    const filteredCountries = countriesData.filter(
      (country) => country.name.toLowerCase().includes(filter.toLowerCase()) || country.code.includes(filter),
    )

    filteredCountries.forEach((country) => {
      const option = document.createElement("div")
      option.className = "country-code-option"
      option.textContent = `${country.name} (${country.code})`
      option.addEventListener("click", () => {
        countryCodeInput.value = country.code
        countryCodeDropdown.classList.remove("active")
      })
      countryCodeDropdown.appendChild(option)
    })
  }

  populateCountryDropdown()

  countryCodeInput.addEventListener("focus", () => {
    countryCodeDropdown.classList.add("active")
  })

  countryCodeInput.addEventListener("input", (e) => {
    populateCountryDropdown(e.target.value)
  })

  document.addEventListener("click", (e) => {
    if (!countryCodeInput.contains(e.target) && !countryCodeDropdown.contains(e.target)) {
      countryCodeDropdown.classList.remove("active")
    }
  })

  const form = document.getElementById("apply-form")
  if (form) {
    form.addEventListener("submit", handleApplySubmit)
  }
}

function handleConsultationSubmit(e) {
  e.preventDefault()

  const fullName = document.getElementById("consultation-full-name").value
  const email = document.getElementById("consultation-email").value
  const countryCode = document.getElementById("consultation-country-code").value
  const phone = document.getElementById("consultation-phone").value
  const countryResidence = document.getElementById("consultation-country-residence").value
  const nationality = document.getElementById("consultation-nationality").value
  const course = document.getElementById("consultation-course").value
  const studyDestination = document.getElementById("consultation-study-destination").value
  const studyLevel = document.getElementById("consultation-study-level").value
  const studyYear = document.getElementById("consultation-study-year").value
  const intakeMonth = document.getElementById("consultation-intake-month").value

  const message = `Subject: Booking Consultation\n\n*Full name:* ${fullName}\n*Email:* ${email}\n*Mobile Number:* ${countryCode} ${phone}\n*Country of Residence:* ${countryResidence}\n*Nationality:* ${nationality}\n*Desired Course/Program:* ${course}\n*Preferred study destination:* ${studyDestination}\n*Level of study:* ${studyLevel}\n*Preferred study year:* ${studyYear}\n*Preferred intake month:* ${intakeMonth}`

  const encodedMessage = encodeURIComponent(message)
  const whatsappNumber = "918699750645"
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

  window.open(whatsappURL, "_blank")

  closeConsultationModal()
  e.target.reset()
}

function handleApplySubmit(e) {
  e.preventDefault()

  const fullName = document.getElementById("apply-full-name").value
  const email = document.getElementById("apply-email").value
  const countryCode = document.getElementById("apply-country-code").value
  const phone = document.getElementById("apply-phone").value
  const countryResidence = document.getElementById("apply-country-residence").value
  const nationality = document.getElementById("apply-nationality").value
  const course = document.getElementById("apply-course").value
  const studyDestination = document.getElementById("apply-study-destination").value
  const studyLevel = document.getElementById("apply-study-level").value
  const studyYear = document.getElementById("apply-study-year").value
  const intakeMonth = document.getElementById("apply-intake-month").value

  const message = `Subject: Application\n\n*Full name:* ${fullName}\n*Email:* ${email}\n*Mobile Number:* ${countryCode} ${phone}\n*Country of Residence:* ${countryResidence}\n*Nationality:* ${nationality}\n*Desired Course/Program:* ${course}\n*Preferred study destination:* ${studyDestination}\n*Level of study:* ${studyLevel}\n*Preferred study year:* ${studyYear}\n*Preferred intake month:* ${intakeMonth}`

  const encodedMessage = encodeURIComponent(message)
  const whatsappNumber = "918699750645"
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

  window.open(whatsappURL, "_blank")

  closeApplyModal()
  e.target.reset()
}
