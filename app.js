const FIXED_OWNER_KEY = "echoohero@1234";
const TODAY_STR = new Date().toISOString().slice(0, 10);

const DEFAULT_PROBLEMS = [
  {
    id: "cystic-breakouts",
    name: "Cystic Breakouts",
    pic: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&q=80",
    about: "Deep under-skin tender bumps caused by inflammation and blocked follicles.",
    reasons: "Sebum buildup, sweat retention, stress, or heavy creams.",
    remedyMale: "Beard/jawline ഭാഗങ്ങളിൽ ഓയിൽ-ഫ്രീ ക്ലെൻസർ ഉപയോഗിക്കുക; ആഴത്തിലുള്ള മുറിവുകൾ ഞെക്കരുത്.",
    remedyFemale: "ഹോർമോൺ വ്യതിയാനങ്ങൾ / മേക്കപ്പ് എന്നിവയ്ക്കനുസരിച്ച് ജെന്റിൽ ക്ലെൻസർ & നോൺ-കോമഡോജെനിക് മോയ്സ്ചറൈസർ ഉപയോഗിക്കുക.",
    creams: [{ name: "CeraVe Salicylic Acid Cleanser", link: "https://www.amazon.in" }]
  },
  {
    id: "comedonal-congestion",
    name: "Comedonal Congestion",
    pic: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&q=80",
    about: "Tiny closed or open bumps from trapped dead cells and oil.",
    reasons: "Infrequent gentle exfoliation or thick occlusive layers.",
    remedyMale: "ആഴ്ചയിൽ 2-3 തവണ സാലിസിലിക് ആസിഡ് വാഷ് ഉപയോഗിക്കുക.",
    remedyFemale: "കനം കുറഞ്ഞ ജെൽ/ലോഷൻ മോയ്സ്ചറൈസർ ഉപയോഗിച്ച് പോറുകൾ അടയാതെ സൂക്ഷിക്കുക.",
    creams: [{ name: "Minimalist 2% Salicylic Acid", link: "https://www.flipkart.com" }]
  },
  {
    id: "post-inflammatory-marks",
    name: "Post-Inflammatory Marks",
    pic: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&q=80",
    about: "Lingering dark or reddish spots after skin inflammation heals.",
    reasons: "UV exposure on healing skin or picking blemishes.",
    remedyMale: "രാവിലെ SPF 50 സൺസ്ക്രീനും രാത്രി നിയാസിനാമൈഡ് സിറവും പതിവായി ഉപയോഗിക്കുക.",
    remedyFemale: "രാവിലെ SPF 50 സൺസ്ക്രീൻ നിർബന്ധമായും ഇടുക; നിയാസിനാമൈഡ്/വിറ്റാമിൻ സി ചേർക്കുക.",
    creams: [{ name: "Minimalist 5% Niacinamide", link: "https://www.amazon.in" }]
  },
  {
    id: "uv-melasma",
    name: "UV Melasma Patches",
    pic: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&q=80",
    about: "Symmetrical brownish patches triggered by sunlight and hormones.",
    reasons: "Sunlight, heat exposure, or hormonal sensitivity.",
    remedyMale: "വെയിലത്ത് പോകുമ്പോൾ സൺസ്ക്രീൻ റീ-അപ്ലൈ ചെയ്യുക.",
    remedyFemale: "ശക്തമായ സൂര്യപ്രകാശം ഒഴിവാക്കി SPF 50+ സൺസ്ക്രീൻ ദിവസവും ഉപയോഗിക്കുക.",
    creams: [{ name: "Neutrogena Ultra Sheer SPF 50", link: "https://www.flipkart.com" }]
  },
  {
    id: "seborrheic-flaking",
    name: "Seborrheic Flaking",
    pic: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500&q=80",
    about: "Scaly flaking around eyebrows, nose creases, or hairline.",
    reasons: "Yeast overgrowth, weather shifts, or harsh cleansers.",
    remedyMale: "താടിയും മീശയും ഉള്ള ഭാഗം വൃത്തിയായി സൂക്ഷിച്ച് മൈൽഡ് ക്ലെൻസർ ഉപയോഗിക്കുക.",
    remedyFemale: "സെൻസിറ്റീവ് ഭാഗങ്ങളിൽ വീര്യം കുറഞ്ഞ ക്ലെൻസറും ബാരിയർ ക്രീമും ഉപയോഗിക്കുക.",
    creams: [{ name: "Cetaphil Moisturising Cream", link: "https://www.amazon.in" }]
  },
  {
    id: "dehydrated-barrier",
    name: "Dehydrated Barrier",
    pic: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=500&q=80",
    about: "Tight, dull-feeling skin lacking water and protective lipids.",
    reasons: "Low water intake, AC/dry air, or over-washing.",
    remedyMale: "മുഖം കഴുകിയ ഉടൻ മോയ്സ്ചറൈസർ തേക്കുക; ചൂടുവെള്ളം ഒഴിവാക്കുക.",
    remedyFemale: "ഹൈഡ്രേറ്റിംഗ് സെറാമൈഡ് മോയ്സ്ചറൈസർ ഉപയോഗിച്ച് സ്കിൻ ബാരിയർ സംരക്ഷിക്കുക.",
    creams: [{ name: "Cetaphil Moisturising Cream", link: "https://www.amazon.in" }]
  },
  {
    id: "perioral-irritation",
    name: "Perioral Irritation",
    pic: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&q=80",
    about: "Redness or tiny bumps around the mouth and chin.",
    reasons: "Heavy topical products, toothpaste residue, or irritation.",
    remedyMale: "വായ്ക്ക് ചുറ്റും കടുത്ത ആക്റ്റീവുകൾ ഒഴിവാക്കി ലളിതമായ കെയർ നൽകുക.",
    remedyFemale: "ആ ഭാഗത്ത് പുതിയ ക്രീമുകൾ/മേക്കപ്പ് താൽക്കാലികമായി നിർത്തി ശാന്തമാക്കുക.",
    creams: [{ name: "CeraVe Moisturizing Lotion", link: "https://www.amazon.in" }]
  },
  {
    id: "t-zone-shine",
    name: "T-Zone Shine",
    pic: "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?w=500&q=80",
    about: "Excess oil along forehead, nose, and chin.",
    reasons: "Active sebaceous glands in hot and humid weather.",
    remedyMale: "ഓയിൽ-കൺട്രോൾ ജെൽ ക്ലെൻസർ ഉപയോഗിക്കുക.",
    remedyFemale: "മാറ്റ്/ജെൽ മോയ്സ്ചറൈസർ ഉപയോഗിച്ച് എണ്ണമയം നിയന്ത്രിക്കുക.",
    creams: [{ name: "Minimalist 5% Niacinamide", link: "https://www.amazon.in" }]
  }
];

const state = {
  downloaded: localStorage.getItem("ea_v6_dl") === "1",
  signedInOnce: localStorage.getItem("ea_v6_signed_once") === "1",
  loggedOutLocked: localStorage.getItem("ea_v6_logged_out") === "1",
  gender: localStorage.getItem("ea_v6_gender") || "",
  username: localStorage.getItem("ea_v6_user") || "",
  gmailName: localStorage.getItem("ea_v6_gmail") || "",
  avatar: localStorage.getItem("ea_v6_avatar") || "logo.png",
  progress: Number(localStorage.getItem("ea_v6_prog") || "68"),
  lastCheckDate: localStorage.getItem("ea_v6_last_check") || "",
  adText: localStorage.getItem("ea_v6_ad") || "ER Herbal Glow Serum — Dermatologist Tested",
  boxSize: Number(localStorage.getItem("ea_v6_boxsize") || "185"),
  problems: JSON.parse(localStorage.getItem("ea_v6_probs") || "null") || DEFAULT_PROBLEMS,
  users: JSON.parse(localStorage.getItem("ea_v6_users") || "[]"),
  chats: JSON.parse(localStorage.getItem("ea_v6_chats") || "null") || [
    { id: "c-1", title: "Skin Care Routine", messages: [{ sender: "bot", text: "Hi! Ask me about skin care or ISL." }] }
  ],
  activeChatId: localStorage.getItem("ea_v6_act_chat") || "c-1",
  ownerUnlocked: false
};

let pendingOtp = "";
let pendingSignInData = null;

function persist() {
  localStorage.setItem("ea_v6_dl", state.downloaded ? "1" : "0");
  localStorage.setItem("ea_v6_signed_once", state.signedInOnce ? "1" : "0");
  localStorage.setItem("ea_v6_logged_out", state.loggedOutLocked ? "1" : "0");
  localStorage.setItem("ea_v6_gender", state.gender);
  localStorage.setItem("ea_v6_user", state.username);
  localStorage.setItem("ea_v6_gmail", state.gmailName);
  localStorage.setItem("ea_v6_avatar", state.avatar);
  localStorage.setItem("ea_v6_prog", String(state.progress));
  localStorage.setItem("ea_v6_last_check", state.lastCheckDate);
  localStorage.setItem("ea_v6_ad", state.adText);
  localStorage.setItem("ea_v6_boxsize", String(state.boxSize));
  localStorage.setItem("ea_v6_probs", JSON.stringify(state.problems));
  localStorage.setItem("ea_v6_users", JSON.stringify(state.users));
  localStorage.setItem("ea_v6_chats", JSON.stringify(state.chats));
  localStorage.setItem("ea_v6_act_chat", state.activeChatId);
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function speakToEA() {
  if ("speechSynthesis" in window) {
    const u = new SpeechSynthesisUtterance("to the EA");
    u.lang = "en-US";
    window.speechSynthesis.speak(u);
  }
}

function routeAfterLoading() {
  if (state.loggedOutLocked) {
    showScreen("screen-logged-out");
    return;
  }
  if (state.signedInOnce && state.username) {
    showScreen("screen-main");
    renderAll();
  } else {
    showScreen("screen-signin");
  }
}

function runLoadingScreen() {
  showScreen("screen-loading");
  speakToEA();
  const fill = document.getElementById("load-fill");
  const pctEl = document.getElementById("load-pct");
  let pct = 0;
  fill.style.width = "0%";
  pctEl.textContent = "0%";

  const iv = setInterval(() => {
    pct += 10;
    fill.style.width = pct + "%";
    pctEl.textContent = pct + "%";
    if (pct >= 100) {
      clearInterval(iv);
      setTimeout(routeAfterLoading, 200);
    }
  }, 100);
}

document.getElementById("btn-download-gate").onclick = () => {
  state.downloaded = true;
  persist();
  showScreen("screen-desktop-icon");
};

document.getElementById("btn-open-app-icon").onclick = () => {
  runLoadingScreen();
};

// One-time Sign In + Gmail OTP
document.getElementById("btn-send-otp").onclick = () => {
  if (state.signedInOnce) return;
  const u = document.getElementById("si-username").value.trim();
  const gMail = document.getElementById("si-gmail").value.trim();
  const g = document.getElementById("si-gender").value;

  if (!u || !gMail || !g) {
    alert("Enter Username, Gmail account, and Gender.");
    return;
  }

  pendingSignInData = { username: u, gmail: gMail, gender: g };
  pendingOtp = String(Math.floor(100000 + Math.random() * 900000));

  document.getElementById("step-details").classList.add("hidden");
  document.getElementById("step-otp").classList.remove("hidden");
  document.getElementById("otp-info-text").textContent = `OTP sent to ${gMail}`;
  document.getElementById("otp-demo-code").textContent = `Demo OTP: ${pendingOtp}`;
};

document.getElementById("btn-verify-otp").onclick = () => {
  const code = document.getElementById("si-otp-input").value.trim();
  if (!pendingSignInData || code !== pendingOtp) {
    alert("Invalid OTP. Please check and try again.");
    return;
  }

  state.username = pendingSignInData.username;
  state.gmailName = pendingSignInData.gmail;
  state.gender = pendingSignInData.gender;
  state.signedInOnce = true;
  state.loggedOutLocked = false;

  if (!state.users.some(item => item.gmail === state.gmailName && item.username === state.username)) {
    state.users.push({ username: state.username, gmail: state.gmailName, gender: state.gender });
  }

  persist();
  showScreen("screen-main");
  renderAll();
};

// Log Out (No Login option afterward)
document.getElementById("btn-logout").onclick = () => {
  state.loggedOutLocked = true;
  persist();
  showScreen("screen-logged-out");
};

// Profile & Daily Check
function renderProfile() {
  document.documentElement.style.setProperty("--box-min", state.boxSize + "px");
  const gLabel = state.gender === "M" ? "Male" : "Female";
  document.getElementById("profile-name").textContent = state.username;
  document.getElementById("user-sub-info").textContent = `${gLabel} • ${state.gmailName} • Gender Locked`;
  document.getElementById("problems-heading").textContent = `${gLabel} Face Problems`;
  document.getElementById("profile-avatar").src = state.avatar;
  document.getElementById("progress-score").textContent = state.progress + "%";
  document.getElementById("progress-bar-fill").style.width = state.progress + "%";
  document.getElementById("ad-text").textContent = state.adText;

  const noteEl = document.getElementById("daily-checkin-note");
  noteEl.textContent = state.lastCheckDate === TODAY_STR
    ? "Today's skin check completed."
    : "New day check-in ready in Progress.";
}

document.getElementById("profile-photo-input").onchange = (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const r = new FileReader();
  r.onload = () => {
    state.avatar = r.result;
    persist();
    renderProfile();
  };
  r.readAsDataURL(file);
};

document.getElementById("btn-edit-name").onclick = () => {
  const next = prompt("Edit Name:", state.username);
  if (next && next.trim()) {
    state.username = next.trim();
    persist();
    renderProfile();
  }
};

// Problems Grid + Drag & Drop
let draggedId = null;

function renderProblems() {
  const grid = document.getElementById("problems-grid");
  grid.innerHTML = state.problems.map(p => `
    <div class="problem-card" draggable="true" data-id="${p.id}">
      <img src="${p.pic}" alt="${p.name}" onerror="this.src='logo.png'" />
      <div class="p-title">${p.name}</div>
    </div>
  `).join("");

  grid.querySelectorAll(".problem-card").forEach(card => {
    const id = card.dataset.id;

    card.ondragstart = () => { draggedId = id; };
    card.ondragover = (e) => { e.preventDefault(); };
    card.ondrop = (e) => {
      e.preventDefault();
      if (!draggedId || draggedId === id) return;
      const fromIdx = state.problems.findIndex(x => x.id === draggedId);
      const toIdx = state.problems.findIndex(x => x.id === id);
      if (fromIdx > -1 && toIdx > -1) {
        const [moved] = state.problems.splice(fromIdx, 1);
        state.problems.splice(toIdx, 0, moved);
        persist();
        renderProblems();
      }
      draggedId = null;
    };

    card.onclick = () => {
      const item = state.problems.find(x => x.id === id);
      if (!item) return;
      document.getElementById("detail-pic").src = item.pic;
      document.getElementById("detail-name").textContent = item.name;
      document.getElementById("detail-about").textContent = item.about;
      document.getElementById("detail-reasons").textContent = item.reasons;
      document.getElementById("detail-remedy").textContent =
        state.gender === "M" ? (item.remedyMale || item.remedy) : (item.remedyFemale || item.remedy);

      const ul = document.getElementById("detail-creams");
      ul.innerHTML = (item.creams || []).map(c =>
        `<li><span>${c.name}</span> <a href="${c.link}" target="_blank" rel="noopener">Buy Link</a></li>`
      ).join("");

      document.getElementById("modal-detail").classList.remove("hidden");
    };
  });
}

document.getElementById("close-detail").onclick = () => {
  document.getElementById("modal-detail").classList.add("hidden");
};

// Progress & Camera Check
document.getElementById("btn-progress-open").onclick = () => {
  const guidance = state.progress < 50
    ? "Dermatologist consultation is recommended."
    : "Good skin progress! Keep up daily protection.";
  document.getElementById("progress-summary").innerHTML = `
    <p><strong>Current Score:</strong> ${state.progress}%</p>
    <p><strong>Guidance:</strong> ${guidance}</p>
  `;
  document.getElementById("scan-feedback").textContent = "";
  document.getElementById("modal-progress").classList.remove("hidden");
};

document.getElementById("close-progress").onclick = () => {
  stopScanCamera();
  document.getElementById("modal-progress").classList.add("hidden");
};

let scanStream = null;
function stopScanCamera() {
  if (scanStream) {
    scanStream.getTracks().forEach(t => t.stop());
    scanStream = null;
  }
  document.getElementById("scan-video").classList.add("hidden");
  document.getElementById("btn-snap-cam").classList.add("hidden");
}

function completeDailyCheck(source) {
  state.progress = Math.min(99, state.progress + 3);
  state.lastCheckDate = TODAY_STR;
  persist();
  renderProfile();
  document.getElementById("scan-feedback").innerHTML =
    `<strong>${source} (${TODAY_STR})</strong><br/>Updated progress: <strong>${state.progress}%</strong>.`;
}

document.getElementById("scan-upload-input").onchange = (e) => {
  const f = e.target.files[0];
  if (f) completeDailyCheck(`Photo: ${f.name}`);
};

document.getElementById("btn-cam-check").onclick = async () => {
  try {
    scanStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: false });
    const v = document.getElementById("scan-video");
    v.srcObject = scanStream;
    v.classList.remove("hidden");
    document.getElementById("btn-snap-cam").classList.remove("hidden");
  } catch {
    alert("Camera permission denied or unavailable.");
  }
};

document.getElementById("btn-snap-cam").onclick = () => {
  stopScanCamera();
  completeDailyCheck("Camera Check");
};

// EA AI Chat
function autoTitle(txt) {
  if (/isl/i.test(txt)) return "ISL Match & Updates";
  return txt.trim().split(/\s+/).slice(0, 4).join(" ") || "New Chat";
}

function activeChat() {
  return state.chats.find(c => c.id === state.activeChatId) || state.chats[0];
}

function renderAI() {
  const list = document.getElementById("chat-history-list");
  list.innerHTML = state.chats.map(c =>
    `<div class="chat-history-item ${c.id === state.activeChatId ? "active" : ""}" data-id="${c.id}">${c.title}</div>`
  ).join("");

  list.querySelectorAll(".chat-history-item").forEach(el => {
    el.onclick = () => {
      state.activeChatId = el.dataset.id;
      persist();
      renderAI();
    };
  });

  const ch = activeChat();
  document.getElementById("active-chat-title").textContent = ch.title;
  const box = document.getElementById("ai-messages");
  box.innerHTML = ch.messages.map(m => `<div class="bubble ${m.sender}">${m.text}</div>`).join("");
  box.scrollTop = box.scrollHeight;
}

document.getElementById("btn-open-ea-ai").onclick = () => {
  renderAI();
  document.getElementById("modal-ea-ai").classList.remove("hidden");
};

document.getElementById("close-ea-ai").onclick = () => {
  document.getElementById("modal-ea-ai").classList.add("hidden");
};

document.getElementById("btn-new-chat").onclick = () => {
  const n = { id: "c-" + Date.now(), title: "New Chat", messages: [{ sender: "bot", text: "New chat started." }] };
  state.chats.unshift(n);
  state.activeChatId = n.id;
  persist();
  renderAI();
};

document.getElementById("btn-send-ai").onclick = () => {
  const inp = document.getElementById("ai-prompt-input");
  const txt = inp.value.trim();
  if (!txt) return;
  const ch = activeChat();
  if (ch.title === "New Chat") ch.title = autoTitle(txt);
  ch.messages.push({ sender: "user", text: txt });
  const ans = /isl/i.test(txt)
    ? "ISL info: Ask for fixtures, standings, or team highlights."
    : `EA AI guidance for "${txt}": Keep skin clean, moisturized, and protected with SPF.`;
  ch.messages.push({ sender: "bot", text: ans });
  inp.value = "";
  persist();
  renderAI();
};

// Settings & Owner Panel
function renderOwnerUsers() {
  const wrap = document.getElementById("owner-users-list");
  if (!state.users.length) {
    wrap.innerHTML = `<div class="user-row">${state.username || "User"} (${state.gmailName || "-"}) • ${state.gender || "-"}</div>`;
    return;
  }
  wrap.innerHTML = state.users.map(u =>
    `<div class="user-row"><strong>${u.username}</strong> — ${u.gmail} (${u.gender})</div>`
  ).join("");
}

document.getElementById("btn-settings-gear").onclick = () => {
  document.getElementById("set-ad-input").value = state.adText;
  document.getElementById("box-size-range").value = state.boxSize;
  document.getElementById("box-size-val").textContent = state.boxSize + "px";
  document.getElementById("owner-panel-body").classList.toggle("hidden", !state.ownerUnlocked);
  if (state.ownerUnlocked) renderOwnerUsers();
  document.getElementById("modal-settings").classList.remove("hidden");
};

document.getElementById("close-settings").onclick = () => {
  document.getElementById("modal-settings").classList.add("hidden");
};

document.getElementById("btn-unlock-owner").onclick = () => {
  const key = prompt("Enter Owner Secret Key:");
  if (key === FIXED_OWNER_KEY) {
    state.ownerUnlocked = true;
    document.getElementById("owner-panel-body").classList.remove("hidden");
    renderOwnerUsers();
  } else {
    alert("Access Denied: Owner only.");
  }
};

document.getElementById("btn-save-ad").onclick = () => {
  if (!state.ownerUnlocked) return;
  const v = document.getElementById("set-ad-input").value.trim();
  if (!v) return;
  state.adText = v;
  persist();
  renderProfile();
  alert("Ad updated.");
};

document.getElementById("box-size-range").oninput = (e) => {
  if (!state.ownerUnlocked) return;
  state.boxSize = Number(e.target.value);
  document.getElementById("box-size-val").textContent = state.boxSize + "px";
  persist();
  renderProfile();
};

document.getElementById("btn-add-problem").onclick = () => {
  if (!state.ownerUnlocked) return;
  const name = document.getElementById("new-prob-name").value.trim();
  if (!name) return alert("Enter problem name.");
  const pic = document.getElementById("new-prob-pic").value.trim() || "logo.png";
  const about = document.getElementById("new-prob-about").value.trim() || "Skin care guidance.";
  const reasons = document.getElementById("new-prob-reasons").value.trim() || "Daily environmental factors.";
  const remedy = document.getElementById("new-prob-remedy").value.trim() || "Gentle daily care.";

  state.problems.unshift({
    id: name.toLowerCase().replace(/\s+/g, "-") + "-" + Date.now(),
    name,
    pic,
    about,
    reasons,
    remedyMale: remedy,
    remedyFemale: remedy,
    creams: [{ name: "Gentle Barrier Cream", link: "https://www.amazon.in" }]
  });

  persist();
  renderProblems();
  ["new-prob-name", "new-prob-pic", "new-prob-about", "new-prob-reasons", "new-prob-remedy"]
    .forEach(id => (document.getElementById(id).value = ""));
  alert("Box added.");
};

function renderAll() {
  renderProfile();
  renderProblems();
}

if (state.loggedOutLocked) {
  showScreen("screen-logged-out");
} else if (state.downloaded) {
  showScreen("screen-desktop-icon");
} else {
  showScreen("screen-url");
}