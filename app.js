var trains = [
    { time: "10:00", destination: "東京", platform: 1 },
    { time: "10:15", destination: "大阪", platform: 2 },
    { time: "10:30", destination: "名古屋", platform: 3 },
    { time: "10:45", destination: "福岡", platform: 1 },
];
function populateTrainSchedule(t) {
    var scheduleTable = document.getElementById("train-schedule");
    if (scheduleTable) {
        scheduleTable.innerHTML = ""; // Clear existing rows
        t.forEach(function (train) {
            var row = document.createElement("tr");
            var timeCell = document.createElement("td");
            timeCell.textContent = train.time;
            row.appendChild(timeCell);
            var destinationCell = document.createElement("td");
            destinationCell.textContent = train.destination;
            row.appendChild(destinationCell);
            var platformCell = document.createElement("td");
            platformCell.textContent = train.platform.toString();
            // Platformが3のときに赤色にする
            if (train.platform === 3) {
                platformCell.style.color = "red";
                console.log("platform:3");
            }
            row.appendChild(platformCell);
            scheduleTable.appendChild(row);
        });
        console.log("Updated!");
    }
}
function updateTrainSchedule() {
    // ダミーデータを更新（ここで新しいデータを取得するロジックを追加）
    trains = [
        { time: "10:30", destination: "京都", platform: 1 },
        { time: "10:45", destination: "広島", platform: 2 },
        { time: "11:00", destination: "札幌", platform: 3 },
        { time: "11:15", destination: "仙台", platform: 1 },
    ];
    // 新しいデータでスケジュールを更新
    populateTrainSchedule(trains);
}
// 初回のスケジュールを表示
populateTrainSchedule(trains);
// 30秒ごとにスケジュールを更新
setInterval(updateTrainSchedule, 10000);
