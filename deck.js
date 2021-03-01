//import draw from "functions.js"

exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify(draw(3)),
    };
    return response;
};

/* ================
    functions
 ================= */
 
 const draw = function(n) {
    var cardsInDeck = ["ar00", "ar01", "ar02", "ar03", "ar04", "ar05", "ar06", 
                    "ar07", "ar08", "ar09", "ar10", "ar11", "ar12", "ar13", 
                    "ar14", "ar15", "ar16", "ar17", "ar18", "ar19", "ar20", "ar21",
                    "cu01", "cu02", "cu03", "cu04", "cu05", "cu06", "cu07", 
                    "cu08", "cu09", "cu10", "cu11", "cu12", "cu13", "cu14", 
                    "sw01", "sw02", "sw03", "sw04", "sw05", "sw06", "sw07", 
                    "sw08", "sw09", "sw10", "sw11", "sw12", "sw13", "sw14", 
                    "pe01", "pe02", "pe03", "pe04", "pe05", "pe06", "pe07", 
                    "pe08", "pe09", "pe10", "pe11", "pe12", "pe13", "pe14", 
                    "wa01", "wa02", "wa03", "wa04", "wa05", "wa06", "wa07", 
                    "wa08", "wa09", "wa10", "wa11", "wa12", "wa13", "wa14", ]
    var cardsPulled = []
    var nRemaining = 78
    for (let i = 0; i < n; i++) {
        var index = Math.floor(Math.random() * Math.floor(nRemaining))
        var result = cardsInDeck.splice(index, 1)
        cardsPulled.push(result)
        nRemaining--
    }
    
    return cardsPulled.map(x=>deck[x])
}

    /*  =========================================================================================
    0: the fool || 1: ace || 2-10: normal || 11: page || 12: knight || 13: queen || 14: king 
    ar: major arcana || cu: cups || sw: swords || pe: pentacles || wa: wands
    ========================================================================================== */

const deck = {
    ar00: { name: "Fool", id: "ar00", upright: "Beginnings, innocence, spontaneity, a free spirit", reverse: "Holding back, recklessness, risk-taking" },
    ar01: { name: "The Magician", id: "ar01", upright: "Manifestation, resourcefulness, power, inspired action", reverse: "Manipulation, poor planning, untapped talents" },
    ar02: { name: "High Priestess", id: "ar02", upright: "Intuition, sacred knowledge, divine feminine, the subconscious mind", reverse: "Secrets, disconnected from intuition, withdrawal and silence" },
    ar03: { name: "The Empress", id: "ar03", upright: "Femininity, beauty, nature, nurturing, abundance", reverse: "Creative block, dependence on others" },
    ar04: { name: "The Emperor", id: "ar04", upright: "Authority, establishment, structure, a father figure", reverse: "Domination, excessive control, lack of discipline, inflexibility" },
    ar05: { name: "Hierophant", id: "ar05", upright: "Spiritual wisdom, religious beliefs, conformity, tradition,institutions", reverse: "Personal beliefs, freedom, challenging the status quo" },
    ar06: { name: "Lovers", id: "ar06", upright: "Love, harmony, relationships, values alignment, choices", reverse: "Self-love, disharmony, imbalance, misalignment of values" },
    ar07: { name: "Chariot", id: "ar07", upright: "Control, willpower, success, action, determination", reverse: "Self-discipline, opposition, lack of direction" },
    ar08: { name: "Strength", id: "ar08", upright: "Strength, courage, persuasion, influence, compassion", reverse: "Inner strength, self-doubt, low energy, raw emotion" },
    ar09: { name: "Hermit", id: "ar09", upright: "Soul-searching, introspection, being alone, inner guidance", reverse: "Isolation, loneliness, withdrawal" },
    ar10: { name: "Wheel of Fortune", id: "ar10", upright: "Good luck, karma, life cycles, destiny, a turning point", reverse: "Bad luck, resistance to change, breaking cycles" },
    ar11: { name: "Justice", id: "ar11", upright: "Justice, fairness, truth, cause and effect, law", reverse: "Unfairness, lack of accountability, dishonesty" },
    ar12: { name: "Hanged Man", id: "ar12", upright: "Pause, surrender, letting go, new perspectives", reverse: "Delays, resistance, stalling, indecision" },
    ar13: { name: "Death", id: "ar13", upright: "Endings, change, transformation, transition", reverse: "Resistance to change, personal transformation, inner purging" },
    ar14: { name: "Temperance", id: "ar14", upright: "Balance, moderation, patience, purpose", reverse: "Imbalance, excess, self-healing, re-alignment" },
    ar15: { name: "Devil", id: "ar15", upright: "Shadow self, attachment, addiction, restriction, sexuality", reverse: "Releasing limiting beliefs, exploring dark thoughts, detachment" },
    ar16: { name: "Tower", id: "ar16", upright: "Sudden change, upheaval, chaos, revelation, awakening", reverse: "Personal transformation, fear of change, averting disaster" },
    ar17: { name: "Star", id: "ar17", upright: "Hope, faith, purpose, renewal, spirituality", reverse: "Lack of faith, despair, self-trust, disconnection" },
    ar18: { name: "Moon", id: "ar18", upright: "Illusion, fear, anxiety, subconscious, intuition", reverse: "Release of fear, repressed emotion, inner confusion" },
    ar19: { name: "Sun", id: "ar19", upright: "Positivity, fun, warmth, success, vitality", reverse: "Inner child, feeling down, overly optimistic" },
    ar20: { name: "Judgement", id: "ar20", upright: "Judgement, rebirth, inner calling, absolution", reverse: "Self-doubt, inner critic, ignoring the call" },
    ar21: { name: "World", id: "ar21", upright: "Completion, integration, accomplishment, travel", reverse: "Seeking personal closure, short-cuts, delays" },
    cu01: { name: "Ace of Cups", id: "cu01", upright: "Love, new relationships, compassion, creativity.", reverse: "Self-love, intuition, repressed emotions." },
    cu02: { name: "Two of Cups", id: "cu02", upright: "Unified love, partnership, mutual attraction", reverse: "Self-love, break-ups, disharmony, distrust." },
    cu03: { name: "Three of Cups", id: "cu03", upright: "Celebration, friendship, creativity, collaborations.", reverse: "Independence, alone time, hardcore partying, ‘three’s a crowd’." },
    cu04: { name: "Four of Cups", id: "cu04", upright: "Meditation, contemplation, apathy, reevaluation.", reverse: "Retreat, withdrawal, checking in for alignment." },
    cu05: { name: "Five of Cups", id: "cu05", upright: "Regret, failure, disappointment, pessimism.", reverse: "Personal setbacks, self-forgiveness, moving on." },
    cu06: { name: "Six of Cups", id: "cu06", upright: "Revisiting the past, childhood memories, innocence, joy.", reverse: "Living in the past, forgiveness, lacking playfulness." },
    cu07: { name: "Seven of Cups", id: "cu07", upright: "Opportunities, choices, wishful thinking, illusion.", reverse: "Alignment, personal values, overwhelmed by choices." },
    cu08: { name: "Eight of Cups", id: "cu08", upright: "Disappointment, abandonment, withdrawal, escapism.", reverse: "Trying one more time, indecision, aimless drifting, walking away." },
    cu09: { name: "Nine of Cups", id: "cu09", upright: "Contentment, satisfaction, gratitude, wish come true.", reverse: "Inner happiness, materialism, dissatisfaction, indulgence." },
    cu10: { name: "Ten of Cups", id: "cu10", upright: "Divine love, blissful relationships, harmony, alignment.", reverse: "Disconnection, misaligned values, struggling relationships." },
    cu11: { name: "Page of Cups", id: "cu11", upright: "Creative opportunities, intuitive messages, curiosity, possibility.", reverse: "New ideas, doubting intuition, creative blocks, emotional immaturity." },
    cu12: { name: "Knight of Cups", id: "cu12", upright: "Creativity, romance, charm, imagination, beauty.", reverse: "Overactive imagination, unrealistic, jealous, moody." },
    cu13: { name: "Queen of Cups", id: "cu13", upright: "Compassionate, caring, emotionally stable, intuitive, in flow.", reverse: "Inner feelings, self-care, self-love, co-dependency." },
    cu14: { name: "King of Cups", id: "cu14", upright: "Emotionally balanced, compassionate, diplomatic.", reverse: "Self-compassion, inner feelings, moodiness, emotionally manipulative." },
    sw01: { name: "Ace of Swords", id: "sw01", upright: "Breakthroughs, new ideas, mental clarity, success", reverse: "Inner clarity, re-thinking an idea, clouded judgement" },
    sw02: { name: "Two of Swords", id: "sw02", upright: "Difficult decisions, weighing up options, an impasse, avoidance", reverse: "Indecision, confusion, information overload, stalemate" },
    sw03: { name: "Three of Swords", id: "sw03", upright: "Heartbreak, emotional pain, sorrow, grief, hurt", reverse: "Negative self-talk, releasing pain, optimism, forgiveness" },
    sw04: { name: "Four of Swords", id: "sw04", upright: "Rest, relaxation, meditation, contemplation, recuperation", reverse: "Exhaustion, burn-out, deep contemplation, stagnation" },
    sw05: { name: "Five of Swords", id: "sw05", upright: "Conflict, disagreements, competition, defeat, winning at all costs", reverse: "Reconciliation, making amends, past resentment" },
    sw06: { name: "Six of Swords", id: "sw06", upright: "Transition, change, rite of passage, releasing baggage.", reverse: "Personal transition, resistance to change, unfinished business" },
    sw07: { name: "Seven of Swords", id: "sw07", upright: "Betrayal, deception, getting away with something, acting strategically", reverse: "Imposter syndrome, self-deceit, keeping secrets" },
    sw08: { name: "Eight of Swords", id: "sw08", upright: "Negative thoughts, self-imposed restriction, imprisonment, victim mentality", reverse: "Self-limiting beliefs, inner critic, releasing negative thoughts, open to new perspectives",},
    sw09: { name: "Nine of Swords", id: "sw09", upright: "Anxiety, worry, fear, depression, nightmares", reverse: "Inner turmoil, deep-seated fears, secrets, releasing worry" },
    sw10: { name: "Ten of Swords", id: "sw10", upright: "Painful endings, deep wounds, betrayal, loss, crisis", reverse: "Recovery, regeneration, resisting an inevitable end" },
    sw11: { name: "Page of Swords", id: "sw11", upright: "New ideas, curiosity, thirst for knowledge, new ways of communicating", reverse: "Self-expression, all talk and no action, haphazard action, haste" },
    sw12: { name: "Knight of Swords", id: "sw12", upright: "Ambitious, action-oriented, driven to succeed, fast-thinking", reverse: "Restless, unfocused, impulsive, burn-out" },
    sw13: { name: "Queen of Swords", id: "sw13", upright: "Independent, unbiased judgement, clear boundaries, direct communication", reverse: "Overly-emotional, easily influenced, bitchy, cold-hearted" },
    sw14: { name: "King of Swords", id: "sw14", upright: "Mental clarity, intellectual power, authority, truth", reverse: "Quiet power, inner truth, misuse of power, manipulation" },
    pe01: { name: "Ace of Pentacles", id: "pe01", upright: "A new financial or career opportunity, manifestation, abundance.", reverse: "Lost opportunity, lack of planning and foresight." },
    pe02: { name: "Two of Pentacles", id: "pe02", upright: "Multiple priorities, time management, prioritisation, adaptability.", reverse: "Over-committed, disorganisation, reprioritisation." },
    pe03: { name: "Three of Pentacles", id: "pe03", upright: "Teamwork, collaboration, learning, implementation.", reverse: "Disharmony, misalignment, working alone." },
    pe04: { name: "Four of Pentacles", id: "pe04", upright: "Saving money, security, conservatism, scarcity, control.", reverse: "Over-spending, greed, self-protection." },
    pe05: { name: "Five of Pentacles", id: "pe05", upright: "Financial loss, poverty, lack mindset, isolation, worry.", reverse: "Recovery from financial loss, spiritual poverty." },
    pe06: { name: "Six of Pentacles", id: "pe06", upright: "Giving, receiving, sharing wealth, generosity, charity.", reverse: "Self-care, unpaid debts, one-sided charity." },
    pe07: { name: "Seven of Pentacles", id: "pe07", upright: "Long-term view, sustainable results, perseverance, investment.", reverse: "Lack of long-term vision, limited success or reward." },
    pe08: { name: "Eight of Pentacles", id: "pe08", upright: "Apprenticeship, repetitive tasks, mastery, skill development.", reverse: "Self-development, perfectionism, misdirected activity." },
    pe09: { name: "Nine of Pentacles", id: "pe09", upright: "Abundance, luxury, self-sufficiency, financial independence.", reverse: "Self-worth, over-investment in work, hustling." },
    pe10: { name: "Ten of Pentacles", id: "pe10", upright: "Wealth, financial security, family, long-term success, contribution.", reverse: "The dark side of wealth, financial failure or loss." },
    pe11: { name: "Page of Pentacles", id: "pe11", upright: "Manifestation, financial opportunity, skill development.", reverse: "Lack of progress, procrastination, learn from failure." },
    pe12: { name: "Knight of Pentacles", id: "pe12", upright: "Hard work, productivity, routine, conservatism.", reverse: "Self-discipline, boredom, feeling ‘stuck’, perfectionism." },
    pe13: { name: "Queen of Pentacles", id: "pe13", upright: "Nurturing, practical, providing financially, a working parent.", reverse: "Financial independence, self-care, work-home conflict." },
    pe14: { name: "King of Pentacles", id: "pe14", upright: "Wealth, business, leadership, security, discipline, abundance.", reverse: "Financially inept, obsessed with wealth and status, stubborn." },
    wa01: { name: "Ace of Wands", id: "wa01", upright: "Inspiration, new opportunities, growth, potential", reverse: "An emerging idea, lack of direction, distractions, delays" },
    wa02: { name: "Two of Wands", id: "wa02", upright: "Future planning, progress, decisions, discovery", reverse: "Personal goals, inner alignment, fear of unknown, lack of planning" },
    wa03: { name: "Three of Wands", id: "wa03", upright: "Progress, expansion, foresight, overseas opportunities", reverse: "Playing small, lack of foresight, unexpected delays" },
    wa04: { name: "Four of Wands", id: "wa04", upright: "Celebration, joy, harmony, relaxation, homecoming", reverse: "Personal celebration, inner harmony, conflict with others, transition." },
    wa05: { name: "Five of Wands", id: "wa05", upright: "Conflict, disagreements, competition, tension, diversity", reverse: "Inner conflict, conflict avoidance, tension release" },
    wa06: { name: "Six of Wands", id: "wa06", upright: "Success, public recognition, progress, self-confidence", reverse: "Private achievement, personal definition of success, fall from grace, egotism" },
    wa07: { name: "Seven of Wands", id: "wa07", upright: "Challenge, competition, protection, perseverance", reverse: "Exhaustion, giving up, overwhelmed" },
    wa08: { name: "Eight of Wands", id: "wa08", upright: "Movement, fast paced change, action, alignment, air travel", reverse: "Delays, frustration, resisting change, internal alignment" },
    wa09: { name: "Nine of Wands", id: "wa09", upright: "Resilience, courage, persistence, test of faith, boundaries", reverse: "Inner resources, struggle, overwhelm, defensive, paranoia" },
    wa10: { name: "Ten of Wands", id: "wa10", upright: "Burden, extra responsibility, hard work, completion", reverse: "Doing it all, carrying the burden, delegation, release" },
    wa11: { name: "Page of Wands", id: "wa11", upright: "Inspiration, ideas, discovery, limitless potential, free spirit", reverse: "Newly-formed ideas, redirecting energy, self-limiting beliefs, a spiritual path" },
    wa12: { name: "Knight of Wands", id: "wa12", upright: "Energy, passion, inspired action, adventure, impulsiveness", reverse: "Passion project, haste, scattered energy, delays, frustration" },
    wa13: { name: "Queen of Wands", id: "wa13", upright: "Courage, confidence, independence, social butterfly, determination", reverse: "Self-respect, self-confidence, introverted, re-establish sense of self" },
    wa14: { name: "King of Wands", id: "wa14", upright: "Natural-born leader, vision, entrepreneur, honour", reverse: "Impulsiveness, haste, ruthless, high expectations" },
};
