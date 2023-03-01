$("#navbar").load("navbar.html");

var currentIndex = 0;

$('#maps-carousel').on('slid.bs.carousel', function() {
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
}

const agentRoles = ["duelists", "controllers", "initiators", "sentinels"]
const agents = [
    new Agent("brimstone", "sources/brim.png", {"C - Stim Beacon": "sources/abilities/Brimstone_C.png",
                                                "Q - Incendiary": "sources/abilities/Brimstone_Q.png", 
                                                "E - Sky Smoke": "sources/abilities/Brimstone_E.png", 
                                                "X - Orbital Strike": "sources/abilities/Brimstone_X.png"}),
    new Agent("phoenix", "sources/phoenix.png", {"C - Blaze": "sources/abilities/Phoenix_C.png", 
                                                  "Q - Curveball": "sources/abilities/Phoenix_Q.png", 
                                                  "E - Hot Hands": "sources/abilities/Phoenix_E.png", 
                                                  "X - Run It Back": "sources/abilities/Phoenix_X.png"}),
    new Agent("sage", "sources/sage.png", {"C - Barrier Orb": "sources/abilities/Sage_C.png", 
                                            "Q - Slow Orb": "sources/abilities/Sage_Q.png", 
                                            "E - Healing Orb": "sources/abilities/Sage_E.png", 
                                            "X - Resurrection": "sources/abilities/Sage_X.png"}),
    new Agent("sova", "sources/sova.png", {"C - Owl Drone": "sources/abilities/Sova_C.png", 
                                            "Q - Shock Bolt": "sources/abilities/Sova_Q.png", 
                                            "E - Recon Bolt": "sources/abilities/Sova_E.png", 
                                            "X - Hunter's Fury": "sources/abilities/Sova_X.png"}),
    new Agent("viper", "sources/viper.png", {"C - Snake Bite": "sources/abilities/Viper_C.png", 
                                              "Q - Poison Cloud": "sources/abilities/Viper_Q.png", 
                                              "E - Toxic Screen": "sources/abilities/Viper_E.png", 
                                              "X - Viper's Pit": "sources/abilities/Viper_X.png"}),
    new Agent("cypher", "sources/cypher.png", {"C - Cyber Cage": "sources/abilities/Cypher_C.png", 
                                              "Q - Trapwire": "sources/abilities/Cypher_Q.png", 
                                              "E - Spycam": "sources/abilities/Cypher_E.png", 
                                              "X - Neural Theft": "sources/abilities/Cypher_X.png"}),
    new Agent("reyna", "sources/reyna.png", {"C - Devour": "sources/abilities/Reyna_C.png", 
                                              "Q - Dismiss": "sources/abilities/Reyna_Q.png", 
                                              "E - Leer": "sources/abilities/Reyna_E.png", 
                                              "X - Empress": "sources/abilities/Reyna_X.png"}),
    new Agent("killjoy", "sources/kj.png", {"C - Alermbot": "sources/abilities/KJ_C.png", 
                                              "Q - Nanoswarm": "sources/abilities/KJ_Q.png", 
                                              "E - Turret": "sources/abilities/KJ_E.png", 
                                              "X - Lockdown": "sources/abilities/KJ_X.png"}),
    new Agent("breach", "sources/breach.png", {"C - Aftershock": "sources/abilities/Breach_C.png", 
                                              "Q - Flashpoint": "sources/abilities/Breach_Q.png", 
                                              "E - Fault Line": "sources/abilities/Breach_E.png", 
                                              "X - Rolling Thunder": "sources/abilities/Breach_X.png"}),
    new Agent("omen", "sources/omen.png", {"C - Shrouded Step": "sources/abilities/Omen_C.png", 
                                              "Q - Paranoia": "sources/abilities/Omen_Q.png", 
                                              "E - Dark Cover": "sources/abilities/Omen_E.png", 
                                              "X - From the Shadows": "sources/abilities/Omen_X.png"}),
    new Agent("jett", "sources/jett.png", {"C - Cloudburst": "sources/abilities/Jett_C.png", 
                                              "Q - Updraft": "sources/abilities/Jett_Q.png", 
                                              "E - Tailwind": "sources/abilities/Jett_E.png", 
                                              "X - Blade Storm": "sources/abilities/Jett_X.png"}),
    new Agent("raze", "sources/raze.png", {"C - Boom Bot": "sources/abilities/Raze_C.png", 
                                              "Q - Blast Pack": "sources/abilities/Raze_Q.png", 
                                              "E - Paint Shell": "sources/abilities/Raze_E.png", 
                                              "X - Showstopper": "sources/abilities/Raze_X.png"}),
    new Agent("skye", "sources/skye.png", {"C - Regrowth": "sources/abilities/Skye_C.png", 
                                              "Q - Trailblazer": "sources/abilities/Skye_Q.png", 
                                              "E - Guiding Light": "sources/abilities/Skye_E.png", 
                                              "X - Seekers": "sources/abilities/Skye_X.png"}),
    new Agent("yoru", "sources/yoru.png", {"C - Fakeout": "sources/abilities/Yoru_C.png", 
                                              "Q - Blindside": "sources/abilities/Yoru_Q.png", 
                                              "E - Gatecrash": "sources/abilities/Yoru_E.png", 
                                              "X - Dimensional Drift": "sources/abilities/Yoru_X.png"}),
    new Agent("astra", "sources/astra.png", {"C - Gravity Well": "sources/abilities/Astra_C.png", 
                                              "Q - Nova Pulse": "sources/abilities/Astra_Q.png", 
                                              "E - Nebula": "sources/abilities/Astra_E.png", 
                                              "X - Astral Form / Cosmic Divide": "sources/abilities/Astra_X.png"}),
    new Agent("kayo", "sources/kayo.png", {"C - Frag/ment": "sources/abilities/KO_C.png", 
                                              "Q - Flash/drive": "sources/abilities/KO_Q.png", 
                                              "E - Zero/point": "sources/abilities/KO_E.png", 
                                              "X - Null/CMD": "sources/abilities/KO_X.png"}),
    new Agent("chamber", "sources/chamber.png", {"C - Trademark": "sources/abilities/Chamber_C.png", 
                                              "Q - Headhunter": "sources/abilities/Chamber_Q.png", 
                                              "E - Randezvous": "sources/abilities/Chamber_E.png", 
                                              "X - Tour de Force": "sources/abilities/Chamber_X.png"}),
    new Agent("neon", "sources/neon.png", {"C - Fast Lane": "sources/abilities/Neon_C.png", 
                                              "Q - Relay Bolt": "sources/abilities/Neon_Q.png", 
                                              "E - High Gear": "sources/abilities/Neon_E.png", 
                                              "X - Overdrive": "sources/abilities/Neon_X.png"}),
    new Agent("fade", "sources/fade.png", {"C - Prowler": "sources/abilities/Fade_C.png", 
                                              "Q - Seize": "sources/abilities/Fade_Q.png", 
                                              "E - Haunt": "sources/abilities/Fade_E.png", 
                                              "X - Nightfall": "sources/abilities/Fade_X.png"}),
    new Agent("harbor", "sources/harbor.png", {"C - Cascade": "sources/abilities/Harbor_C.png", 
                                              "Q - Cove": "sources/abilities/Harbor_Q.png", 
                                              "E - High Tide": "sources/abilities/Harbor_E.png", 
                                              "X - Reckoning": "sources/abilities/Harbor_X.png"})
                                              
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

    console.log(role, agentName);
    
    agentRoles.forEach(element => {
        if (!element.startsWith(role)) {
            let arrow = $(`.${element}`).find("i")
            toggleAgentRoles(true, element[0], arrow);
        }
    });

    let agent = agents.find(element => element.name == agentName);
    console.log(agent)
    // console.log(agent, agent.abilities, Object.entries(agent.abilities), Object.entries(agent.abilities)[0], Object.entries(agent.abilities)[0][0]);

    $("#agent-description").html(`<table class="table">
    <thead>
      <tr>
        <th scope="col">Ikon</th>
        <th scope="col">Név</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"><img src="${Object.entries(agent.abilities)[0][1]}" alt="brimc"></th>
        <td>${Object.entries(agent.abilities)[0][0]}</td>
      </tr>
      <tr>
        <th scope="row"><img src="${Object.entries(agent.abilities)[1][1]}" alt="brimq"></th>
        <td>${Object.entries(agent.abilities)[1][0]}</td>
      </tr>
      <tr>
        <th scope="row"><img src="${Object.entries(agent.abilities)[2][1]}" alt="brimq"></th>
        <td>${Object.entries(agent.abilities)[2][0]}</td>
      </tr>
      <tr>
        <th scope="row"><img src="${Object.entries(agent.abilities)[3][1]}" alt="brimq"></th>
        <td>${Object.entries(agent.abilities)[3][0]}</td>
      </tr>
    </tbody>
  </table>`)
});
