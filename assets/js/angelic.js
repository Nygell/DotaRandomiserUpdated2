$(document).ready(function () {
    $("#generate").click(function () {
        var heros = [
            {
                "img": "antimage_lg.jpg",
                "localized_name": "Anti-Mage",
                "id": 1
            },
            {
                "img": "axe_lg.jpg",
                "localized_name": "Axe",
                "id": 2
            },
            {
                "img": "bane_lg.jpg",
                "localized_name": "Bane",
                "id": 3
            },
            {
                "img": "bloodseeker_lg.jpg",
                "localized_name": "Bloodseeker",
                "id": 4
            },
            {
                "img": "crystal_maiden_lg.jpg",
                "localized_name": "Crystal Maiden",
                "id": 5
            },
            {
                "img": "drow_ranger_lg.jpg",
                "localized_name": "Drow Ranger",
                "id": 6
            },
            {
                "img": "earthshaker_lg.jpg",
                "localized_name": "Earthshaker",
                "id": 7
            },
            {
                "img": "juggernaut_lg.jpg",
                "localized_name": "Juggernaut",
                "id": 8
            },
            {
                "img": "mirana_lg.jpg",
                "localized_name": "Mirana",
                "id": 9
            },
            {
                "img": "nevermore_lg.jpg",
                "localized_name": "Shadow Fiend",
                "id": 11
            },
            {
                "img": "morphling_lg.jpg",
                "localized_name": "Morphling",
                "id": 10
            },
            {
                "img": "phantom_lancer_lg.jpg",
                "localized_name": "Phantom Lancer",
                "id": 12
            },
            {
                "img": "puck_lg.jpg",
                "localized_name": "Puck",
                "id": 13
            },
            {
                "img": "pudge_lg.jpg",
                "localized_name": "Pudge",
                "id": 14
            },
            {
                "img": "razor_lg.jpg",
                "localized_name": "Razor",
                "id": 15
            },
            {
                "img": "sand_king_lg.jpg",
                "localized_name": "Sand King",
                "id": 16
            },
            {
                "img": "storm_spirit_lg.jpg",
                "localized_name": "Storm Spirit",
                "id": 17
            },
            {
                "img": "sven_lg.jpg",
                "localized_name": "Sven",
                "id": 18
            },
            {
                "img": "tiny_lg.jpg",
                "localized_name": "Tiny",
                "id": 19
            },
            {
                "img": "vengefulspirit_lg.jpg",
                "localized_name": "Vengeful Spirit",
                "id": 20
            },
            {
                "img": "windrunner_lg.jpg",
                "localized_name": "Windranger",
                "id": 21
            },
            {
                "img": "zuus_lg.jpg",
                "localized_name": "Zeus",
                "id": 22
            },
            {
                "img": "kunkka_lg.jpg",
                "localized_name": "Kunkka",
                "id": 23
            },
            {
                "img": "lina_lg.jpg",
                "localized_name": "Lina",
                "id": 25
            },
            {
                "img": "lich_lg.jpg",
                "localized_name": "Lich",
                "id": 31
            },
            {
                "img": "lion_lg.jpg",
                "localized_name": "Lion",
                "id": 26
            },
            {
                "img": "shadow_shaman_lg.jpg",
                "localized_name": "Shadow Shaman",
                "id": 27
            },
            {
                "img": "slardar_lg.jpg",
                "localized_name": "Slardar",
                "id": 28
            },
            {
                "img": "tidehunter_lg.jpg",
                "localized_name": "Tidehunter",
                "id": 29
            },
            {
                "img": "witch_doctor_lg.jpg",
                "localized_name": "Witch Doctor",
                "id": 30
            },
            {
                "img": "riki_lg.jpg",
                "localized_name": "Riki",
                "id": 32
            },
            {
                "img": "enigma_lg.jpg",
                "localized_name": "Enigma",
                "id": 33
            },
            {
                "img": "tinker_lg.jpg",
                "localized_name": "Tinker",
                "id": 34
            },
            {
                "img": "sniper_lg.jpg",
                "localized_name": "Sniper",
                "id": 35
            },
            {
                "img": "necrolyte_lg.jpg",
                "localized_name": "Necrophos",
                "id": 36
            },
            {
                "img": "warlock_lg.jpg",
                "localized_name": "Warlock",
                "id": 37
            },
            {
                "img": "beastmaster_lg.jpg",
                "localized_name": "Beastmaster",
                "id": 38
            },
            {
                "img": "queenofpain_lg.jpg",
                "localized_name": "Queen of Pain",
                "id": 39
            },
            {
                "img": "venomancer_lg.jpg",
                "localized_name": "Venomancer",
                "id": 40
            },
            {
                "img": "faceless_void_lg.jpg",
                "localized_name": "Faceless Void",
                "id": 41
            },
            {
                "img": "skeleton_king_lg.jpg",
                "localized_name": "Wraith King",
                "id": 42
            },
            {
                "img": "death_prophet_lg.jpg",
                "localized_name": "Death Prophet",
                "id": 43
            },
            {
                "img": "phantom_assassin_lg.jpg",
                "localized_name": "Phantom Assassin",
                "id": 44
            },
            {
                "img": "pugna_lg.jpg",
                "localized_name": "Pugna",
                "id": 45
            },
            {
                "img": "templar_assassin_lg.jpg",
                "localized_name": "Templar Assassin",
                "id": 46
            },
            {
                "img": "viper_lg.jpg",
                "localized_name": "Viper",
                "id": 47
            },
            {
                "img": "luna_lg.jpg",
                "localized_name": "Luna",
                "id": 48
            },
            {
                "img": "dragon_knight_lg.jpg",
                "localized_name": "Dragon Knight",
                "id": 49
            },
            {
                "img": "dazzle_lg.jpg",
                "localized_name": "Dazzle",
                "id": 50
            },
            {
                "img": "rattletrap_lg.jpg",
                "localized_name": "Clockwerk",
                "id": 51
            },
            {
                "img": "leshrac_lg.jpg",
                "localized_name": "Leshrac",
                "id": 52
            },
            {
                "img": "furion_lg.jpg",
                "localized_name": "Nature's Prophet",
                "id": 53
            },
            {
                "img": "life_stealer_lg.jpg",
                "localized_name": "Lifestealer",
                "id": 54
            },
            {
                "img": "dark_seer_lg.jpg",
                "localized_name": "Dark Seer",
                "id": 55
            },
            {
                "img": "clinkz_lg.jpg",
                "localized_name": "Clinkz",
                "id": 56
            },
            {
                "img": "omniknight_lg.jpg",
                "localized_name": "Omniknight",
                "id": 57
            },
            {
                "img": "enchantress_lg.jpg",
                "localized_name": "Enchantress",
                "id": 58
            },
            {
                "img": "huskar_lg.jpg",
                "localized_name": "Huskar",
                "id": 59
            },
            {
                "img": "night_stalker_lg.jpg",
                "localized_name": "Night Stalker",
                "id": 60
            },
            {
                "img": "broodmother_lg.jpg",
                "localized_name": "Broodmother",
                "id": 61
            },
            {
                "img": "bounty_hunter_lg.jpg",
                "localized_name": "Bounty Hunter",
                "id": 62
            },
            {
                "img": "weaver_lg.jpg",
                "localized_name": "Weaver",
                "id": 63
            },
            {
                "img": "jakiro_lg.jpg",
                "localized_name": "Jakiro",
                "id": 64
            },
            {
                "img": "batrider_lg.jpg",
                "localized_name": "Batrider",
                "id": 65
            },
            {
                "img": "chen_lg.jpg",
                "localized_name": "Chen",
                "id": 66
            },
            {
                "img": "spectre_lg.jpg",
                "localized_name": "Spectre",
                "id": 67
            },
            {
                "img": "doom_bringer_lg.jpg",
                "localized_name": "Doom",
                "id": 69
            },
            {
                "img": "ancient_apparition_lg.jpg",
                "localized_name": "Ancient Apparition",
                "id": 68
            },
            {
                "img": "ursa_lg.jpg",
                "localized_name": "Ursa",
                "id": 70
            },
            {
                "img": "spirit_breaker_lg.jpg",
                "localized_name": "Spirit Breaker",
                "id": 71
            },
            {
                "img": "gyrocopter_lg.jpg",
                "localized_name": "Gyrocopter",
                "id": 72
            },
            {
                "img": "alchemist_lg.jpg",
                "localized_name": "Alchemist",
                "id": 73
            },
            {
                "img": "invoker_lg.jpg",
                "localized_name": "Invoker",
                "id": 74
            },
            {
                "img": "silencer_lg.jpg",
                "localized_name": "Silencer",
                "id": 75
            },
            {
                "img": "obsidian_destroyer_lg.jpg",
                "localized_name": "Outworld Devourer",
                "id": 76
            },
            {
                "img": "lycan_lg.jpg",
                "localized_name": "Lycan",
                "id": 77
            },
            {
                "img": "brewmaster_lg.jpg",
                "localized_name": "Brewmaster",
                "id": 78
            },
            {
                "img": "shadow_demon_lg.jpg",
                "localized_name": "Shadow Demon",
                "id": 79
            },
            {
                "img": "lone_druid_lg.jpg",
                "localized_name": "Lone Druid",
                "id": 80
            },
            {
                "img": "chaos_knight_lg.jpg",
                "localized_name": "Chaos Knight",
                "id": 81
            },
            {
                "img": "meepo_lg.jpg",
                "localized_name": "Meepo",
                "id": 82
            },
            {
                "img": "treant_lg.jpg",
                "localized_name": "Treant Protector",
                "id": 83
            },
            {
                "img": "ogre_magi_lg.jpg",
                "localized_name": "Ogre Magi",
                "id": 84
            },
            {
                "img": "undying_lg.jpg",
                "localized_name": "Undying",
                "id": 85
            },
            {
                "img": "rubick_lg.jpg",
                "localized_name": "Rubick",
                "id": 86
            },
            {
                "img": "disruptor_lg.jpg",
                "localized_name": "Disruptor",
                "id": 87
            },
            {
                "img": "nyx_assassin_lg.jpg",
                "localized_name": "Nyx Assassin",
                "id": 88
            },
            {
                "img": "naga_siren_lg.jpg",
                "localized_name": "Naga Siren",
                "id": 89
            },
            {
                "img": "keeper_of_the_light_lg.jpg",
                "localized_name": "Keeper of the Light",
                "id": 90
            },
            {
                "img": "wisp_lg.jpg",
                "localized_name": "Io",
                "id": 91
            },
            {
                "img": "visage_lg.jpg",
                "localized_name": "Visage",
                "id": 92
            },
            {
                "img": "slark_lg.jpg",
                "localized_name": "Slark",
                "id": 93
            },
            {
                "img": "medusa_lg.jpg",
                "localized_name": "Medusa",
                "id": 94
            },
            {
                "img": "troll_warlord_lg.jpg",
                "localized_name": "Troll Warlord",
                "id": 95
            },
            {
                "img": "centaur_lg.jpg",
                "localized_name": "Centaur Warrunner",
                "id": 96
            },
            {
                "img": "magnataur_lg.jpg",
                "localized_name": "Magnus",
                "id": 97
            },
            {
                "img": "shredder_lg.jpg",
                "localized_name": "Timbersaw",
                "id": 98
            },
            {
                "img": "bristleback_lg.jpg",
                "localized_name": "Bristleback",
                "id": 99
            },
            {
                "img": "tusk_lg.jpg",
                "localized_name": "Tusk",
                "id": 100
            },
            {
                "img": "skywrath_mage_lg.jpg",
                "localized_name": "Skywrath Mage",
                "id": 101
            },
            {
                "img": "abaddon_lg.jpg",
                "localized_name": "Abaddon",
                "id": 102
            },
            {
                "img": "elder_titan_lg.jpg",
                "localized_name": "Elder Titan",
                "id": 103
            },
            {
                "img": "legion_commander_lg.jpg",
                "localized_name": "Legion Commander",
                "id": 104
            },
            {
                "img": "ember_spirit_lg.jpg",
                "localized_name": "Ember Spirit",
                "id": 106
            },
            {
                "img": "earth_spirit_lg.jpg",
                "localized_name": "Earth Spirit",
                "id": 107
            },
            {
                "img": "terrorblade_lg.jpg",
                "localized_name": "Terrorblade",
                "id": 109
            },
            {
                "img": "phoenix_lg.jpg",
                "localized_name": "Phoenix",
                "id": 110
            }
        ];

        var items = [
            {
                "id": 206,
                "img": "rod_of_atos_lg.jpg",
                "localized_name": "Rod of Atos",
                "qual": "rare",
                "cost": 3100
            },
            {
                "id": 176,
                "img": "ethereal_blade_lg.jpg",
                "localized_name": "Ethereal Blade",
                "qual": "epic",
                "cost": 4900
            },
            {
                "img": "desolator_lg.jpg",
                "cost": 4100,
                "id": 168,
                "qual": "artifact",
                "localized_name": "Desolator"
            },
            {
                "img": "mjollnir_lg.jpg",
                "cost": 5300,
                "id": 158,
                "qual": "artifact",
                "localized_name": "Mjollnir"
            },
            {
                "img": "butterfly_lg.jpg",
                "cost": 6000,
                "id": 139,
                "qual": "epic",
                "localized_name": "Butterfly"
            },
            {
                "img": "bloodstone_lg.jpg",
                "cost": 5050,
                "id": 121,
                "qual": "epic",
                "localized_name": "Bloodstone"
            },
            {
                "img": "satanic_lg.jpg",
                "cost": 6150,
                "id": 156,
                "qual": "artifact",
                "localized_name": "Satanic"
            },
            {
                "img": "necronomicon_3_lg.jpg",
                "cost": 2700,
                "id": 194,
                "qual": "rare",
                "localized_name": "Necronomicon"
            },
            {
                "img": "radiance_lg.jpg",
                "cost": 5150,
                "id": 137,
                "qual": "epic",
                "localized_name": "Radiance"
            },
            {
                "img": "bfury_lg.jpg",
                "cost": 4350,
                "id": 145,
                "qual": "epic",
                "localized_name": "Battle Fury"
            },
            {
                "img": "abyssal_blade_lg.jpg",
                "cost": 6750,
                "id": 208,
                "qual": "epic",
                "localized_name": "Abyssal Blade"
            },
            {
                "img": "dagon_5_lg.jpg",
                "cost": 2850,
                "id": 202,
                "qual": "rare",
                "localized_name": "Dagon"
            },
            {
                "img": "monkey_king_bar_lg.jpg",
                "cost": 5400,
                "id": 135,
                "qual": "epic",
                "localized_name": "Monkey King Bar"
            },
            {
                "img": "sheepstick_lg.jpg",
                "cost": 5675,
                "id": 96,
                "qual": "rare",
                "localized_name": "Scythe of Vyse"
            },
            {
                "img": "ultimate_scepter_lg.jpg",
                "cost": 4200,
                "id": 108,
                "qual": "rare",
                "localized_name": "Aghanim's Scepter"
            },
            {
                "img": "skadi_lg.jpg",
                "cost": 5675,
                "id": 160,
                "qual": "artifact",
                "localized_name": "Eye of Skadi"
            },
            {
                "img": "manta_lg.jpg",
                "cost": 5050,
                "id": 147,
                "qual": "epic",
                "localized_name": "Manta Style"
            },
            {
                "img": "armlet_lg.jpg",
                "cost": 2600,
                "id": 151,
                "qual": "epic",
                "localized_name": "Armlet of Mordiggian"
            },
            {
                "img": "vanguard_lg.jpg",
                "cost": 2225,
                "id": 125,
                "qual": "epic",
                "localized_name": "Vanguard"
            },
            {
                "img": "shivas_guard_lg.jpg",
                "cost": 4700,
                "id": 119,
                "qual": "epic",
                "localized_name": "Shiva's Guard"
            },
            {
                "img": "rapier_lg.jpg",
                "cost": 6200,
                "id": 133,
                "qual": "epic",
                "localized_name": "Divine Rapier"
            },
            {
                "img": "pipe_lg.jpg",
                "cost": 3625,
                "id": 90,
                "qual": "rare",
                "localized_name": "Pipe of Insight"
            },
            {
                "img": "heart_lg.jpg",
                "cost": 5500,
                "id": 114,
                "qual": "epic",
                "localized_name": "Heart of Tarrasque"
            },
            {
                "img": "vladmir_lg.jpg",
                "cost": 2050,
                "id": 81,
                "qual": "rare",
                "localized_name": "Vladmir's Offering"
            },
            {
                "img": "lesser_crit_lg.jpg",
                "cost": 2150,
                "id": 149,
                "qual": "epic",
                "localized_name": "Crystalys"
            },
            {
                "img": "sange_and_yasha_lg.jpg",
                "cost": 4100,
                "id": 154,
                "qual": "artifact",
                "localized_name": "Sange and Yasha"
            },
            {
                "img": "invis_sword_lg.jpg",
                "cost": 3000,
                "id": 152,
                "qual": "epic",
                "localized_name": "Shadow Blade"
            },
            {
                "img": "orchid_lg.jpg",
                "cost": 5025,
                "id": 98,
                "qual": "rare",
                "localized_name": "Orchid Malevolence"
            },
            {
                "img": "assault_lg.jpg",
                "cost": 5250,
                "id": 112,
                "qual": "epic",
                "localized_name": "Assault Cuirass"
            },
            {
                "img": "ancient_janggo_lg.jpg",
                "cost": 1875,
                "id": 185,
                "qual": "rare",
                "localized_name": "Drum of Endurance"
            },
            {
                "img": "sphere_lg.jpg",
                "cost": 5175,
                "id": 123,
                "qual": "epic",
                "localized_name": "Linken's Sphere"
            },
            {
                "img": "medallion_of_courage_lg.jpg",
                "cost": 1075,
                "id": 187,
                "qual": "rare",
                "localized_name": "Medallion of Courage"
            },
            {
                "img": "veil_of_discord_lg.jpg",
                "cost": 2675,
                "id": 190,
                "qual": "rare",
                "localized_name": "Veil of Discord"
            },
            {
                "img": "heavens_halberd_lg.jpg",
                "cost": 3850,
                "id": 210,
                "qual": "artifact",
                "localized_name": "Heaven's Halberd"
            },
            {
                "img": "black_king_bar_lg.jpg",
                "cost": 3975,
                "id": 116,
                "qual": "epic",
                "localized_name": "Black King Bar"
            },
            {
                "img": "hand_of_midas_lg.jpg",
                "cost": 2050,
                "id": 65,
                "qual": "common",
                "localized_name": "Hand of Midas"
            },
            {
                "img": "greater_crit_lg.jpg",
                "cost": 5550,
                "id": 141,
                "qual": "epic",
                "localized_name": "Daedalus"
            },
            {
                "img": "blink_lg.jpg",
                "cost": 2150,
                "id": 1,
                "qual": "component",
                "localized_name": "Blink Dagger"
            },
            {
                "img": "diffusal_blade_2_lg.jpg",
                "cost": 3300,
                "id": 196,
                "qual": "artifact",
                "localized_name": "Diffusal Blade"
            },
            {
                "img": "diffusal_blade_lg.jpg",
                "cost": 3300,
                "id": 174,
                "qual": "artifact",
                "localized_name": "Diffusal Blade"
            },
            {
                "img": "cyclone_lg.jpg",
                "cost": 2700,
                "id": 100,
                "qual": "rare",
                "localized_name": "Eul's Scepter of Divinity"
            },
            {
                "img": "mask_of_madness_lg.jpg",
                "cost": 1900,
                "id": 172,
                "qual": "artifact",
                "localized_name": "Mask of Madness"
            },
            {
                "img": "mekansm_lg.jpg",
                "cost": 2300,
                "id": 79,
                "qual": "rare",
                "localized_name": "Mekansm"
            }
        ];

        var boots = [
            {
                "img": "tranquil_boots_lg.jpg",
                "cost": 975,
                "id": 214,
                "qual": "rare",
                "localized_name": "Tranquil Boots"
            },
            {
                "img": "power_treads_lg.jpg",
                "cost": 1400,
                "id": 63,
                "qual": "common",
                "localized_name": "Power Treads"
            },
            {
                "img": "travel_boots_lg.jpg",
                "cost": 2450,
                "id": 48,
                "qual": "common",
                "localized_name": "Boots of Travel"
            },
            {
                "img": "arcane_boots_lg.jpg",
                "cost": 1450,
                "id": 180,
                "qual": "rare",
                "localized_name": "Arcane Boots"
            },
            {
                "img": "phase_boots_lg.jpg",
                "cost": 1350,
                "id": 50,
                "qual": "common",
                "localized_name": "Phase Boots"
            }
        ];
        var $hero_img = $("#hero-img");
        var $boot_img = $("#boot-img");
        var $item_img = [$("#item1-img"), $("#item2-img"), $("#item3-img"), $("#item4-img"), $("#item5-img")];
        var build_output = "";

        var hero_rand = Math.floor(Math.random() * heros.length);
        $hero_img.attr("src", "assets/img/Heroes/".concat(heros[hero_rand]["img"]));
        $hero_img.attr("title", heros[hero_rand]["localized_name"]);
        build_output += heros[hero_rand]["localized_name"] + "\n";

        var boot_rand = Math.floor(Math.random() * boots.length);
        $boot_img.attr("src", "assets/img/Boots/".concat(boots[boot_rand]["img"]));
        $boot_img.attr("title", boots[boot_rand]["localized_name"]);
        build_output += boots[boot_rand]["localized_name"] + "\n";

        for (var i = 0; i < 5; i++) {
            var item_rand = Math.floor(Math.random() * items.length);
            $item_img[i].attr("src", "assets/img/Items/".concat(items[item_rand]["img"]));
            $item_img[i].attr("title", items[item_rand]["localized_name"]);
            build_output += items[item_rand]["localized_name"] + "\n";
            items.splice(item_rand, 1)
        }

        $("#build-output").val(build_output);
    });
});