document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("loginModal");
    const image = document.getElementById("responsiveImage");
    const areas = document.querySelectorAll("area");

    // 顯示彈窗
    modal.style.display = "flex";

    // 原始圖片大小
    const originalWidth = 1178; // 圖片原始寬度
    const originalHeight = 989; // 圖片原始高度

    // 動態調整 <area> 的 coords
    function adjustAreaCoords() {
        const currentWidth = image.clientWidth; // 圖片當前顯示寬度
        const currentHeight = image.clientHeight; // 圖片當前顯示高度

        const widthRatio = currentWidth / originalWidth; // 寬度縮放比例
        const heightRatio = currentHeight / originalHeight; // 高度縮放比例

        areas.forEach((area) => {
            const originalCoords = area.dataset.originalCoords.split(",").map(Number); // 獲取原始 coords
            const scaledCoords = originalCoords.map((coord, index) =>
                index % 2 === 0 ? coord * widthRatio : coord * heightRatio
            ); // 根據比例調整 coords
            area.coords = scaledCoords.join(","); // 更新 coords
        });
    }

    // 處理點擊事件
    window.handleAreaClick = function (firstUrl, secondUrl) {
        // 跳轉到第一個指定的網頁
        window.open(firstUrl, '_blank'); // 在新標籤頁打開第一個網頁

        // 設置延遲跳轉到第二個 HTML 頁面
        setTimeout(() => {
            window.location.href = secondUrl; // 在當前標籤頁跳轉到第二個頁面
        }, 2000); // 延遲 2 秒（根據需要調整時間）
    };

    // 在頁面加載和窗口大小改變時調整 coords
    adjustAreaCoords();
    window.addEventListener("resize", adjustAreaCoords);
});