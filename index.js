$("#navbar").load("navbar.html");

var currentIndex = 0;

$('#maps-carousel').on('slid.bs.carousel', function () {
  currentIndex = $('div.active').index();

  changeSlide();
});

function changeSlide() {
  $("#details div").css("display", "none");
  $(`#details div:nth-child(${currentIndex + 1})`).css("display", "block");
}

changeSlide();

// ------ Agents ----------------------

class Agent {
  constructor(name, image, abilities) {
    this.name = name;
    this.image = image;
    this.abilities = abilities; // {name: image_url}
  }

  get abilityList() {
    return Object.entries(this.abilities);
  }
}

const agentRoles = ["duelists", "controllers", "initiators", "sentinels"]
const agents = [
  new Agent("brimstone", "sources/brim.png", {
    "C - Stim Beacon": ["sources/abilities/Brimstone_C.png", "200"],
    "Q - Incendiary": ["sources/abilities/Brimstone_Q.png", "250"],
    "E - Sky Smoke": ["sources/abilities/Brimstone_E.png", "100"],
    "X - Orbital Strike": ["sources/abilities/Brimstone_X.png", "7"]
  }),
  new Agent("phoenix", "sources/phoenix.png", {
    "C - Blaze": ["sources/abilities/Phoenix_C.png", "150"],
    "Q - Curveball": ["sources/abilities/Phoenix_Q.png", "250"],
    "E - Hot Hands": ["sources/abilities/Phoenix_E.png", "Free"],
    "X - Run It Back": ["sources/abilities/Phoenix_X.png", "6"]
  }),
  new Agent("sage", "sources/sage.png", {
    "C - Barrier Orb": ["sources/abilities/Sage_C.png", "400"],
    "Q - Slow Orb": ["sources/abilities/Sage_Q.png", "200"],
    "E - Healing Orb": ["sources/abilities/Sage_E.png", "Free"],
    "X - Resurrection": ["sources/abilities/Sage_X.png", "8"]
  }),
  new Agent("sova", "sources/sova.png", {
    "C - Owl Drone": ["sources/abilities/Sova_C.png", "400"],
    "Q - Shock Bolt": ["sources/abilities/Sova_Q.png", "150"],
    "E - Recon Bolt": ["sources/abilities/Sova_E.png", "Free"],
    "X - Hunter's Fury": ["sources/abilities/Sova_X.png", "8"]
  }),
  new Agent("viper", "sources/viper.png", {
    "C - Snake Bite": ["sources/abilities/Viper_C.png", "200"],
    "Q - Poison Cloud": ["sources/abilities/Viper_Q.png", "200"],
    "E - Toxic Screen": ["sources/abilities/Viper_E.png", "Free"],
    "X - Viper's Pit": ["sources/abilities/Viper_X.png", "8"]
  }),
  new Agent("cypher", "sources/cypher.png", {
    "C - Cyber Cage": ["sources/abilities/Cypher_C.png", "200"],
    "Q - Trapwire": ["sources/abilities/Cypher_Q.png", "100"],
    "E - Spycam": ["sources/abilities/Cypher_E.png", "Free"],
    "X - Neural Theft": ["sources/abilities/Cypher_X.png", "6"]
  }),
  new Agent("reyna", "sources/reyna.png", {
    "C - Leer": ["sources/abilities/Reyna_C.png", "250"],
    "Q - Dismiss": ["sources/abilities/Reyna_Q.png", "200"],
    "E - Devour": ["sources/abilities/Reyna_E.png", "200"],
    "X - Empress": ["sources/abilities/Reyna_X.png", "6"]
  }),
  new Agent("killjoy", "sources/kj.png", {
    "C - Alermbot": ["sources/abilities/KJ_C.png", "200"],
    "Q - Nanoswarm": ["sources/abilities/KJ_Q.png", "200"],
    "E - Turret": ["sources/abilities/KJ_E.png", "Free"],
    "X - Lockdown": ["sources/abilities/KJ_X.png", "8"]
  }),
  new Agent("breach", "sources/breach.png", {
    "C - Aftershock": ["sources/abilities/Breach_C.png", "200"],
    "Q - Flashpoint": ["sources/abilities/Breach_Q.png", "250"],
    "E - Fault Line": ["sources/abilities/Breach_E.png", "Free"],
    "X - Rolling Thunder": ["sources/abilities/Breach_X.png", "8"]
  }),
  new Agent("omen", "sources/omen.png", {
    "C - Shrouded Step": ["sources/abilities/Omen_C.png", "100"],
    "Q - Paranoia": ["sources/abilities/Omen_Q.png", "250"],
    "E - Dark Cover": ["sources/abilities/Omen_E.png", "150"],
    "X - From the Shadows": ["sources/abilities/Omen_X.png", "7"]
  }),
  new Agent("jett", "sources/jett.png", {
    "C - Cloudburst": ["sources/abilities/Jett_C.png", "200"],
    "Q - Updraft": ["sources/abilities/Jett_Q.png", "150"],
    "E - Tailwind": ["sources/abilities/Jett_E.png", "Free"],
    "X - Blade Storm": ["sources/abilities/Jett_X.png", "7"]
  }),
  new Agent("raze", "sources/raze.png", {
    "C - Boom Bot": ["sources/abilities/Raze_C.png", "300"],
    "Q - Blast Pack": ["sources/abilities/Raze_Q.png", "20"],
    "E - Paint Shell": ["sources/abilities/Raze_E.png", "Free"],
    "X - Showstopper": ["sources/abilities/Raze_X.png", "8"]
  }),
  new Agent("skye", "sources/skye.png", {
    "C - Regrowth": ["sources/abilities/Skye_C.png", "150"],
    "Q - Trailblazer": ["sources/abilities/Skye_Q.png", "300"],
    "E - Guiding Light": ["sources/abilities/Skye_E.png", "250"],
    "X - Seekers": ["sources/abilities/Skye_X.png", "7"]
  }),
  new Agent("yoru", "sources/yoru.png", {
    "C - Fakeout": ["sources/abilities/Yoru_C.png", "100"],
    "Q - Blindside": ["sources/abilities/Yoru_Q.png", "250"],
    "E - Gatecrash": ["sources/abilities/Yoru_E.png", "150"],
    "X - Dimensional Drift": ["sources/abilities/Yoru_X.png", "7"]
  }),
  new Agent("astra", "sources/astra.png", {
    "C - Gravity Well": ["sources/abilities/Astra_C.png", "150"],
    "Q - Nova Pulse": ["sources/abilities/Astra_Q.png", "150"],
    "E - Nebula": ["sources/abilities/Astra_E.png", "150"],
    "X - Astral Form / Cosmic Divide": ["sources/abilities/Astra_X.png", "7"]
  }),
  new Agent("kayo", "sources/kayo.png", {
    "C - Frag/ment": ["sources/abilities/KO_C.png", "200"],
    "Q - Flash/drive": ["sources/abilities/KO_Q.png", "250"],
    "E - Zero/point": ["sources/abilities/KO_E.png", "Free"],
    "X - Null/CMD": ["sources/abilities/KO_X.png", "8"]
  }),
  new Agent("chamber", "sources/chamber.png", {
    "C - Trademark": ["sources/abilities/Chamber_C.png", "200"],
    "Q - Headhunter": ["sources/abilities/Chamber_Q.png", "150"],
    "E - Randezvous": ["sources/abilities/Chamber_E.png", "Free"],
    "X - Tour de Force": ["sources/abilities/Chamber_X.png", "8"]
  }),
  new Agent("neon", "sources/neon.png", {
    "C - Fast Lane": ["sources/abilities/Neon_C.png", "300"],
    "Q - Relay Bolt": ["sources/abilities/Neon_Q.png", "200"],
    "E - High Gear": ["sources/abilities/Neon_E.png", "Free"],
    "X - Overdrive": ["sources/abilities/Neon_X.png", "7"]
  }),
  new Agent("fade", "sources/fade.png", {
    "C - Prowler": ["sources/abilities/Fade_C.png", "250"],
    "Q - Seize": ["sources/abilities/Fade_Q.png", "200"],
    "E - Haunt": ["sources/abilities/Fade_E.png", "Free"],
    "X - Nightfall": ["sources/abilities/Fade_X.png", "8"]
  }),
  new Agent("harbor", "sources/harbor.png", {
    "C - Cascade": ["sources/abilities/Harbor_C.png", "150"],
    "Q - Cove": ["sources/abilities/Harbor_Q.png", "350"],
    "E - High Tide": ["sources/abilities/Harbor_E.png", "Free"],
    "X - Reckoning": ["sources/abilities/Harbor_X.png", "7"]
  })

]

function toggleAgentRoles(open, role, arrow) {
  if (open) {
    arrow.removeClass("open");
    $(`.agents-${role}`).css("display", "none");
  } else {
    arrow.addClass("open");
    $(`.agents-${role}`).css("display", "flex");
  }
}

$(".agent-roles").on("click", function () {
  let role = $(this).attr("class").split(" ").at(-1)[0];
  let arrow = $(this).find("i");
  let isOpen = arrow.attr("class").includes("open");

  toggleAgentRoles(isOpen, role, arrow)
});

$(".card").on("click", function () {
  let role = $(this).attr("class").split(" ").at(-1).at(-1);
  let agentName = $(this).find("img").attr("alt");

  // agentRoles.forEach(element => {
  //   if (!element.startsWith(role)) {
  //     let arrow = $(`.${element}`).find("i")
  //     toggleAgentRoles(true, element[0], arrow);
  //   }
  // });

  let agent = agents.find(element => element.name == agentName);
  // console.log(agent, agent.abilities, Object.entries(agent.abilities), Object.entries(agent.abilities)[0], Object.entries(agent.abilities)[0][0]);
  abilityList = agent.abilityList

  if (agent.name != "astra") {
    $("#agent-description").html(`<table class="table">
      <thead>
        <tr>
          <th scope="col">Ikon</th>
          <th scope="col">Név</th>
          <th scope="col">Ár</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"><img src="${abilityList[0][1][0]}" alt=""></th>
          <td>${abilityList[0][0]}</td>
          <td><img src="sources/abilities/Credits_icon.png" title="Creds"></img>${abilityList[0][1][1]}</td>
        </tr>
        <tr>
          <th scope="row"><img src="${abilityList[1][1][0]}" alt=""></th>
          <td>${abilityList[1][0]}</td>
          <td><img src="sources/abilities/Credits_icon.png" title="Creds"></img>${abilityList[1][1][1]}</td>
        </tr>
        <tr>
          <th scope="row"><img src="${abilityList[2][1][0]}" alt=""></th>
          <td>${abilityList[2][0]}</td>
          <td>${abilityList[2][1][1] === "Free" ? "Free" : '<img src="sources/abilities/Credits_icon.png" title="Creds"></img>' + abilityList[2][1][1]}</td>
        </tr>
        <tr>
          <th scope="row"><img src="${abilityList[3][1][0]}" alt=""></th>
          <td>${abilityList[3][0]}</td>
          <td>${"♦".repeat(abilityList[3][1][1])} (${abilityList[3][1][1]} points)</td>
        </tr>
      </tbody>
    </table>`);
  } else {
    $("#agent-description").html(`<table class="table">
      <thead>
        <tr>
          <th scope="col">Ikon</th>
          <th scope="col">Név</th>
          <th scope="col">Ár</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"><img src="${abilityList[0][1][0]}" alt=""></th>
          <td>${abilityList[0][0]}</td>
          <td>Star (<img src="sources/abilities/Credits_icon.png title="Creds"></img>${abilityList[0][1][1]})</td>
        </tr>
        <tr>
          <th scope="row"><img src="${abilityList[1][1][0]}" alt=""></th>
          <td>${abilityList[1][0]}</td>
          <td>Star (<img src="sources/abilities/Credits_icon.png title="Creds"></img>${abilityList[1][1][1]})</td>
        </tr>
        <tr>
          <th scope="row"><img src="${abilityList[2][1][0]}" alt=""></th>
          <td>${abilityList[2][0]}</td>
          <td>Star (<img src="sources/abilities/Credits_icon.png title="Creds"></img>${abilityList[2][1][1]})</td>
        </tr>
        <tr>
          <th scope="row"><img src="${abilityList[3][1][0]}" alt=""></th>
          <td>${abilityList[3][0]}</td>
          <td>♦♦♦♦♦♦♦ (7 points)</td>
        </tr>
      </tbody>
    </table>`);
  }

  $("html, body").animate({ scrollTop: $(document).height() }, 10);
});
