
function formatBoard(input) {
   input = input.replace(/X/g, "❌").replace(/O/g, "⚪")
   let splits = input.split("\n").map(s => s.split(""))
   let grid = "      ┬      ┬      \n" +
              "  1   │  2   │  3   \n" +
              "      │      │      \n" +
              "├─────╬──────╬─────┤\n" +
              "      │      │      \n" +
              "  4   │  5   │  6   \n" +
              "      │      │      \n" +
              "├─────╬──────╬─────┤\n" +
              "      │      │      \n" +
              "  7   │  8   │  9   \n" +
              "      ┴      ┴      "
    return grid.replace(/1/, splits[0][0])
               .replace(/2/, splits[0][1])
               .replace(/3/, splits[0][2])
               .replace(/4/, splits[1][0])
               .replace(/5/, splits[1][1])
               .replace(/6/, splits[1][2])
               .replace(/7/, splits[2][0])
               .replace(/8/, splits[2][1])
               .replace(/9/, splits[2][2])
}

function formatSummary(summary) {
    let res = summary.map(formatBoard)
    var lines = [[], [], [], [], [], [], [], [], [], [], []]

    res.forEach((s, i) => {
        let splits = s.split("\n")
        splits.forEach((v, i) => lines[i].push(v))
    });
    lines = lines.map(l => l.join(" ░ "))
    return lines.join("\n")
}

function logRecap(recap) {
    let summary_string = formatSummary(recap.summary)
    let l1 = summary_string.split("\n")[0]
    let border = new Array(l1.length+5).join("░")
    if ( recap.victory === " " )
        console.log("🛡  Draw")
    else if ( recap.victory === 'X' )
        console.log("🏆  Victory ❌  [" + recap.x + "]")
    else if ( recap.victory === 'O' )
        console.log("🏆  Victory ⚪  [" + recap.o + "]")
    console.log("")
    console.log("❌  AI: " + recap.x)
    console.log("⚪  AI: " + recap.o)
    console.log("🔃  Turns: " + recap.step)
    console.log("")
    console.log("🕹️  Summary")
    console.log(border)
    console.log(summary_string.split("\n").map(l => '░ '+l+' ░').join("\n"))
    console.log(border)
}

async function playbackRecap(recap, callback) {
    console.log('\033c')
    for(var i = 0; i < recap.summary.length; i++) {
        let s = recap.summary[i]
        console.log("🔃  Turn: ", i+1)
        console.log(formatBoard(s))
        await sleep(1000)
        if ( i != (recap.summary.length-1) )
            console.log('\033c')
    }
    logRecap(recap)
}

function sleep(ms) {
    return new Promise(r => { setTimeout(r, ms) })
}

module.exports = {
    board: formatBoard,
    summary: formatSummary,
    recap: logRecap,
    playback: playbackRecap
}

