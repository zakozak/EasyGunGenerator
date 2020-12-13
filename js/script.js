"use strict";

const btn = document.querySelector(".btn"),
      content = document.querySelector(".content");

let obj = {
    gun: 
    [
        "M4A1", 
        "HK416"
    ],
    barrel: 
    [
        '10.6" barrel for 416A5 and compatible 5.56x45',
        '11" barrel for 416A5 and compatible 5.56x45',
        '14.5" barrel for 416A5 and compatible 5.56x45',
        '16.5" barrel for 416A5 and compatible 5.56x45',
        '20" barrel for 416A5 and compatible 5.56x45'
    ],
    handguar: 
    [
        'HK MRS 14" keymod foregrip for 416A5',
        'HK quadrail handguard for 416-compatible systems',
        'HK extended quadrail handguard for 416-compatible systems',
        'HK quadrail handguard with a flip-up sight for 416-compatible systems',
        'Midwest 9" M-LOK foregrip for 416A5',
        'Midwest 13.5" M-LOK foregrip for 416A5',
        'Strike Industries CRUX 15" M-LOK foregrip for 416A5',
        'Troy Industries 13" M-LOK foregrip for 416A5'
    ],
    tubeStock: 
    [
        "F93 Pro Stock",
        "HK 'Enhanced Tube' buffer tube",
        "UBR GEN2 black stock",
        "UBR GEN2 FDE stock",
        "Troy M7A1 PDW Blk stock",
        "Troy M7A1 PDW FDE stock",
        'Fab Defence GL Shock Stock',
        'Fab Defence GLR-16-S Stock',
        'High Standard M4SS Stock',
        'HK E1 Stock for AR-15 and compatible',
        'HK Slim Line Stock',
        'Izhmash AK-12 regular stock',
        'LMT Sopmod stock',
        'Magpul CTR Carbine stock',
        'Magpul CTR Carbine stock FDE',
        'MOE Carbine stock',
        'MOE Carbine stock FDE',
        'MOE Carbine stock FG',
        'MOE Carbine stock OD',
        'MOE Carbine stock SG',
        'MFT BUS Stock',
        'SI Viper Mod.1 Stock',
        'EMOD Stock'
    ],
    grip: 
    [
        'Colt A2 AR-15 pistol grip',
        'DI ECS FDE pistol grip for AR-15 based systems',
        'Hera Arms HG-15 pistol grip for AR-15 based systems',
        'HK "Battle Grip" pistol grip for AR-15 based systems',
        'HK Battle Grip with Beavertail pistol grip for AR-15 based systems',
        'HK Ergo PSG-1 style pistol grip for AR-15 based systems',
        'HK Grip V.2 pistol grip for AR-15 based systems',
        'Hogue OverMolded Rubber Grip',
        'Hogue OverMolded Rubber Grip FDE',
        'Hogue OverMolded Rubber Grip Ghillie Earth',
        'Hogue OverMolded Rubber Grip Ghillie Green',
        'Hogue OverMolded Rubber Grip OD Green',
        'MIAD Pistol grip for AR-15 based systems',
        'Magpul MOE AR-15 pistol grip',
        'Magpul MOE AR-15 pistol grip (FDE)',
        'Naroh Arms GRAL-S Pistol grip for AR-15-compatible weapons',
        'Stark AR Rifle Grip (black) for AR-15-compatible weapons',
        'Stark AR Rifle Grip (FDE) for AR-15-compatible weapons',
        'Skeletonized AR-15 pistol grip'
    ],
    foregrip: 
    [
        'BCM MOD.3 Tactical grip',
        'ASh-12 Vertical pistol grip',
        'Fortis Shift tactical grip',
        'Hera Arms CQR tactical grip',
        'KAC Vertical pistol grip',
        'Magpul AFG grip black',
        'Magpul AFG grip FDE',
        'Magpul AFG grip FG',
        'Magpul AFG grip OD',
        'Magpul RVG grip black',
        'RTM Pillau Tactical grip',
        'SE-5 Express Grip',
        'SI "Cobra tactical" tactical grip',
        'Tango Down Stubby BGV-MK46K tactical grip',
        'Tango Down Stubby BGV-MK46K tactical grip FDE',
        'Tango Down Stubby BGV-MK46K tactical grip FG',
        'Viking Tactical UVG Tactical grip',
        'Zenit RK-1 Foregrip on B-25U mount',
        'Zenit RK-0 Foregrip',
        'Zenit RK-1 Foregrip',
        'Zenit RK-2 Foregrip',
        'Zenit RK-4 Foregrip',
        'Zenit RK-5 Foregrip',
        'Zenit RK-6 Foregrip',
        'TD Aluminium skeletonized vertical grip'
    ],
    chargeHandle: 
    [
        "Badger Ordnance Tactical Charging Handle Latch", 
        "Colt AR-15 charging handle for AR-15",
        "Raptor charging handle for AR-15",
        "Geissele ACH charging handle for AR-15",
        "Avalanche Mod.2 charging handle for AR-15"
    ],
    sightmount:
    [
        'ELCAN SpecterDR 1x/4x Scope',
        'ELCAN SpecterDR 1x/4x Scope FDE',
        'Leupold Mark 4 HAMR 4x24mm DeltaPoint hybrid assault scope',
        'Monstrum Compact prism scope 2x32',
        'Sig BRAVO4 4X30 Scope',
        'Valday PS-320 1x/6x Scope',
        'Cobra EKP-8-18 reflex sight',
        'OKP-7 reflex sight',
        'Eotech 553 holographic sight',
        'Eotech EXPS3 holographic sight',
        'Eotech HHS-1 sight',
        'Eotech HHS-1 sight Tan',
        'Eotech XPS3-0 holographic sight',
        'Eotech XPS3-2 holographic sight',
        'Holosun HS401G5 reflex sight',
        'Trijicon SRS-02 reflex sight',
        'Valday 1P87 holographic sight',
        'VOMZ Pilad P1X42 "WEAVER" reflex sight',
        'Vortex Razor AMG UH-1 holographic sight',
        'Walther MRS reflex sight',
        'Belomo PK-06 reflex sight',
        'FLIR RS-32 2.25-9x 35mm 60Hz thermal riflescope',
        'Aimpoint mount for the sights of Micro series',
        'Aimpoint LRP mount for COMP M4 sights.',
        'Armasight universal base',
        '30mm ring-mount AR- P.E.P.R. made by Burris',
        'Burris FastFire Weaver Base',
        '34mm one piece magmount made by I-E-A Mil Optics',
        '30mm ring-mount made by JP',
        'KMZ 1P69 Weaver mount',
        'La Rue Tactical picatinny riser QD LT-101 mount',
        'Cross Slot Mount base for Deltapoint scopes',
        '30mm Scope mount',
        '30mm rings made by Nightforce',
        '34mm one piece magmount made by Nightforce',
        '34mm one piece magmount made by Nightforce with a Multimount rail',
        'Compact mount for sights',
        'Sig Sauer mount for the sights of Romeo series.',
        'High profile mount for Trijicon RMR',
        'Low profile mount for Trijicon RMR',
        'TA51 Mount for sights',
        'UNV DLOC-IRD Mount for sights'
    ],
    muzzle:
    [
        'Surefire FH556RC 5.56x45 Flash hider for AR-15',
        'Annihilator 7.62x39, 5.56x45 and 9mm flash hider for AR-15',
        'AAC Blackout 51T 5.56x45 flash-hider',
        'ADAR 2-15.56x45 Flashhider',
        'Bulletec ST-6012 5.56x45 Flash hider for AR-15',
        'Colt USGI A2 5.56x45 Flash hider for AR-15',
        'Daniel Defense Wave Muzzle Brake 5.56x45',
        'Desert Tech 5.56x45 Flash hider',
        'KAC QD Compensator 5.56x45',
        'Nordic Corvette 5.56x45 compensator for AR-15',
        'Noveske KX3 5.56x45 flash hider',
        'PWS CQB 5.56 x 45 Muzzle brake',
        'Surefire SF3P 5.56x45 Flash hider for AR-15',
        'Surefire WarComp 5.56x45 Flash hider for AR-15',
        'Thunder Beast 223CB Muzzle brake 5.56x45',
        'TROY Claymore 5.56x45 muzzle brake for AR-15',
        'Muzzle brake Vendetta precision VP-09 5.56x45',
        'Direct Thread Mount adapter for Gemtech ONE.',
        'Direct Thread Mount adapter for Silencerco Hybrid 46.',
        'Rotor 43 5.56x45 muzzle brake',
        'Ferfrans Muzzle Brake 5.56x45'
    ]

}

let newObj = {
    gun: null,
    barrel: null,
    handguar: null,
    tubeStock: null,
    grip: null,
    foregrip: null,
    chargeHandle: null,
    sightmount: null,
    muzzle: null
};

function a() {
        for (const key in obj) {
            let randomNum = Math.floor(obj[key].length * Math.random(0, 1));
            console.log(key + " : " + obj[key][randomNum]);
            newObj[key] = obj[key][randomNum];
    }
}

let contentExist = false;

btn.addEventListener('click' , () => {
    if(contentExist == true){
        content.innerHTML = "";
    }

    a();

    for (const key in newObj) {
        if (newObj.hasOwnProperty(key)) {
            const element = newObj[key];
            content.innerHTML += `<h1 class="list">${key} : ${element}</h1>`;
            contentExist = true;
        }
    }   
})  

